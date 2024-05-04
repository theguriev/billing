import { z } from "zod";

export const name = z.string().min(3).max(20);
export const symbol = z.string().min(1).max(3);
export const emission = z.string();

export const formSchema = z.object({
  name,
  symbol,
  emission,
});

export type FormSchema = z.infer<typeof formSchema>;
