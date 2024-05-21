import { api } from "@/lib/openapi/apiClient";

const getBallance = async (address: string) => {
  const request = await api.billing("/ballance/{address}", "get", {
    next: { tags: ["ballance"] },
    path: { address },
  });
  const response = await request.json();
  return response;
};

export default getBallance;
