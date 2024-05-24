/* eslint-disable tailwindcss/no-arbitrary-value */
import { ReactNode } from "react";

import { Menu, Package2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";

import Logo from "../components/Logo";

import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigation from "./components/MobileNavigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen flex-col justify-between">
        <div className="relative grid w-full flex-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex-1 pt-4">
                <DesktopNavigation />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-4">
          <Link href="/" className="flex">
            <Logo className="w-16" />
          </Link>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AppLayout;
