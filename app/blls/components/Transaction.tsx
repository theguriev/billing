/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  CalendarClockIcon,
  HashIcon,
  WalletIcon,
  MoveRightIcon,
  MessageCircleIcon,
  ArrowUpRightIcon,
  ArrowDownLeftIcon,
} from "lucide-react";

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

const getTransactionDirectionIcon = (
  from: string,
  to: string,
  targetAddress: string
) => {
  if (from === targetAddress) {
    return ArrowUpRightIcon;
  }
  if (to === targetAddress) {
    return ArrowDownLeftIcon;
  }
  return null;
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
  const PrefixIcon = getTransactionDirectionIcon(from!, to!, targetAddress);
  const textColor = getTransactionDirectionColor(from!, to!, targetAddress);
  return (
    <div className="flex items-center justify-between border-x border-b p-4 first:rounded-t-md first:border-t last:rounded-b-md">
      <div className="flex items-center space-x-2">
        <CryptoGradient className="size-10 rounded-full" address={to!} />
        <div>
          <span className="text-xs font-medium text-muted-foreground">
            {message}
          </span>
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
      <div className="flex flex-col">
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
