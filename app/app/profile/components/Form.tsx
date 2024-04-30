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
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import submitAction from "../actions/submit";
import { formSchema } from "../zod";
import type { FormSchema } from "../zod";

const ProfileForm = ({ name, email }: { name: string; email: string }) => {
  const { toast } = useToast();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name,
    },
  });

  const handleSubmit = async (body: FormSchema) => {
    const result = await submitAction(body);
    if ("_id" in result) {
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    }
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
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input placeholder="Type something..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Type something..."
            name="email"
            id="email"
            value={email}
            disabled
          />
          <p id="email" className="text-xs text-muted-foreground">
            It&apos;s your email and it can&apos;t be changed.
          </p>
        </div>

        <div>
          <Button
            name="submit"
            type="submit"
            disabled={!form.formState.isValid}
          >
            Update profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
