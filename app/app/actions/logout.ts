"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const logout = async () => {
  const cookieStore = cookies();
  cookieStore.delete("privateKey");
  cookieStore.delete("address");
  redirect("/wallet");
};

export default logout;
