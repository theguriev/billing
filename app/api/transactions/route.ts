import { NextRequest } from "next/server";

import { api } from "@/lib/openapi/apiClient";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  const address = searchParams.get("address") || "";
  const symbol = searchParams.get("symbol") || "";

  try {
    const query: Record<string, string> = {
      limit,
      offset,
    };

    if (address) {
      query.address = address;
    }
    if (symbol) {
      query.symbol = symbol;
    }

    const response = await api.billing("/transactions", "get", {
      cache: "no-cache",
      query,
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch transactions" },
        { status: response.status }
      );
    }

    const transactions = await response.json();
    return Response.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
