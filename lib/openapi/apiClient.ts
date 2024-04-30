import { defu } from "defu";
import { cookies } from "next/headers";

import omit from "@/app/utils/omit";

import replacePathParameters from "./replacePathParameters";
import { authorization, billing } from "./schemas/";
import type {
  Parameters as EndpointParameters,
  ExtractContentJson,
  ExtractResponses,
} from "./types";

const stringifyOrUndefinedBody = (
  body: BodyInit | undefined
): undefined | string => {
  if (!body) {
    return;
  }
  return JSON.stringify(body);
};

const objectifyOrUndefinedCookie = (cookie: Record<string, string>) => {
  if (!cookie) {
    return;
  }
  return {
    Cookie: Object.entries(cookie)
      .map(([key, value]) => `${key}=${value}`)
      .join("; "),
  };
};

const getAccessToken = () => {
  const cookieStore = cookies();
  return cookieStore.get("accessToken")?.value;
};

const createRequest = <Paths>({ getBaseUrl }: { getBaseUrl: () => string }) => {
  return async <
    Path extends keyof Paths,
    Method extends keyof Paths[Path],
    Responses extends ExtractResponses<Paths[Path][Method]>,
    FancyResponse = Omit<Response, "json" | "status"> &
      {
        [K in keyof Responses]: {
          status: K;
          json: () => Promise<ExtractContentJson<Responses[K]>>;
        };
      }[keyof Responses]
  >(
    path: Path,
    method: Method = "get" as Method,
    parameters: EndpointParameters<Paths[Path][Method]> &
      Omit<RequestInit, "body"> & {
        authorization?: boolean;
      } = {} as EndpointParameters<Paths[Path][Method]> &
      Omit<RequestInit, "body"> & {
        authorization?: boolean;
      }
  ): Promise<FancyResponse> => {
    const body = "body" in parameters ? parameters.body : undefined;
    const cookie = "cookie" in parameters ? parameters.cookie : undefined;
    const cookieWithAuthorization = parameters.authorization
      ? { accessToken: getAccessToken(), ...(cookie as Record<string, string>) }
      : cookie;
    const pathParams =
      "path" in parameters ? (parameters.path as Record<string, string>) : {};

    const fetchParameters = defu(
      {
        method,
        body: stringifyOrUndefinedBody(body as BodyInit),
        headers: {
          ...objectifyOrUndefinedCookie(
            cookieWithAuthorization as Record<string, string>
          ),
        },
      },
      omit(parameters as Record<string, string>, [
        "body",
        "cookie",
        "authorization",
        "path",
      ])
    ) as unknown as RequestInit;

    return (await fetch(
      `${getBaseUrl()}${replacePathParameters(path.toString(), pathParams)}`,
      fetchParameters
    )) as unknown as Promise<FancyResponse>;
  };
};

export const api = {
  authorization: createRequest<authorization.paths>({
    getBaseUrl: () => `${process.env.API_URL}/authorization`,
  }),
  billing: createRequest<billing.paths>({
    getBaseUrl: () => `${process.env.API_URL}/billing`,
  }),
};
