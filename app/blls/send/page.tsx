import type { Metadata } from "next";

import getWalletFromCookie from "@/app/utils/getWalletFromCookie";

import getBallance from "../services/getBallance";

import Form from "./components/Form";

export const metadata: Metadata = {
  title:
    "Send Tokens Securely | Efficient Token Transfer for Your Cryptocurrency",
  description:
    "Streamline token transfers with our platform's user-friendly send form. Send tokens securely and effortlessly manage transactions within your cryptocurrency or points system. Simplify token sending processes today!",
};

const SendFoundsPage = async ({
  searchParams: { symbol },
}: {
  searchParams: { symbol: string };
}) => {
  const wallet = getWalletFromCookie();
  const ballance = await getBallance(wallet.address);
  const ballanceEntries = Object.entries(ballance);

  const defaultOne = symbol || ballanceEntries[0][0];
  return (
    <>
      <div className="flex items-center">
        <h1 className="mb-4 text-lg font-semibold md:text-2xl">Send funds</h1>
      </div>
      <Form ballanceEntries={ballanceEntries} symbol={defaultOne} />
    </>
  );
};

export default SendFoundsPage;
