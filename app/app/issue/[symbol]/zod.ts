import { z } from "zod";

export const emission = z.string();
export const symbol = z.string().min(1).max(3);

export const formSchema = z.object({
  emission,
  symbol,
});

export type FormSchema = z.infer<typeof formSchema>;
