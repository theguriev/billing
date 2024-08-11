"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/shadcn";
import { sidebarNav } from "@/config/docs";

import DocsSidebarNavItems from "./DocsSidebarNavItems";

const DocsSidebarNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {sidebarNav.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DocsSidebarNav;
