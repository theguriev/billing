/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

import { cn } from "@/app/utils/shadcn";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

import submitAction from "../actions/submit";
import type { SubmitAction } from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

import ServerErrorMessage from "./ServerErrorMessage";

const SendFundsForm = ({
  ballanceEntries,
  symbol,
}: {
  ballanceEntries: [string, number][];
  symbol: string;
}) => {
  const [submitState, setSubmitState] = useState<SubmitAction>();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      amount: "1",
      address: "",
      symbol,
    },
  });

  const handleSubmit = async (body: FormSchema) => {
    setSubmitState(await submitAction(body));
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full max-w-[600px] flex-col gap-y-4"
        >
          <FormField
            control={form.control}
            name="symbol"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Symbol</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "sm:w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? ballanceEntries.find(
                              ([symbol]) => symbol === field.value
                            )?.[0]
                          : ballanceEntries[0][0]}
                        <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[366px] p-0 sm:w-[600px]">
                    <Command>
                      <CommandInput
                        placeholder="Search symbol..."
                        className="h-9"
                      />
                      <CommandEmpty>No symbol found.</CommandEmpty>
                      <CommandGroup>
                        <CommandList>
                          {ballanceEntries.map(([symbol, value]) => (
                            <CommandItem
                              value={symbol}
                              key={symbol}
                              onSelect={() => {
                                form.setValue("symbol", symbol);
                              }}
                            >
                              {symbol} {value}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  symbol === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandList>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This is the language that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  Please enter the address of the recipient. Keep in mind that
                  if you enter the wrong address here, we will not be able to
                  further refund your tokens. All responsibility for the address
                  is yours.
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
            <Button name="submit" type="submit" className="w-full md:w-auto">
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SendFundsForm;
