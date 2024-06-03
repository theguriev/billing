/* eslint-disable tailwindcss/no-arbitrary-value */
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/app/utils/shadcn";
import { buttonVariants } from "@/components/ui/button";
import siteConfig from "@/config/site";

import getWalletFromCookie from "../utils/getWalletFromCookie";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import ModeToggle from "./ModeToggle";

const Header = () => {
  const wallet = getWalletFromCookie();
  const isLoggedIn = Boolean(wallet.address) && Boolean(wallet.privateKey);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <DesktopNavigation loggedIn={isLoggedIn} />
        <MobileNavigation loggedIn={isLoggedIn} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <GithubIcon className="size-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <TwitterIcon className="size-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
