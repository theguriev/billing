"use client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import type { Stream } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

dayjs.extend(relativeTime);

const Stream = ({ _id, name, timestamp, sources }: Stream) => {
  const handleDoItClick = () => {
    console.log("Do it!");
  };
  return (
    <Card className="flex justify-between">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="text-xs font-medium text-muted-foreground">
          #{_id} created {dayjs(dayjs(timestamp)).fromNow(true)} ago
        </div>
        <div className="flex items-end gap-2  text-muted-foreground">
          NOthing
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" asChild>
          <Link href={`/builder/${_id}`}>Edit</Link>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Are you sure?</h4>
                <p className="text-sm text-muted-foreground">
                  This will permanently delete the stream and all associated
                  data.
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="destructive" onClick={handleDoItClick}>
                  Do it!
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default Stream;
