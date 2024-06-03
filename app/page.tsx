/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Create Your Own Cryptocurrency or Points System in Minutes | Easy and Secure",
  description:
    "Effortlessly design and launch your custom cryptocurrency, points, or credits system with our user-friendly platform. Enjoy quick setup, enhanced security, and complete control without the need for distributed servers. Start creating your digital currency today!",
};

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <section className="w-full border-y py-12 md:py-24 lg:py-32">
          <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
              <div className="flex flex-col space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Create Your Own Cryptocurrency in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Effortlessly launch your custom points, credits, or
                  cryptocurrency system with just a few clicks. No distributed
                  servers needed.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/blls/create-token"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  id="key-features"
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                >
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Launch Your Crypto
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the powerful features that make our platform the
                  perfect choice for creating your own cryptocurrency or points
                  system.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Instant Wallet Creation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create a secure wallet with a private and public key in
                  seconds. Your public key doubles as your wallet address.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Custom Cryptocurrency</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily design and launch your own cryptocurrency tailored to
                  your specific needs and preferences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Flexible Points System</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Set up a versatile points or credits system for rewards,
                  loyalty programs, or internal currency.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Simple Token Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamlessly create, distribute, and manage your tokens without
                  the need for distributed servers.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">User-Friendly Interface</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enjoy an intuitive, easy-to-use platform designed to make
                  cryptocurrency creation accessible to everyone.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Secure Transactions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Benefit from robust security features that ensure your
                  transactions and tokens are safe and reliable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2
                id="benefits"
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
              >
                Benefits of Our Platform
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the advantages of creating your own cryptocurrency or
                points system with our innovative platform.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Quick and Easy Setup
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Launch your custom cryptocurrency or points system in
                        minutes without the need for technical expertise. Our
                        streamlined process makes it simple and efficient.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Cost-Effective Solution
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Avoid the high costs associated with traditional
                        distributed server systems. Our platform offers an
                        affordable way to create and manage your own digital
                        currency.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Enhanced Control and Flexibility
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Maintain complete control over your currency or points
                        system. Customize it to fit your specific needs and
                        adapt it as your requirements evolve.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  id="how-it-works"
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                >
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  3 Simple Steps to Create Your Cryptocurrency
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to create and manage your own
                  cryptocurrency or points system.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">1. Create Your Wallet</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate a secure wallet with a private and public key. The
                  public key also serves as your wallet address, making it easy
                  to manage your digital assets.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">2. Design Your Currency</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customize your cryptocurrency or points system to match your
                  specific needs. Define the rules, values, and other parameters
                  effortlessly.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  3. Manage and Distribute Tokens
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Issue and distribute your tokens as needed. Use our platform
                  to manage transactions and keep track of your digital
                  currency.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/blls/create-token"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/docs"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Blls.me. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
