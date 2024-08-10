import { Suspense } from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Transactions from "../../components/Transactions";
import TransactionsSkeleton from "../../components/TransactionsSkeleton";

export const metadata: Metadata = {
  title:
    "View Transactions | Track Token Activity in Your Cryptocurrency System",
  description:
    "Monitor and analyze token transactions with our comprehensive transactions table. Easily track token movement, transaction details, and account activity within your custom cryptocurrency or points system. Gain valuable insights into your digital currency operations.",
};

const WalletPage = async ({
  params: { symbol },
  searchParams: { address },
}: {
  params: { symbol: string };
  searchParams: { address?: string };
}) => {
  return (
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
  );
};

export default WalletPage;
