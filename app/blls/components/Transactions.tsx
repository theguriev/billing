/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import InfiniteTransactions from "@/app/blls/components/InfiniteTransactions";
import { api } from "@/lib/openapi/apiClient";

dayjs.extend(relativeTime);

const AllAddressTransactions = async ({
  address = "",
  symbol = "",
}: {
  address?: string;
  symbol?: string;
}) => {
  const request = await api.billing("/transactions", "get", {
    next: { tags: ["transactions"] },
    cache: "no-cache",
    query: { 
      address, 
      symbol,
      limit: 10,
      offset: 0
    },
  });

  const initialTransactions = await request.json();
  
  return (
    <InfiniteTransactions
      address={address}
      symbol={symbol}
      initialTransactions={initialTransactions}
    />
  );
};

export default AllAddressTransactions;
