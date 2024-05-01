"use server";

import { redirect } from "next/navigation";

import passSetCookie from "@/app/utils/passSetCookie";
import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  const request = await api.billing("/token", "post", {
    headers: { "Content-Type": "application/json" },
    authorization: true,
    body: {
      ...body,
      emission: Number(body.emission),
    },
  });

  const response = await request.json();
  passSetCookie(request.headers.getSetCookie());
  console.log(response);
  if (request.status === 200) {
    redirect("/app");
  }
  return response;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
