import { forwardRef, HTMLAttributes, CSSProperties } from "react";

import { cn } from "../utils/shadcn";

const CryptoGradient = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { address: string }
>(({ className, address, ...props }, ref) => {
  if (address === "0x") {
    return (
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
    );
  }
  const firstColor = `#${address.slice(2, 8)}`;
  const secondColor = `#${address.slice(14, 20)}`;
  return (
    <div
      style={
        {
          "--from": firstColor,
          "--to": secondColor,
        } as CSSProperties
      }
      className={cn(
        "bg-gradient-to-r",
        `from-[color:var(--from)]`,
        `to-[color:var(--to)]`,
        className
      )}
      {...props}
      ref={ref}
    ></div>
  );
});
CryptoGradient.displayName = "CryptoGradient";

export default CryptoGradient;
