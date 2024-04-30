import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

import twitterOAuth2Token from "@/app/actions/twitterOAuth2Token";
import twitterUsersMe from "@/app/actions/twitterUsersMe";
import base64ToBytes from "@/app/utils/base64ToBytes";
import parseJSON from "@/app/utils/parseJSON";
import { api } from "@/lib/openapi/apiClient";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const encodedState = searchParams.get("state");
  if (typeof encodedState !== "string") {
    return new Response(JSON.stringify({ error: "No state provided" }), {
      status: 400,
      headers: { "Content-type": "application/json" },
    });
  }
  const state = new TextDecoder().decode(
    base64ToBytes(String(searchParams.get("state")))
  );
  const code = searchParams.get("code");
  const parsedState = parseJSON<{ streamId: string; sourceId?: string }>(state);
  if (typeof parsedState === "boolean" || !code) {
    return new Response(JSON.stringify({ error: "Invalid state provided" }), {
      status: 400,
      headers: { "Content-type": "application/json" },
    });
  }

  const access = await twitterOAuth2Token({ code });
  const me = await twitterUsersMe({ token: access.access_token });
  const streamResponse = await api.streams("/{id}", "get", {
    path: { id: parsedState.streamId },
    authorization: true,
  });
  const stream = await streamResponse.json();
  if (!parsedState.sourceId) {
    await api.streams("/{id}", "put", {
      path: { id: parsedState.streamId },
      headers: { "Content-Type": "application/json" },
      authorization: true,
      body: {
        name: stream.name,
        sources: [
          ...(stream.sources || []),
          {
            _id: uuid(),
            type: "x",
            meta: {
              access,
              me,
              createdAt: Date.now(),
            } as unknown as Record<string, never>,
          },
        ],
      },
    });
  }
  return NextResponse.redirect(
    new URL(`/builder/${parsedState.streamId}`, request.url)
  );
};
