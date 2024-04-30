import { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

const Layout = ({ children }: { children: ReactNode }) => {
  return <TooltipProvider delayDuration={0}>{children}</TooltipProvider>;
};

export default Layout;
