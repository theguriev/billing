/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";

import { BrickWall, UserCog, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";
import { buttonVariants } from "@/components/ui/button";

import logoutAction from "../actions/logout";

const activeClasses = (active: boolean) =>
  cn(
    buttonVariants({ variant: active ? "default" : "ghost", size: "sm" }),
    active &&
      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
    "justify-start"
  );

const Nav = () => {
  const pathname = usePathname();

  const handleLogoutClick = () => {
    logoutAction();
  };

  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <Link href="/app" className={activeClasses(pathname === "/app")}>
          <BrickWall className="mr-2 size-4" />
          Streams
        </Link>
        <Link
          href="/app/profile"
          className={activeClasses(pathname === "/app/profile")}
        >
          <UserCog className="mr-2 size-4" />
          Profile
        </Link>
        <Link
          href="#"
          className={activeClasses(false)}
          onClick={handleLogoutClick}
        >
          <LogOut className="mr-2 size-4" />
          Log out
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
