"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";

import links from "../constants/links";

const DesktopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {links.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            link.isActive(pathname) && "bg-muted"
          )}
        >
          <link.Icon className="size-4" />
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
