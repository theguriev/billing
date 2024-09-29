"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";
import { Separator } from "@/components/ui/separator";
import { info, tokensLoggedIn, tokensLoggedOut } from "@/config/docs";
import type { NavigationItem } from "@/config/docs";
import siteConfig from "@/config/site";

import Logo from "./Logo";

const DesktopNavigationItem = ({
  title,
  href,
  pathname,
}: NavigationItem & { pathname: string }) => (
  <Link
    key={`desktop-${title}`}
    href={String(href)}
    className={cn(
      "transition-colors hover:text-foreground/80",
      pathname === href ? "text-foreground" : "text-foreground/60"
    )}
  >
    {title}
  </Link>
);

const DesktopNavigation = ({ loggedIn }: { loggedIn: boolean }) => {
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
        {info.map((item) => (
          <DesktopNavigationItem
            key={item.title}
            {...item}
            pathname={pathname}
          />
        ))}
        <Separator orientation="vertical" />
        {loggedIn
          ? tokensLoggedIn.map((item) => (
              <DesktopNavigationItem
                key={item.title}
                {...item}
                pathname={pathname}
              />
            ))
          : tokensLoggedOut.map((item) => (
              <DesktopNavigationItem
                key={item.title}
                {...item}
                pathname={pathname}
              />
            ))}
      </nav>
    </div>
  );
};

export default DesktopNavigation;
