import {
  BanknoteIcon,
  WalletIcon,
  LogOutIcon,
  HeadsetIcon,
} from "lucide-react";

const links = [
  {
    href: "/blls",
    Icon: WalletIcon,
    text: "Wallet",
    isActive: (pathname: string) => pathname === "/blls",
  },
  {
    href: "/blls/tokens",
    Icon: BanknoteIcon,
    text: "Tokens",
    isActive: (pathname: string) => pathname === "/blls/tokens",
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
