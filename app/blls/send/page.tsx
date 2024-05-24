import getWalletFromCookie from "@/app/utils/getWalletFromCookie";

import getBallance from "../services/getBallance";

import Form from "./components/Form";

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
        <h1 className="text-lg font-semibold md:text-2xl">Send funds</h1>
      </div>
      <Form ballanceEntries={ballanceEntries} symbol={defaultOne} />
    </>
  );
};

export default SendFoundsPage;
