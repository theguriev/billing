import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Create Your Own Cryptocurrency or Points System in Minutes | Easy and Secure",
  description:
    "Effortlessly design and launch your custom cryptocurrency, points, or credits system with our user-friendly platform. Enjoy quick setup, enhanced security, and complete control without the need for distributed servers. Start creating your digital currency today!",
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
      <body className={inter.className}>
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-Z3RB673VHE" />
      </body>
    </html>
  );
}
