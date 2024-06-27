import { SidebarLink } from "@/components/SidebarItems";
import { Cog, User, HomeIcon, LayoutDashboard } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/", title: "Dashboard", icon: LayoutDashboard },
  { href: "/library", title: "Library", icon: User },
  { href: "/client-mgt", title: "Client Management", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
