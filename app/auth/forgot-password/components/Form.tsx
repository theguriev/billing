"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import submitAction from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

const ForgotPasswordForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (body: FormSchema) => {
    submitAction(body);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col gap-y-4"
      >
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
              <FormDescription>
                Don&apos;t fret! Just type in your email and we will send you a
                code to reset your password!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button name="submit" type="submit" disabled={!form.formState.isValid}>
          Remind me
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
