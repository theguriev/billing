import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/app/utils/shadcn";
import { Toaster } from "@/components/ui/toaster";
import siteConfig from "@/config/site";

import Header from "./components/Header";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "cryptocurrency",
    "points system",
    "create cryptocurrency",
    "create points system",
    "create credits system",
    "custom cryptocurrency",
    "custom points system",
    "custom credits system",
    "digital currency",
    "token creation",
    "token management",
    "token issuance",
    "token transfer",
    "token sending",
  ],
  authors: [
    {
      name: "BLLS",
      url: "https://blls.me",
    },
  ],
  creator: "Eugen Guriev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@theguriev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            {/* <SiteFooter /> */}
          </div>
          <Toaster />
        </Providers>
        <GoogleAnalytics gaId="G-Z3RB673VHE" />
      </body>
    </html>
  );
}
