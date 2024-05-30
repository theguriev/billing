import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
