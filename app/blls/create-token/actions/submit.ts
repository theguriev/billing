"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import passSetCookie from "@/app/utils/passSetCookie";
import signToken from "@/app/utils/signToken";
import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  const wallet = getWalletFromCookie();
  const request = await api.billing("/tokens", "post", {
    headers: { "Content-Type": "application/json" },
    authorization: true,
    body: {
      ...body,
      emission: Number(body.emission),
      address: wallet.address,
      signature: await signToken(
        wallet.privateKey,
        body.name,
        wallet.address,
        Number(body.emission),
        body.symbol
      ),
    },
  });

  passSetCookie(request.headers.getSetCookie());
  if (request.status === 200) {
    revalidateTag("tokens");
    redirect("/blls");
  }
  const response = await request.json();
  return response;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
