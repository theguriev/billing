import { z } from "zod";

export const emission = z.string();
export const wallet = z.string();

export const formSchema = z.object({
  emission,
  wallet,
});

export type FormSchema = z.infer<typeof formSchema>;
