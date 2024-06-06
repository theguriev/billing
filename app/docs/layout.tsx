import getWalletFromCookie from "@/app/utils/getWalletFromCookie";
import getDocsConfig from "@/config/docs";

import SidebarNav from "./components/SidebarNav";
// import { ScrollArea } from "@/registry/new-york/ui/scroll-area";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const wallet = getWalletFromCookie();
  const isLoggedIn = Boolean(wallet.address) && Boolean(wallet.privateKey);
  const docsConfig = getDocsConfig({ pathname: "", isLoggedIn });
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <SidebarNav items={docsConfig.sidebarNav} />
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
}
