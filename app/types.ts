import { paths } from "@/lib/openapi/schemas/service-walls";

export type Stream =
  paths["/{id}"]["get"]["responses"]["200"]["content"]["application/json"];
