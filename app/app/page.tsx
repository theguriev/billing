import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import getTokens from "./actions/getTokens";

dayjs.extend(relativeTime);

const AppPage = async () => {
  const tokens = await getTokens();
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tokens</h1>
      </div>
      {tokens.length > 0 ? (
        tokens.map((token) => (
          <Card key={token.id} className="flex justify-between">
            <CardHeader>
              <CardTitle>{token.name}</CardTitle>
              <div className="text-xs font-medium text-muted-foreground">
                #{token.id} created{" "}
                {dayjs(dayjs(token.timestamp)).fromNow(true)} ago
              </div>
            </CardHeader>
            <CardFooter className="flex justify-between gap-2">
              <Button variant="outline" asChild>
                <Link href={`/builder/${token.id}`}>Edit</Link>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Are you sure?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        This will permanently delete the stream and all
                        associated data.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardFooter>
          </Card>
        ))
      ) : (
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
              <Link href="/app/create-token">Create Token</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppPage;
