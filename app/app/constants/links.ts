import {
  BanknoteIcon,
  WalletIcon,
  LogOutIcon,
  HeadsetIcon,
} from "lucide-react";

const links = [
  {
    href: "/app",
    Icon: BanknoteIcon,
    text: "Tokens",
    isActive: (pathname: string) =>
      pathname === "/app" ||
      pathname.startsWith("/app/transactions") ||
      pathname.startsWith("/app/create-token") ||
      pathname.startsWith("/app/issue"),
  },
  {
    href: "/app/wallet",
    Icon: WalletIcon,
    text: "Wallet",
    isActive: (pathname: string) => pathname === "/app/wallet",
  },
  {
    href: "https://t.me/theguriev",
    Icon: HeadsetIcon,
    text: "Support",
    isActive: () => false,
  },
  {
    href: "/wallet?logout=true",
    Icon: LogOutIcon,
    text: "Log out",
    isActive: () => false,
  },
] as const;

export default links;
