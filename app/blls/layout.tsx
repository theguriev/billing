/* eslint-disable tailwindcss/no-arbitrary-value */
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto py-6">{children}</div>;
};

export default AppLayout;
