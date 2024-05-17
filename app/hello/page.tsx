import Link from "next/link";

import { Button } from "@/components/ui/button";

const HelloPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-xl text-neutral-700 md:text-5xl lg:text-5xl">
        Hello, let&apos;s create some crypto! 🚀
      </h1>
      <Button className="mt-4 lg:mt-8" asChild>
        <Link href="/blls/create-token">Create Token</Link>
      </Button>
    </div>
  );
};

export default HelloPage;
