import { z } from "zod";

export const amount = z.string();
export const address = z.string();
export const message = z.string().max(100).optional();

export const formSchema = z.object({
  amount,
  address,
  message,
});

export type FormSchema = z.infer<typeof formSchema>;
