import { Suspense } from "react";

import Link from "next/link";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import { Button } from "@/components/ui/button";

import BallanceRow from "../components/BallanceRow";
import CryptoGradient from "../components/CryptoGradient";

import Transactions from "./components/Transactions";
import getBallance from "./services/getBallance";

const WalletPage = async () => {
  const wallet = getWalletFromCookie();
  const ballance = await getBallance(wallet.address);
  const ballanceEntries = Object.entries(ballance);
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex items-end justify-between">
          <div className="flex space-x-2">
            <CryptoGradient
              address={wallet.address}
              className="size-12 rounded-full"
            />
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Wallet</h1>
              <h6 className="text-sm text-muted-foreground">
                Address: {wallet.address}
              </h6>
            </div>
          </div>
          <Button asChild>
            <Link href="/blls/send">Send</Link>
          </Button>
        </div>
        <div className="flex flex-col">
          {ballanceEntries.map(([key, value]) => (
            <BallanceRow
              key={key}
              symbol={key}
              value={value}
              address={wallet.address}
            />
          ))}
        </div>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Transactions</h1>
        </div>
        <Suspense fallback={null}>
          <Transactions address={wallet.address} />
        </Suspense>
      </div>
    </>
  );
};

export default WalletPage;
