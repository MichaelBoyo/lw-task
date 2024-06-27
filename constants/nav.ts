import { SidebarLink } from "@/components/SidebarItems";
import { FolderGit, LayoutDashboard, PersonStanding } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/", title: "Dashboard", icon: LayoutDashboard },
  { href: "/library", title: "Library", icon: FolderGit },
  { href: "/client-mgt", title: "Client Management", icon: PersonStanding },
];

export const additionalLinks: AdditionalLinks[] = [];
