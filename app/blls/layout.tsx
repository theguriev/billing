/* eslint-disable tailwindcss/no-arbitrary-value */
import { ReactNode } from "react";

import Link from "next/link";

import Logo from "../components/Logo";

import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigation from "./components/MobileNavigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between pb-24 md:pb-0">
      <div className="relative flex w-full flex-1 overflow-hidden lg:grid lg:grid-cols-[280px_1fr]">
        <div className="hidden md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 pt-4">{/* <DesktopNavigation /> */}</div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
      <div className="hidden w-full items-center justify-center py-4 md:flex">
        <Link href="/" className="flex">
          <Logo className="w-16" />
        </Link>
      </div>
      <MobileNavigation />
    </div>
  );
};

export default AppLayout;
