import { PropsWithChildren } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Callout = ({
  title,
  children,
  icon,
  ...props
}: PropsWithChildren<{
  icon?: string;
  title?: string;
}>) => {
  return (
    <Alert {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default Callout;
