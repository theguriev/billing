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
    href: "/docs/examples/normal-purchase",
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
      {
        title: "Use cases",
        href: "/docs/use-cases",
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
      {
        title: "Create a new token",
        href: "/docs/integration/create-a-new-token",
        items: [],
      },
      {
        title: "Retrieves all tokens",
        href: "/docs/integration/retrieves-all-tokens",
        items: [],
      },
      {
        title: "Get token by ID",
        href: "/docs/integration/get-token-by-id",
        items: [],
      },
      {
        title: "Issues a token to a specific address",
        href: "/docs/integration/issues-a-token-to-a-specific-address",
        items: [],
      },
      {
        title: "Send transaction",
        href: "/docs/integration/send-transaction",
        items: [],
      },
      {
        title: "Get all transactions",
        href: "/docs/integration/get-all-transactions",
        items: [],
      },
    ],
  },
  {
    title: "Utilities",
    items: [
      {
        title: "Sign token",
        href: "/docs/utilities/sign-token",
        items: [],
      },
      {
        title: "Sign issue",
        href: "/docs/utilities/sign-issue",
        items: [],
      },
      {
        title: "Sign transaction",
        href: "/docs/utilities/sign-transaction",
        items: [],
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Normal purchase",
        href: "https://purchase-example.vercel.app/",
        items: [],
      },
      {
        title: "Subscription",
        href: "/docs/examples/subscription",
        items: [],
      },
    ],
  },
] as const;
