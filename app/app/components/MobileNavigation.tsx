/* eslint-disable tailwindcss/no-arbitrary-value */
import {
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <nav className="grid gap-2 text-lg font-medium">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
        <Package2 className="size-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Home className="size-5" />
        Dashboard
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
      >
        <ShoppingCart className="size-5" />
        Orders
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Package className="size-5" />
        Products
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Users className="size-5" />
        Customers
      </Link>
      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <LineChart className="size-5" />
        Analytics
      </Link>
    </nav>
  );
};

export default MobileNavigation;
