import { cookies } from "next/headers";

const getWalletFromCookie = async () => {
  const cookieStore = await cookies();
  const privateKey = cookieStore.get("privateKey")?.value || "";
  const address = cookieStore.get("address")?.value || "";
  return {
    privateKey,
    address,
  };
};

export default getWalletFromCookie;
