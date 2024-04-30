"use server";

import { revalidateTag } from "next/cache";

import { api } from "@/lib/openapi/apiClient";

const deleteStream = async (id: string) => {
  const request = await api.streams("/{id}", "delete", {
    path: { id },
    headers: { "Content-Type": "application/json" },
    authorization: true,
  });
  if (request.status === 200) {
    revalidateTag("stream");
    return true;
  }
  return undefined;
};

export default deleteStream;
