"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import passSetCookie from "@/app/utils/passSetCookie";
import { api } from "@/lib/openapi/apiClient";

const logout = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";
  const request = await api.authorization("/logout", "get", {
    cookie: { accessToken },
    headers: { "Content-Type": "application/json" },
  });

  passSetCookie(request.headers.getSetCookie());
  redirect("/auth");
};

export default logout;
