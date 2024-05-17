/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  ArrowUpRightIcon,
  ArrowDownLeftIcon,
  HashIcon,
  CalendarIcon,
  ClockIcon,
  MessageCircleIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { components } from "@/lib/openapi/schemas/service-billing";

dayjs.extend(relativeTime);

const Transaction = ({
  _id,
  from,
  to,
  message,
  symbol,
  timestamp,
  value,
}: components["schemas"]["Transaction"]) => {
  return (
    <Card className="rounded-md">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <ArrowUpRightIcon className="size-4" />
            <span>Sent</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span>{value}</span>
            <span className="text-gray-500 dark:text-gray-400">
              {symbol?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Tooltip>
              <TooltipTrigger asChild>
                <CalendarIcon className="size-4" />
              </TooltipTrigger>
              <TooltipContent>Timestamp: {timestamp}</TooltipContent>
            </Tooltip>
            <span>{dayjs(timestamp).format("MMM D, YYYY")}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <ClockIcon className="size-4" />
            <span>{dayjs(timestamp).format("HH:mm:ss")}</span>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-2">
            <ArrowUpRightIcon className="size-4 text-gray-500 dark:text-gray-400" />
            <span className="truncate">{from}</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowDownLeftIcon className="size-4 text-gray-500 dark:text-gray-400" />
            <span className="truncate">{to}</span>
          </div>
          <div className="flex items-center gap-2">
            <HashIcon className="size-4 text-gray-500 dark:text-gray-400" />
            <span className="truncate">{_id}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MessageCircleIcon className="size-4 text-gray-500 dark:text-gray-400" />
          {message}
        </div>
      </CardContent>
    </Card>
  );
};

export default Transaction;
