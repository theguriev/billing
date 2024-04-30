import { z } from "zod";

import { name } from "@/app/auth/zod";

export const formSchema = z.object({
  name,
});

export type FormSchema = z.infer<typeof formSchema>;
