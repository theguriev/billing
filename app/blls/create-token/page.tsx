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
  title: "Create Tokens Easily | Customized Cryptocurrency & Points System",
  description:
    "Design and issue custom tokens effortlessly with our platform. Whether it's for a cryptocurrency, loyalty points, or credits system, streamline your token creation process and manage them securely. Get started now!",
};

const AddTokenPage = () => {
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
            <BreadcrumbPage>Create token</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Add token</h1>
      </div>
      <Form />
    </>
  );
};

export default AddTokenPage;
