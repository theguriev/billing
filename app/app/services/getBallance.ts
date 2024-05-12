import { api } from "@/lib/openapi/apiClient";

const getBallance = async (address: string) => {
  const request = await api.billing("/wallet/{key}", "get", {
    next: { tags: ["ballance"] },
    path: { key: address },
  });
  const response = await request.json();
  return response;
};

export default getBallance;
