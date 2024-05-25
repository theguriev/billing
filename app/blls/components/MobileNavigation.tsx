"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";

import links from "../constants/links";

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-between border-t bg-white px-4 py-0 md:hidden">
      {links.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          className={cn(
            "flex flex-col items-center gap-2 text-sm px-3 py-2 text-muted-foreground hover:text-foreground min-w-20",
            link.isActive(pathname) && "font-bold"
          )}
        >
          <link.Icon className="size-4" />
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavigation;
