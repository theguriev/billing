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
import { Textarea } from "@/components/ui/textarea";

import submitAction from "../actions/submit";
import type { SubmitAction } from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

import ServerErrorMessage from "./ServerErrorMessage";

const CreateTokenForm = ({ symbol }: { symbol: string }) => {
  const [submitState, setSubmitState] = useState<SubmitAction>();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      amount: "1",
      address: "",
    },
  });

  const handleSubmit = async (body: FormSchema) => {
    setSubmitState(await submitAction({ ...body, symbol }));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full max-w-[600px] flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Please enter the amount"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                Please enter the amount of tokens you want to send.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Please enter the address"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                Please enter the address of the recipient. Keep in mind that if
                you enter the wrong address here, we will not be able to further
                refund your tokens. All responsibility for the address is yours.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please enter the message"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                Please enter the message you want to send with the tokens.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ServerErrorMessage response={submitState} />
        <div>
          <Button name="submit" type="submit">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateTokenForm;
