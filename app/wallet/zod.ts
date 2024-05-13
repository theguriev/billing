import { z } from "zod";

export const mnemonic = z.string();

export const formSchema = z.object({
  mnemonic,
});

export type FormSchema = z.infer<typeof formSchema>;
