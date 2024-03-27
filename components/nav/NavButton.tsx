import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  text?: string;
  icon: ReactElement;
  className?: string;
};

function NavButton({ href, icon, text, className }: Props) {
  return (
    <Link href={href} className={cn("p-3", className)}>
      <Button>
        <icon.type {...icon.props} className="mr-2" />
        {text}
      </Button>
    </Link>
  );
}

export default NavButton;
