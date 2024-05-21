import { Suspense } from "react";

import Link from "next/link";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import { Button } from "@/components/ui/button";

import Transactions from "../../components/Transactions";

const WalletPage = async ({
  params: { symbol },
}: {
  params: { symbol: string };
}) => {
  const wallet = getWalletFromCookie();
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex items-end justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">Transactions</h1>
          <Button asChild>
            <Link href={`/blls/send?${new URLSearchParams({ symbol })}`}>
              Send
            </Link>
          </Button>
        </div>
        <Suspense fallback={null}>
          <Transactions address={wallet.address} symbol={symbol} />
        </Suspense>
      </div>
    </>
  );
};

export default WalletPage;
