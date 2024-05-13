import { cookies } from "next/headers";

const getWalletFromCookie = () => {
  const privateKey = cookies().get("privateKey")?.value || "";
  const address = cookies().get("address")?.value || "";
  return {
    privateKey,
    address,
  };
};

export default getWalletFromCookie;
