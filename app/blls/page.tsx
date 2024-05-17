import getWalletFromCookie from "@/app/utils/getWalletFromCookie";

import BallanceRow from "../components/BallanceRow";
import CryptoGradient from "../components/CryptoGradient";

import getBallance from "./services/getBallance";

const WalletPage = async () => {
  const wallet = getWalletFromCookie();
  const ballance = await getBallance(wallet.address);
  const ballanceEntries = Object.entries(ballance);
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-4 flex space-x-2">
          <CryptoGradient
            address={wallet.address}
            className="size-12 rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold md:text-2xl">Wallet</h1>
            <h6 className="text-sm text-muted-foreground">
              Address: {wallet.address}
            </h6>
          </div>
        </div>
        <div className="flex flex-col">
          {ballanceEntries.map(([key, value]) => (
            <BallanceRow
              key={key}
              symbol={key}
              value={value}
              address={wallet.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WalletPage;
