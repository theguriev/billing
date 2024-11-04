/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Transaction from "@/app/blls/components/Transaction";
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
    query: { address, symbol },
  });

  const transactions = await request.json();
  return (
    <div className="flex flex-col">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction._id}
          {...transaction}
          targetAddress={address}
        />
      ))}
    </div>
  );
};

export default AllAddressTransactions;
