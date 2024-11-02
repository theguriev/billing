/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CalendarClockIcon } from "lucide-react";

import CryptoGradient from "@/app/components/CryptoGradient";
import { cn } from "@/app/utils/shadcn";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { components } from "@/lib/openapi/schemas/service-billing";

dayjs.extend(relativeTime);

const getTransactionDirection = (
  from: string,
  to: string,
  targetAddress: string
) => {
  if (from === targetAddress) {
    return "Sent";
  }
  if (to === targetAddress) {
    return "Received";
  }
  return "";
};

const getTransactionDirectionSymbol = (
  from: string,
  to: string,
  targetAddress: string
) => {
  if (from === targetAddress) {
    return "-";
  }
  if (to === targetAddress) {
    return "+";
  }
  return "";
};

const getTransactionDirectionColor = (
  from: string,
  to: string,
  targetAddress: string
) => {
  if (from === targetAddress) {
    return "text-red-500";
  }
  if (to === targetAddress) {
    return "text-green-500";
  }
  return "";
};

const Transaction = ({
  _id,
  from,
  message,
  symbol,
  targetAddress = "0x",
  timestamp,
  to,
  value,
}: components["schemas"]["Transaction"] & { targetAddress?: string }) => {
  const colorAddress = targetAddress === to ? from : to;
  const transactionDirection = getTransactionDirection(
    from!,
    to!,
    targetAddress
  );
  const transactionDirectionSymbol = getTransactionDirectionSymbol(
    from!,
    to!,
    targetAddress
  );
  const textColor = getTransactionDirectionColor(from!, to!, targetAddress);
  return (
    <div className="flex flex-col justify-between border-x border-b p-4 first:rounded-t-md first:border-t last:rounded-b-md sm:flex-row sm:items-center">
      <div className="flex items-center space-x-2">
        <CryptoGradient
          className="min-h-10 min-w-10 rounded-full"
          address={colorAddress!}
        />
        <div className="truncate">
          <span className="truncate text-xs font-medium text-muted-foreground">
            {message}
          </span>
          <div className="flex space-x-1">
            <div className="flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <CalendarClockIcon className="mr-1 size-[1em] text-xs text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>Timestamp: {timestamp}</TooltipContent>
              </Tooltip>
              <div className="text-xs font-medium text-muted-foreground">
                {dayjs(dayjs(timestamp)).fromNow(true)} ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-12 mt-2 flex flex-col sm:ml-0 sm:mt-0 sm:items-end">
        <span className={cn("flex text-sm", textColor)}>
          {transactionDirectionSymbol}
          {value} {symbol?.toUpperCase()}
        </span>
        <span className={cn("flex text-sm", textColor)}>
          {transactionDirection}
        </span>
      </div>
    </div>
  );
};
export default Transaction;
