import { z } from "zod";

import {
  name,
  email,
  lowerCaseAndUpperCase,
  atLeastOneNumber,
  atLeastOneSpecialSymbol,
  moreThan8ButLessThan20Characters,
} from "@/app/auth/zod";

const passwordZod = moreThan8ButLessThan20Characters
  .and(lowerCaseAndUpperCase)
  .and(atLeastOneNumber)
  .and(atLeastOneSpecialSymbol);

const confirmationZod = z.string().min(8).max(20);

export const formSchema = z
  .object({
    name,
    email,
    password: passwordZod,
    confirmation: confirmationZod,
  })
  .refine((data) => data.password === data.confirmation, {
    message: "Passwords do not match!",
    path: ["confirmation"],
  });

export type FormSchema = z.infer<typeof formSchema>;
