"use client";

import { useMemo, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  lowerCaseAndUpperCase,
  atLeastOneNumber,
  atLeastOneSpecialSymbol,
  moreThan8ButLessThan20Characters,
} from "@/app/auth/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import ServerErrorMessage from "../../components/ServerErrorMessage";
import submitAction from "../actions/submit";
import type { SubmitAction } from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

import PasswordProgress from "./PasswordProgress";

const RegistrationForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmation: "",
      name: "",
    },
  });

  const [state, setState] = useState<SubmitAction>();

  const password = form.watch("password");

  const caseValid = useMemo(
    () => lowerCaseAndUpperCase.safeParse(password).success,
    [password]
  );
  const digitValid = useMemo(
    () => atLeastOneNumber.safeParse(password).success,
    [password]
  );
  const lengthValid = useMemo(
    () => moreThan8ButLessThan20Characters.safeParse(password).success,
    [password]
  );
  const symbolValid = useMemo(
    () => atLeastOneSpecialSymbol.safeParse(password).success,
    [password]
  );

  const validConditions = useMemo(
    () =>
      Number(caseValid) +
      Number(digitValid) +
      Number(lengthValid) +
      Number(symbolValid),
    [caseValid, digitValid, lengthValid, symbolValid]
  );

  const handleSubmit = async (body: FormSchema) => {
    setState(await submitAction(body));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Login"
                  autoFocus
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  autoFocus
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <PasswordProgress
          validConditions={validConditions}
          caseValid={caseValid}
          digitValid={digitValid}
          lengthValid={lengthValid}
          symbolValid={symbolValid}
        />
        <FormField
          control={form.control}
          name="confirmation"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Confirmation"
                  type="password"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ServerErrorMessage response={state} />
        <Button name="submit" type="submit" disabled={!form.formState.isValid}>
          Create new account
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
