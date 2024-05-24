"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";

import links from "../constants/links";

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-between border-t bg-white px-4 py-2 md:hidden">
      {links.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          className={cn(
            "mx-[-0.65rem] flex flex-col items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
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

export default MobileNavigation;
