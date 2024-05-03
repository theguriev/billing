"use server";

import { revalidateTag } from "next/cache";
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
  if (request.status === 200) {
    revalidateTag("tokens");
    redirect("/app");
  }
  return response;
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
