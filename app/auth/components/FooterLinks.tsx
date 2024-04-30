import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FooterLinks = ({
  links,
}: {
  links: Array<{ title: string; href: string }>;
}) => (
  <div className="mb-6 mt-4 flex flex-col items-center justify-center sm:flex-row">
    {links.map(({ title, href }, index) => (
      <>
        {index > 0 && <Separator orientation="vertical" className="mx-2 h-5" />}
        <Button
          key={href + title}
          asChild
          variant="link"
          className="p-0 text-sm font-medium leading-none"
        >
          <Link href={href}>{title}</Link>
        </Button>
      </>
    ))}
  </div>
);

export default FooterLinks;
