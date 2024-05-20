import getWalletFromCookie from "@/app/utils/getWalletFromCookie";

import getBallance from "../services/getBallance";

import Form from "./components/Form";

const SendFoundsPage = async () => {
  const wallet = getWalletFromCookie();
  const ballance = await getBallance(wallet.address);
  const ballanceEntries = Object.entries(ballance);
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Send funds</h1>
      </div>
      <Form ballanceEntries={ballanceEntries} />
    </>
  );
};

export default SendFoundsPage;
