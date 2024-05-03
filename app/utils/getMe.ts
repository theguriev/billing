import { jwtVerify } from "jose";
import { cookies } from "next/headers";

type Me = {
  userId: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
};

const getMe = async () => {
  try {
    const accessToken = cookies().get("accessToken")?.value || "";
    const { payload: me } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.SECRET || "")
    );
    return me as Me;
  } catch (_error) {
    return null;
  }
};

export default getMe;
