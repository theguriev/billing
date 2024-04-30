"use server";

import { redirect } from "next/navigation";

import { api } from "@/lib/openapi/apiClient";

const getStream = async (id: string) => {
  const request = await api.streams("/{id}", "get", {
    path: { id },
    authorization: true,
  });
  if (request.status === 200) {
    const response = await request.json();
    return response;
  }
  return redirect("/app");
};

export default getStream;
