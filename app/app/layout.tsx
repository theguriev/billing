import { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

import Nav from "./components/Nav";
import NewStream from "./components/NewStream";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-col md:flex">
      <div className="flex flex-col items-center justify-end space-y-2 p-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <NewStream />
      </div>
      <Separator />
      <div className="container mt-8 bg-background">
        <div className="grid lg:grid-cols-5">
          <div className="pb-12">
            <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <Nav />
              </div>
            </div>
          </div>
          <div className="col-span-3 pt-8 lg:col-span-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
