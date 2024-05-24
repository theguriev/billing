import { z } from "zod";

export const emission = z.string();

export const formSchema = z.object({
  emission,
});

export type FormSchema = z.infer<typeof formSchema>;
