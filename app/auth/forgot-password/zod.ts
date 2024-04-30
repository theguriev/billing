import { z } from "zod";

import { email } from "@/app/auth/zod";

export const formSchema = z.object({
  email,
});

export type FormSchema = z.infer<typeof formSchema>;
