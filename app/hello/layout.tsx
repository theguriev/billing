import Link from "next/link";

import Logo from "@/app/components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="mt-8 flex flex-1 justify-center md:mt-0 md:items-center lg:mt-0 lg:items-center">
        {children}
      </div>
      <div className="flex w-full items-center justify-center py-4">
        <Link href="/" className="flex">
          <Logo className="w-16" />
        </Link>
      </div>
    </main>
  );
}
