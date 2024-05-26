/* eslint-disable tailwindcss/no-arbitrary-value */
import Link from "next/link";

import Logo from "./components/Logo";

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Logo className="size-14" />
          <span className="sr-only">Crypto Creator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full border-y py-12 md:py-24 lg:py-32">
          <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
              <div className="flex flex-col space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Create Your Own Cryptocurrency
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Our platform makes it easy to launch your own cryptocurrency
                  in just a few simple steps.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/blls/create-token"
                  >
                    Create Your Crypto
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Launch Your Crypto
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides a comprehensive set of tools and
                  features to help you create, launch, and manage your own
                  cryptocurrency.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customizable Token</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fully customize your cryptocurrency token with your own
                  branding, supply, and distribution.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Secure Blockchain</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your cryptocurrency will be built on a secure, decentralized
                  blockchain network.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">User-Friendly Dashboard</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your cryptocurrency, track transactions, and monitor
                  performance through our intuitive dashboard.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automated Processes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your cryptocurrency operations with automated
                  processes for minting, burning, and distribution.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Global Accessibility</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Make your cryptocurrency available to a global audience with
                  support for multiple languages and currencies.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Regulatory Compliance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ensure your cryptocurrency meets all relevant regulatory
                  requirements and guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                The Benefits of Creating Your Own Cryptocurrency
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Launching your own cryptocurrency can provide a range of
                benefits for your business or community.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Increased Engagement
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Encourage user participation and loyalty by allowing
                        them to earn, hold, and use your cryptocurrency.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">New Revenue Streams</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Monetize your products or services by accepting your
                        cryptocurrency as a payment method.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Competitive Advantage
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Set your business apart by offering a unique
                        cryptocurrency that provides value to your customers.
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  3 Simple Steps to Create Your Cryptocurrency
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to launch your own cryptocurrency
                  in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">1. Design Your Token</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customize your cryptocurrency token with your own branding,
                  supply, and distribution.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  2. Build on the Blockchain
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your cryptocurrency will be built on a secure, decentralized
                  blockchain network.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">3. Launch and Manage</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily launch your cryptocurrency and manage it through our
                  user-friendly dashboard.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Create Your Crypto
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
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
