"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import submitAction from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

const WalletForm = ({ initialMnemonic }: { initialMnemonic: string }) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      mnemonic: initialMnemonic,
    },
  });

  const handleSubmit = async (body: FormSchema) => {
    await submitAction(body);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 flex w-full flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="mnemonic"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Mnemonic"
                  {...field}
                  autoFocus
                  rows={3}
                />
              </FormControl>
              <FormDescription>
                Please insert your mnemonic phrase that you saved earlier or
                just leave the default one and store it somewhere!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button name="submit" type="submit" disabled={!form.formState.isValid}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default WalletForm;
