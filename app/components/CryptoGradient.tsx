import { forwardRef, HTMLAttributes, CSSProperties } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import chunk from "../utils/chunk";
import { cn } from "../utils/shadcn";

const CryptoGradient = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { address: string }
>(({ className, address, ...props }, ref) => {
  const [firstColor, secondColor] = chunk(address.slice(2).split(""), 6).map(
    (item) => `#${item.join("")}`
  );
  if (address === "0x") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "bg-gradient-to-r border-2 border-[#FEDB37]",
              "from-[#FEDB37]",
              "to-[#FDB931]",
              className
            )}
            {...props}
            ref={ref}
          ></div>
        </TooltipTrigger>
        <TooltipContent>Genesis block</TooltipContent>
      </Tooltip>
    );
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          style={
            {
              "--first-color": firstColor,
              "--second-color": secondColor,
            } as CSSProperties
          }
          className={cn(
            "bg-gradient-to-l",
            `from-[color:var(--first-color)]`,
            `to-[color:var(--second-color)]`,
            className
          )}
          {...props}
          ref={ref}
        ></div>
      </TooltipTrigger>
      <TooltipContent>{address}</TooltipContent>
    </Tooltip>
  );
});
CryptoGradient.displayName = "CryptoGradient";

export default CryptoGradient;
