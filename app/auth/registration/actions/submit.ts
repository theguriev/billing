"use server";

import { redirect } from "next/navigation";

import passSetCookie from "@/app/utils/passSetCookie";
import { api } from "@/lib/openapi/apiClient";

import type { FormSchema } from "../zod";

const submit = async (body: FormSchema) => {
  const request = await api.authorization("/registration", "post", {
    headers: { "Content-Type": "application/json" },
    body,
  });
  passSetCookie(request.headers.getSetCookie());
  if (request.status === 200) {
    redirect("/app");
  }
  if (request.status === 400) {
    const response = await request.json();
    return {
      ...response,
      dataMap: response.data?.reduce(
        (acc, item) => ({
          ...acc,
          [item.path.join(".")]: item,
        }),
        {}
      ),
    };
  }
  return await request.json();
};

export type SubmitAction = Awaited<ReturnType<typeof submit>>;

export default submit;
