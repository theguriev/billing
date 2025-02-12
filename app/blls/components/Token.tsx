/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CalendarClockIcon, HashIcon, WalletIcon } from "lucide-react";
import Link from "next/link";

import CryptoGradient from "@/app/components/CryptoGradient";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { components } from "@/lib/openapi/schemas/service-billing";

dayjs.extend(relativeTime);

const Token = ({
  _id,
  address,
  name,
  symbol,
  timestamp,
  canIssue,
}: components["schemas"]["TokenResponse"] & { canIssue?: boolean }) => {
  return (
    <div className="flex flex-col justify-between space-y-2 border-x border-b p-4 first:rounded-t-md first:border-t last:rounded-b-md md:flex-row md:items-center md:space-y-0">
      <div className="flex items-center space-x-2">
        <CryptoGradient className="size-10 rounded-full" address={address! || ''} />

        <div>
          <div>
            <Button variant="link" asChild className="h-auto p-0">
              <Link href={`/blls/symbol/${symbol}`}>{name}</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center space-x-2">
            <div className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <HashIcon className="size-[1em] text-xs text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>ID: {_id}</TooltipContent>
              </Tooltip>
              <div className="text-xs font-medium text-muted-foreground">
                {symbol?.toUpperCase()}
              </div>
            </div>
            <div className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <CalendarClockIcon className="mr-1 size-[1em] text-xs text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>Timestamp: {timestamp}</TooltipContent>
              </Tooltip>
              <div className="text-xs font-medium text-muted-foreground">
                created {dayjs(dayjs(timestamp)).fromNow(true)} ago
              </div>
            </div>
          </div>
        </div>
      </div>
      {canIssue && (
        <Button variant="outline" asChild>
          <Link prefetch={true} href={`/blls/issue/${symbol}`}>
            Issue
          </Link>
        </Button>
      )}
    </div>
  );
};
export default Token;
