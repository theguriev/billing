"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import signTransaction from "@/app/utils/signTransaction";
import { api } from "@/lib/openapi/apiClient";

import { type FormSchema } from "../zod";

const submit = async (body: FormSchema & { symbol: string }) => {
  const wallet = getWalletFromCookie();
  const signature = await signTransaction(
    wallet.privateKey,
    wallet.address,
    body.address,
    Number(body.amount),
    body.symbol
  );

  const request = await api.billing("/transactions", "post", {
    headers: { "Content-Type": "application/json" },
    body: {
      from: wallet.address,
      to: body.address,
      value: Number(body.amount),
      message: body.message,
      signature: signature,
      symbol: body.symbol,
    },
  });

  const response = await request.json();
  if (request.status === 200) {
    revalidateTag("ballance");
    redirect("/blls");
  }
  return response;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
