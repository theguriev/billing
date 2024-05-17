import Transaction from "@/app/app/components/Transaction";
import { api } from "@/lib/openapi/apiClient";

const Transactions = async ({ symbol }: { symbol: string }) => {
  const request = await api.billing("/transaction/{symbol}", "get", {
    path: { symbol },
    next: { tags: ["transactions"] },
  });

  const transactions = await request.json();
  return (
    <div className="flex flex-col">
      {transactions.map((transaction) => (
        <Transaction key={transaction._id} {...transaction} />
      ))}
    </div>
  );
};

export default Transactions;
