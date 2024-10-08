import Link from "next/link";

import Logo from "@/app/components/Logo";
import siteConfig from "@/config/site";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="absolute inset-0 flex flex-col items-center p-6 sm:justify-center">
      <div className="w-full max-w-80">{children}</div>
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="size-3" />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
    </main>
  );
}
