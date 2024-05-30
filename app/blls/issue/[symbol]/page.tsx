import type { Metadata } from "next";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Form from "./components/Form";

export const metadata: Metadata = {
  title:
    "Issue Tokens for Your Cryptocurrency | Manage Existing Tokens Efficiently",
  description:
    "Easily issue additional tokens for your existing cryptocurrency or points system. Our platform simplifies token management, allowing you to scale your digital currency seamlessly. Start issuing tokens now to meet your growing needs.",
};

const AddTokenPage = async ({
  params: { symbol },
}: {
  params: { symbol: string };
}) => {
  return (
    <>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blls">Wallet</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{symbol}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Issue</h1>
      </div>
      <Form symbol={symbol} />
    </>
  );
};

export default AddTokenPage;
