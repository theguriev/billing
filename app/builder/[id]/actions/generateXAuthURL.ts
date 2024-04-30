"use server";

import { defu } from "defu";
import { redirect } from "next/navigation";

const defaults = {
  response_type: "code",
  client_id: process.env.X_CLIENT_ID,
  redirect_uri: process.env.X_REDIRECT_URL,
  state: "state" as string,
  scope: "tweet.read users.read follows.read offline.access",
  code_challenge: "challenge",
  code_challenge_method: "plain",
} as const;

const authUrl = process.env.X_AUTH_URL;

const generateXAuthURL = async (props: Partial<typeof defaults>) => {
  const queryProps = defu(props, defaults);
  const query = new URLSearchParams(queryProps as Record<string, string>);
  redirect(`${authUrl}?${query}`);
};

export default generateXAuthURL;
