"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import passSetCookie from "@/app/utils/passSetCookie";
import signIssue from "@/app/utils/signIssue";
import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema & { symbol: string }) => {
  const wallet = getWalletFromCookie();
  const request = await api.billing("/tokens/issue", "post", {
    headers: { "Content-Type": "application/json" },
    authorization: true,
    body: {
      ...body,
      emission: Number(body.emission),
      address: wallet.address,
      symbol: body.symbol,
      signature: await signIssue(
        wallet.privateKey,
        wallet.address,
        Number(body.emission),
        body.symbol
      ),
    },
  });

  const response = await request.json();
  passSetCookie(request.headers.getSetCookie());
  if (request.status === 200) {
    revalidateTag("tokens");
    revalidateTag("transactions");
    redirect("/blls");
  }
  return response;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
