"use server";

import { api } from "@/lib/openapi/apiClient";

const getTokens = async () => {
  const request = await api.billing("/token", "get");
  const response = await request.json();
  return response;
};

export default getTokens;
