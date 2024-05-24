import Link from "next/link";

import Logo from "@/app/components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="absolute inset-0 flex flex-col items-center p-6 sm:justify-center">
      <div className="w-full max-w-80">{children}</div>
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center">
        <Link href="/blls">
          <Logo className="w-14" />
        </Link>
      </div>
    </main>
  );
}
