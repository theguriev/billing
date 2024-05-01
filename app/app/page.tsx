import Link from "next/link";

import { Button } from "@/components/ui/button";

const AppPage = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tokens</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            There is not tokens yet 🙃
          </h3>
          <p className="text-sm text-muted-foreground">
            Your token can be first.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/app/add-token">Create Token</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AppPage;
