/* eslint-disable tailwindcss/no-arbitrary-value */
import { PropsWithChildren } from "react";

import DocsSidebarNav from "@/app/components/DocsSidebarNav";
import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({ children }: PropsWithChildren) {
  const wallet = getWalletFromCookie();
  const isLoggedIn = Boolean(wallet.address) && Boolean(wallet.privateKey);

  return (
    <div className="border-b">
      <div className="container max-w-screen-2xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
