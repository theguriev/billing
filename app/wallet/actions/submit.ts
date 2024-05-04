"use server";
import { Wallet } from "ethers";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  const wallet = Wallet.fromPhrase(body.mnemonic);
  cookies().set("privateKey", wallet.privateKey, { path: "/" });
  cookies().set("address", wallet.address, { path: "/" });
  redirect("/app");
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
