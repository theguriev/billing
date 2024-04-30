"use server";

import { revalidateTag } from "next/cache";

import type { Stream } from "@/app/types";
import { api } from "@/lib/openapi/apiClient";

const saveStream = async (stream: Stream) => {
  const request = await api.streams("/{id}", "put", {
    path: { id: String(stream._id) },
    headers: { "Content-Type": "application/json" },
    authorization: true,
    body: stream,
  });

  if (request.status === 200) {
    const response = await request.json();
    revalidateTag("stream");
    return response;
  }
  return false;
};

export default saveStream;
