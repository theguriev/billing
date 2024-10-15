import { Icons } from "@/app/components/Icons";

export type NavigationItem = {
  title: string;
  href?: string;
  external?: boolean;
  label?: string;
  disabled?: boolean;
  items?: NavigationItem[];
  icon?: keyof typeof Icons;
};

export const info: Array<NavigationItem> = [
  {
    title: "Documentation",
    href: "/docs",
  },
  {
    title: "Examples",
    href: "/examples",
  },
  {
    title: "Support",
    href: "https://t.me/theguriev",
  },
];

export const tokensLoggedIn: Array<NavigationItem> = [
  {
    title: "Wallet",
    href: "/blls",
  },
  {
    title: "Tokens",
    href: "/blls/tokens",
  },
  {
    title: "Log out",
    href: "/logout",
  },
];

export const tokensLoggedOut: Array<NavigationItem> = [
  {
    title: "Log in",
    href: "/login",
  },
];

export const sidebarNav: Array<NavigationItem> = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "How it works",
        href: "/docs/how-it-works",
        items: [],
      },
      {
        title: "More tokens",
        href: "/docs/more-tokens",
        items: [],
      },
      {
        title: "Safely Transfer Your Tokens",
        href: "/docs/send-funds",
        items: [],
      },
    ],
  },
  {
    title: "Integration (API)",
    items: [
      {
        title: "Create a wallet",
        href: "/docs/integration/create-a-wallet",
        items: [],
      },
      {
        title: "Get balance of a wallet",
        href: "/docs/integration/get-balance-of-a-wallet",
        items: [],
      },
    ],
  },
] as const;
