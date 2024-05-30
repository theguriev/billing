"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import {
  HeadsetIcon,
  HandHelpingIcon,
  HandCoinsIcon,
  CircleHelpIcon,
  BookIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "#key-features",
    text: "Features",
    Icon: HandHelpingIcon,
  },
  {
    href: "#benefits",
    text: "Benefits",
    Icon: HandCoinsIcon,
  },
  {
    href: "#how-it-works",
    text: "How?",
    Icon: CircleHelpIcon,
  },
  {
    href: "/docs",
    text: "Docs",
    Icon: BookIcon,
  },
  {
    href: "https://t.me/theguriev",
    Icon: HeadsetIcon,
    text: "Contact",
  },
] as const;

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-between overflow-auto border-t bg-white px-4 py-0 md:hidden">
      {links.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          className="flex min-w-20 flex-col items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <link.Icon className="size-4" />
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavigation;
