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

const AppLayout = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen flex-col justify-between">
        <div className="relative grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex-1 pt-4">
                <DesktopNavigation />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 px-4 md:hidden lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <MobileNavigation />
                </SheetContent>
              </Sheet>
            </header>
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
