"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LucideIcon } from "lucide-react";

import { defaultLinks } from "@/constants/nav";
import { poppins } from "@/app/fonts";
import { cn } from "@/lib/utils";

export interface SidebarLink {
  title: string;
  href: string;
  icon: LucideIcon;
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
      <div className="flex items-center ">
        <link.icon fill={active ? "white" : "none"} className="h-3.5 mr-1" />
        <span className={cn(poppins.className, active ? "font-bold" : "")}>
          {link.title}
        </span>
      </div>
    </Link>
  );
};
