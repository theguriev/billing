import { CircleArrowUpIcon } from "lucide-react";
import Link from "next/link";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import getBallance from "../services/getBallance";

const WalletPage = async () => {
  const wallet = getWalletFromCookie();
  const ballance = await getBallance(wallet.address);
  const ballanceEntries = Object.entries(ballance);
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Wallet</h1>
        <h6 className="text-sm text-muted-foreground">
          Address: {wallet.address}
        </h6>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ballanceEntries.map(([key, value]) => (
            <Card key={key}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {key.toUpperCase()} Ballance
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between">
                <div className="text-2xl font-bold">{value}</div>
                <Button asChild>
                  <Link href={`/app/wallet/${wallet.address}/${key}`}>
                    <CircleArrowUpIcon className="mr-2 size-4" />
                    Send
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default WalletPage;
