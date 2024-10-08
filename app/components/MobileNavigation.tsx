/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";

import { useState, Fragment } from "react";

import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/app/utils/shadcn";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  info,
  sidebarNav,
  tokensLoggedIn,
  tokensLoggedOut,
} from "@/config/docs";
import siteConfig from "@/config/site";

import Logo from "./Logo";

const MobileLink = ({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  if (href.toString().startsWith("/logout")) {
    return (
      <a
        href={String(href)}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
};

const MobileNavigation = ({ loggedIn }: { loggedIn: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // const { info, sidebarNav, tokens } = generateDocsConfig({
  //   pathname,
  //   isLoggedIn: loggedIn,
  // });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Logo className="mr-3 size-3" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {info.map((item) => (
              <MobileLink
                key={item.href}
                href={String(item.href)}
                onOpenChange={setOpen}
              >
                {item.title}
              </MobileLink>
            ))}
            {loggedIn
              ? tokensLoggedIn.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={String(item.href)}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ))
              : tokensLoggedOut.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={String(item.href)}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ))}
          </div>
          <div className="flex flex-col space-y-2">
            {sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <Fragment key={item.href}>
                      <MobileLink
                        href={String(item.href)}
                        onOpenChange={setOpen}
                        className="text-muted-foreground"
                      >
                        {item.title}
                        {"label" in item && (
                          <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                            {item.label}
                          </span>
                        )}
                      </MobileLink>
                    </Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
