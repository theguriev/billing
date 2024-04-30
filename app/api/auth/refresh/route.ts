import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import passSetCookie from "@/app/utils/passSetCookie";
import { api } from "@/lib/openapi/apiClient";

export async function GET() {
  const cookieStore = cookies();
  const refreshToken = String(cookieStore.get("refreshToken")?.value || "");
  const refreshResponse = await api.authorization("/refresh", "get", {
    cookie: { refreshToken },
    cache: "no-cache",
  });
  if (refreshResponse.status === 200) {
    passSetCookie(refreshResponse.headers.getSetCookie());
    return redirect("/");
  }
  return redirect("/auth");
}
