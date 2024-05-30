import { Suspense } from "react";

import { Wallet } from "ethers";
import type { Metadata } from "next";

import Form from "./components/Form";
import LogoutHandler from "./components/LogoutHandler";

export const metadata: Metadata = {
  title: "Secure Mnemonic phrase Login | Access Your Account Safely",
  description:
    "Log in securely with Mnemonic phrase. Experience the convenience and enhanced security of mnemonic-based authentication. Access your account with ease and peace of mind.",
};

export const dynamic = "force-dynamic";

export default function Page() {
  const wallet = Wallet.createRandom();
  return (
    <div>
      <Form initialMnemonic={String(wallet.mnemonic?.phrase)} />
      <Suspense fallback={null}>
        <LogoutHandler />
      </Suspense>
    </div>
  );
}
