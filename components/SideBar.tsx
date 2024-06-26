import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SideBar = () => {
  return (
    <aside>
      <Image src="/logo.svg" height={26} width={115} alt="logo" />
      {navs.map((nav, idx) => {
        return (
          <Link
            href={nav.link}
            key={idx}
            className={cn(
              nav.name === "Dashboard" ? "bg-primary" : "",
              "flex p-2 gap-2"
            )}
          >
            <nav.icon
              color={nav.name === "Dashboard" ? "white" : ""}
              fill={nav.name === "Dashboard" ? "white" : ""}
              className={cn(nav.name === "Dashboard" ? "" : "")}
            />
            <span>{nav.name}</span>
          </Link>
        );
      })}
    </aside>
  );
};

const navs = [
  {
    name: "Dashboard",
    link: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Library",
    link: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Client Management",
    link: "/",
    icon: LayoutDashboard,
  },
];
