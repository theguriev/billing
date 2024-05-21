/* eslint-disable tailwindcss/no-arbitrary-value */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Transaction from "@/app/app/components/Transaction";
import { api } from "@/lib/openapi/apiClient";

dayjs.extend(relativeTime);

const TransactionsTable = async ({ address }: { address: string }) => {
  const request = await api.billing("/transaction/address/{address}", "get", {
    path: { address },
    next: { tags: ["transactions"] },
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

export default TransactionsTable;