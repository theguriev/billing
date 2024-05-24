"use client";
import { useEffect } from "react";

import Cookie from "js-cookie";
import { useSearchParams } from "next/navigation";

const LogoutHandler = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (Boolean(searchParams.get("logout"))) {
      Cookie.remove("privateKey");
      Cookie.remove("address");
    }
  }, [searchParams]);
  return null;
};

export default LogoutHandler;
