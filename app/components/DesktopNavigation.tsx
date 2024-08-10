"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";
import generateDocsConfig from "@/config/docs";
import siteConfig from "@/config/site";

import Logo from "./Logo";

const DesktopNavigation = ({ loggedIn }: { loggedIn: boolean }) => {
  const pathname = usePathname();
  const docsConfig = generateDocsConfig({ pathname, isLoggedIn: loggedIn });
  const { info, tokens } = docsConfig;

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo className="size-3" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {info.map((item) => (
          <Link
            key={`desktop-${item.title}`}
            href={String(item.href)}
            className={cn(
              "transition-colors hover:text-foreground/80",
              item.isActive ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
        {tokens.map((item) => {
          if (item.href.startsWith("/logout")) {
            return (
              <a
                key={`desktop-${item.title}`}
                href={String(item.href)}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  item.isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.title}
              </a>
            );
          }
          return (
            <Link
              key={`desktop-${item.title}`}
              href={String(item.href)}
              className={cn(
                "transition-colors hover:text-foreground/80",
                item.isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DesktopNavigation;
