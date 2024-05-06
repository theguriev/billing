import { api } from "@/lib/openapi/apiClient";

const getTokens = async () => {
  const request = await api.billing("/token", "get", {
    next: { tags: ["tokens"] },
  });
  const response = await request.json();
  return response;
};

export default getTokens;
