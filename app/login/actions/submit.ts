"use server";
import { Wallet } from "ethers";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { FormSchema } from "../zod";

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

const submit = async (body: FormSchema) => {
  const wallet = Wallet.fromPhrase(body.mnemonic);
  cookies().set("privateKey", wallet.privateKey, {
    path: "/",
    expires: Date.now() + ONE_YEAR,
    domain: process.env.COOKIE_DOMAIN,
  });
  cookies().set("address", wallet.address, {
    path: "/",
    expires: Date.now() + ONE_YEAR,
    domain: process.env.COOKIE_DOMAIN,
  });
  redirect("/blls");
};

export default submit;
