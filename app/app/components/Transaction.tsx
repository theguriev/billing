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
  const PrefixIcon = getTransactionDirectionIcon(from!, to!, targetAddress);
  const textColor = getTransactionDirectionColor(from!, to!, targetAddress);
  return (
    <div className="flex items-center justify-between border-x border-b p-4 first:rounded-t-md first:border-t last:rounded-b-md">
      <div className="flex flex-col">
        <span className={cn("mb-2 flex", textColor)}>
          {PrefixIcon && <PrefixIcon />} {transactionDirection} {value}
        </span>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <MessageCircleIcon className="mr-1 size-[1em] text-xs text-muted-foreground" />
            <div className="text-xs font-medium text-muted-foreground">
              <span>{message}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
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
              {dayjs(dayjs(timestamp)).fromNow(true)} ago
            </div>
          </div>
          <div className="flex items-center">
            <WalletIcon className="mr-1 size-[1em] text-xs text-muted-foreground" />
            <div className="flex items-center space-x-1">
              <span className="text-xs font-medium text-muted-foreground">
                {from}
              </span>
              <MoveRightIcon className="mr-1 size-[1em] text-xs text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">
                {to}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
