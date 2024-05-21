import Link from "next/link";

const BallanceRow = ({
  symbol,
  value,
  address,
}: {
  symbol: string;
  value: number;
  address: string;
}) => {
  return (
    <Link
      href={`/blls/symbol/${symbol}`}
      className="flex items-center justify-between border-x border-b p-4 first:rounded-t-md first:border-t last:rounded-b-md"
    >
      <div>
        <span>{symbol}</span>
      </div>
      <div>
        <span className="font-bold">{value.toLocaleString()}</span>
      </div>
    </Link>
  );
};
export default BallanceRow;
