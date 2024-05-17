/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import { Button } from "@/components/ui/button";

import Token from "./components/Token";
import getTokens from "./services/getTokens";

dayjs.extend(relativeTime);

const AppPage = async () => {
  const wallet = getWalletFromCookie();
  const tokens = await getTokens();
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Tokens</h1>
        {tokens.length > 0 && (
          <Button asChild>
            <Link href="/app/create-token">Create Token</Link>
          </Button>
        )}
      </div>
      <div className="flex flex-col">
        {tokens.length > 0 ? (
          tokens.map((token) => (
            <Token
              key={token._id}
              {...token}
              canIssue={token.address === wallet.address}
            />
          ))
        ) : (
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                There is not tokens yet 🙃
              </h3>
              <p className="text-sm text-muted-foreground">
                Your token can be first.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/app/create-token">Create Token</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AppPage;
