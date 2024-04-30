"use server";

import { cookies } from "next/headers";

import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const request = await api.authorization("/change-name", "put", {
    headers: {
      "Content-Type": "application/json",
      cookie: `accessToken=${accessToken}`,
    },
    body,
  });
  return await request.json();
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
