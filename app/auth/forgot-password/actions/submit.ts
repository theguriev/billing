"use server";

import { redirect } from "next/navigation";

import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  const result = await api.authorization("/forgot-password", "post", {
    headers: { "Content-Type": "application/json" },
    body,
  });
  await result.json();
  redirect("/auth/recovery-sent");
};

export default submit;
