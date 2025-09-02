"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
