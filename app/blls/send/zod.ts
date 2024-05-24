import { z } from "zod";

export const amount = z.string();
export const address = z.string();
export const message = z.string().max(100).optional();
export const symbol = z.string().min(1).max(3);

export const formSchema = z.object({
  symbol,
  amount,
  address,
  message,
});

export type FormSchema = z.infer<typeof formSchema>;
