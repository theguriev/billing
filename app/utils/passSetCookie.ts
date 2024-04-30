import { cookies } from "next/headers";
import { parse } from "set-cookie-parser";

const passSetCookie = (setCookies: Array<string>) => {
  const cookieStore = cookies();
  setCookies.forEach((cookie) => {
    const parsedCookie = parse(cookie)[0];
    cookieStore.set({
      name: parsedCookie.name,
      value: parsedCookie.value,
      expires: parsedCookie.expires,
      path: parsedCookie.path,
      httpOnly: parsedCookie.httpOnly,
    });
  });
};

export default passSetCookie;
