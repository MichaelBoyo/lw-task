"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { defaultLinks } from "@/constants/nav";
import { poppins } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface SidebarLink {
  title: string;
  href: string;
  icon: ReactNode;
}

const SidebarItems = () => {
  const fullPathname = usePathname();
  const pathname = "/" + fullPathname.split("/")[1];
  return (
    <ul>
      {defaultLinks.map((link) => (
        <li key={link.title}>
          <SidebarLink link={link} active={pathname === link.href} />
        </li>
      ))}
    </ul>
  );
};
export default SidebarItems;

const SidebarLink = ({
  link,
  active,
}: {
  link: SidebarLink;
  active: boolean;
}) => {
  return (
    <Link
      href={link.href}
      className={`group transition-colors p-2 inline-block hover:bg-popover hover:text-primary text-muted-foreground  hover:shadow rounded-md w-full${
        active ? " text-white font-semibold bg-primary" : ""
      }`}
    >
      <div className="flex gap-4  items-center text-[13.9px] ">
        <div className="h-4 w-4">{link.icon}</div>
        <span
          className={cn(
            poppins.className,
            active ? "font-bold " : "font-medium",
            ""
          )}
        >
          {link.title}
        </span>
      </div>
    </Link>
  );
};
