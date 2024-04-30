"use server";

import { api } from "@/lib/openapi/apiClient";

const getStreams = async () => {
  const request = await api.streams("/", "get", {
    authorization: true,
    next: { tags: ["stream"] },
  });
  if (request.status === 200) {
    const response = await request.json();
    return response;
  }
  return [];
};

export default getStreams;
