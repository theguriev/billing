"use client";

import type { ReactNode } from "react";

const Blocks = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-col">{children}</div>;
};

export default Blocks;
