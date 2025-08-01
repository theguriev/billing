/* eslint-disable tailwindcss/no-arbitrary-value */
import { subDays } from "date-fns";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import InfiniteTransactions from "@/app/blls/components/InfiniteTransactions";
import { api } from "@/lib/openapi/apiClient";

dayjs.extend(relativeTime);

const AllAddressTransactions = async ({
  address = "",
  symbol = "",
  fromDate = subDays(new Date(), 365).getTime(),
  toDate = Date.now()
}: {
  address?: string;
  symbol?: string;
  fromDate: number;
  toDate: number;
}) => {
  const request = await api.billing("/transactions", "get", {
    next: { tags: ["transactions"] },
    cache: "no-cache",
    query: { 
      address, 
      symbol,
      limit: 10,
      offset: 0,
      from: fromDate,
      to: toDate,
    },
  });

  const initialTransactions = await request.json();
  
  return (
    <InfiniteTransactions
      address={address}
      symbol={symbol}
      fromDate={fromDate}
      toDate={toDate}
      initialTransactions={initialTransactions}
    />
  );
};

export default AllAddressTransactions;
