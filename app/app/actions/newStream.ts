"use server";

import { redirect } from "next/navigation";

import { api } from "@/lib/openapi/apiClient";

const newStream = async () => {
  const request = await api.streams("/", "post", {
    body: { name: "New stream", sources: [] },
    headers: { "Content-Type": "application/json" },
    authorization: true,
  });
  if (request.status === 200) {
    const response = await request.json();
    return redirect(`/builder/${response._id}`);
  }
  return undefined;
};

export default newStream;
