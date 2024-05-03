/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import submitAction from "../actions/submit";
import type { SubmitAction } from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

import ServerErrorMessage from "./ServerErrorMessage";

const CreateTokenForm = () => {
  const [submitState, setSubmitState] = useState<SubmitAction>();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      wallet: "",
      emission: "0",
    },
  });

  const handleSubmit = async (body: FormSchema) => {
    setSubmitState(await submitAction(body));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full max-w-[600px] flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="emission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emission</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Please enter the emission of the token"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                The token initial emisson amount. It should be a number and
                could be changed later.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wallet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wallet address</FormLabel>
              <FormControl>
                <Input
                  type="string"
                  placeholder="Please enter the wallet address"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                The wallet address where the initial emission will be stored.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ServerErrorMessage response={submitState} />
        <div>
          <Button name="submit" type="submit">
            Issue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTokenForm;
