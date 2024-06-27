import { SidebarLink } from "@/components/SidebarItems";
import { ClientMgtIcon } from "@/components/icons/ClientMgtICon";
import { DashBoardIcon } from "@/components/icons/dashboard";
import { Library } from "@/components/icons/library";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/", title: "Dashboard", icon: <DashBoardIcon /> },
  { href: "/library", title: "Library", icon: <Library /> },
  { href: "/client-mgt", title: "Client Management", icon: <ClientMgtIcon /> },
];

export const additionalLinks: AdditionalLinks[] = [];
