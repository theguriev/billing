/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CalendarClockIcon, HashIcon } from "lucide-react";
import Link from "next/link";

import getMe from "@/app/utils/getMe";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import getTokens from "./services/getTokens";

dayjs.extend(relativeTime);

const AppPage = async () => {
  const me = await getMe();
  const tokens = await getTokens();
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Tokens</h1>
        <Button asChild>
          <Link href="/app/create-token">Create Token</Link>
        </Button>
      </div>
      {tokens.length > 0 ? (
        tokens.map((token) => (
          <Card key={token._id} className="flex justify-between">
            <CardHeader className="space-y-0">
              <CardTitle>
                <Button variant="link" asChild className="p-0">
                  <Link href={`/transaction/${token.symbol}`}>
                    {token.name}
                  </Link>
                </Button>
              </CardTitle>

              <div className="flex items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CalendarClockIcon className="mr-1 size-[1em] text-xs text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>Timestamp: {token.timestamp}</TooltipContent>
                </Tooltip>
                <div className="mr-1 text-xs font-medium text-muted-foreground">
                  created {dayjs(dayjs(token.timestamp)).fromNow(true)} ago
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HashIcon className="size-[1em] text-xs text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>ID: {token._id}</TooltipContent>
                </Tooltip>
                <div className="text-xs font-medium text-muted-foreground">
                  {token.symbol?.toUpperCase()}
                </div>
              </div>
            </CardHeader>
            {token.author === me?.userId && (
              <CardFooter className="flex justify-between gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/app/issue/${token.symbol}`}>Issue</Link>
                </Button>
              </CardFooter>
            )}
          </Card>
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
    </>
  );
};

export default AppPage;
