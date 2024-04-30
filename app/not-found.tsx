/* eslint-disable tailwindcss/no-arbitrary-value */
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex animate-notFound items-center justify-center bg-neutral-50 bg-gradient-to-br from-fuchsia-500 via-green-600 to-orange-400 bg-[length:300%_300%] text-white">
      <main className="max-w-[500px] text-center">
        <h1 className="mb-10 text-9xl font-bold">404</h1>
        <h2 className="mb-4">
          The link you clicked may be broken or the page may have been removed.
        </h2>
        <h3>
          Visit the <Link href="/">home page</Link> or{" "}
          <Button variant="link" asChild className="p-0">
            <Link href="mailto:gurievcreative@gmail.com">contact me</Link>
          </Button>
        </h3>
      </main>
    </div>
  );
};

export default NotFound;
