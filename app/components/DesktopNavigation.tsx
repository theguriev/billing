"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";
import siteConfig from "@/config/site";

import Logo from "./Logo";

const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo className="size-3" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/blls"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blls" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Wallet
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blls/tokens"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Tokens
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href="https://t.me/theguriev"
          target="_blank"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          Support
        </Link>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
