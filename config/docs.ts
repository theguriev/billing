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
      {
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
        items: [],
      },
      {
        title: "Aspect Ratio",
        href: "/docs/components/aspect-ratio",
        items: [],
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
        items: [],
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
        items: [],
      },
      {
        title: "Breadcrumb",
        href: "/docs/components/breadcrumb",
        items: [],
        label: "New",
      },
      {
        title: "Button",
        href: "/docs/components/button",
        items: [],
      },
      {
        title: "Calendar",
        href: "/docs/components/calendar",
        items: [],
      },
      {
        title: "Card",
        href: "/docs/components/card",
        items: [],
      },
      {
        title: "Carousel",
        href: "/docs/components/carousel",
        items: [],
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
        items: [],
      },
      {
        title: "Collapsible",
        href: "/docs/components/collapsible",
        items: [],
      },
      {
        title: "Combobox",
        href: "/docs/components/combobox",
        items: [],
      },
      {
        title: "Command",
        href: "/docs/components/command",
        items: [],
      },
      {
        title: "Context Menu",
        href: "/docs/components/context-menu",
        items: [],
      },
      {
        title: "Data Table",
        href: "/docs/components/data-table",
        items: [],
      },
      {
        title: "Date Picker",
        href: "/docs/components/date-picker",
        items: [],
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
        items: [],
      },
      {
        title: "Drawer",
        href: "/docs/components/drawer",
        items: [],
      },
      {
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
        items: [],
      },
      {
        title: "Form",
        href: "/docs/components/form",
        items: [],
      },
      {
        title: "Hover Card",
        href: "/docs/components/hover-card",
        items: [],
      },
      {
        title: "Input",
        href: "/docs/components/input",
        items: [],
      },
      {
        title: "Input OTP",
        href: "/docs/components/input-otp",
        items: [],
        label: "New",
      },
      {
        title: "Label",
        href: "/docs/components/label",
        items: [],
      },
      {
        title: "Menubar",
        href: "/docs/components/menubar",
        items: [],
      },
      {
        title: "Navigation Menu",
        href: "/docs/components/navigation-menu",
        items: [],
      },
      {
        title: "Pagination",
        href: "/docs/components/pagination",
        items: [],
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
        items: [],
      },
      {
        title: "Progress",
        href: "/docs/components/progress",
        items: [],
      },
      {
        title: "Radio Group",
        href: "/docs/components/radio-group",
        items: [],
      },
      {
        title: "Resizable",
        href: "/docs/components/resizable",
        items: [],
      },
      {
        title: "Scroll Area",
        href: "/docs/components/scroll-area",
        items: [],
      },
      {
        title: "Select",
        href: "/docs/components/select",
        items: [],
      },
      {
        title: "Separator",
        href: "/docs/components/separator",
        items: [],
      },
      {
        title: "Sheet",
        href: "/docs/components/sheet",
        items: [],
      },
      {
        title: "Skeleton",
        href: "/docs/components/skeleton",
        items: [],
      },
      {
        title: "Slider",
        href: "/docs/components/slider",
        items: [],
      },
      {
        title: "Sonner",
        href: "/docs/components/sonner",
        items: [],
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
        items: [],
      },
      {
        title: "Table",
        href: "/docs/components/table",
        items: [],
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
        items: [],
      },
      {
        title: "Textarea",
        href: "/docs/components/textarea",
        items: [],
      },
      {
        title: "Toast",
        href: "/docs/components/toast",
        items: [],
      },
      {
        title: "Toggle",
        href: "/docs/components/toggle",
        items: [],
      },
      {
        title: "Toggle Group",
        href: "/docs/components/toggle-group",
        items: [],
      },
      {
        title: "Tooltip",
        href: "/docs/components/tooltip",
        items: [],
      },
    ],
  },
] as const;
