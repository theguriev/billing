import { Suspense } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import Transactions from "../../components/Transactions";
import TransactionsSkeleton from "../../components/TransactionsSkeleton";

const WalletPage = async ({
  params: { symbol },
  searchParams: { address },
}: {
  params: { symbol: string };
  searchParams: { address?: string };
}) => {
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
        <Suspense fallback={<TransactionsSkeleton />}>
          <Transactions address={address} symbol={symbol} />
        </Suspense>
      </div>
    </>
  );
};

export default WalletPage;
