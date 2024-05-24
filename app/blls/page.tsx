import { Suspense } from "react";

import Link from "next/link";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import { Button } from "@/components/ui/button";

import BallanceRow from "../components/BallanceRow";
import CryptoGradient from "../components/CryptoGradient";

import Transactions from "./components/Transactions";
import TransactionsSkeleton from "./components/TransactionsSkeleton";
import getBallance from "./services/getBallance";

const WalletPage = async () => {
  const wallet = getWalletFromCookie();
  const ballance = await getBallance(wallet.address);
  const ballanceEntries = Object.entries(ballance);
  const noTransactions = ballanceEntries.length === 0;
  const mobileAddress =
    wallet.address.slice(0, 6) + "..." + wallet.address.slice(-4);
  return (
    <>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-end">
          <div className="flex space-x-2">
            <CryptoGradient
              address={wallet.address}
              className="size-12 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-semibold md:text-2xl">Wallet</h1>
              <h6 className="hidden text-sm text-muted-foreground md:flex">
                Address: {wallet.address}
              </h6>
              <h6 className="text-sm text-muted-foreground md:hidden">
                {mobileAddress}
              </h6>
            </div>
          </div>
          {!noTransactions && (
            <Button asChild className="w-full md:w-auto">
              <Link href="/blls/send">Send</Link>
            </Button>
          )}
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
        {!noTransactions ? (
          <Suspense fallback={<TransactionsSkeleton />}>
            <Transactions address={wallet.address} />
          </Suspense>
        ) : (
          <div
            className="flex flex-1 items-center justify-center"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                No Transactions Yet 🤷🏼‍♂️
              </h3>
              <p className="text-sm text-muted-foreground">
                You haven&apos;t made any transactions. You can create your own
                token or receive some from your friends.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/blls/create-token">Create Token</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WalletPage;
