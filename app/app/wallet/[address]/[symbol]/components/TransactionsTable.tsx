import dayjs from "dayjs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/openapi/apiClient";

const TransactionsTable = async ({ address }: { address: string }) => {
  const request = await api.billing("/transaction/address/{address}", "get", {
    path: { address },
  });

  const response = await request.json();
  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Date time</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {response.map((transaction) => (
          <TableRow key={transaction._id}>
            <TableCell>{transaction.from}</TableCell>
            <TableCell>{transaction.to}</TableCell>
            <TableCell>{transaction.symbol}</TableCell>
            <TableCell>
              {dayjs(transaction.timestamp).format("MMMM D, YYYY h:mm A")}
            </TableCell>
            <TableCell>{transaction.message}</TableCell>
            <TableCell className="text-right font-bold">
              {transaction.value} {transaction.symbol}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
