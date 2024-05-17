/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CalendarClockIcon, HashIcon, MoveRightIcon } from "lucide-react";

import Transaction from "@/app/app/components/Transaction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { api } from "@/lib/openapi/apiClient";

dayjs.extend(relativeTime);

const TransactionsTable = async ({ address }: { address: string }) => {
  const request = await api.billing("/transaction/address/{address}", "get", {
    path: { address },
  });

  const response = await request.json();
  return response.map((transaction) => (
    <Transaction key={transaction._id} {...transaction} />
  ));
};

export default TransactionsTable;
