import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import SidebarItems from "./SidebarItems";

export const SideBar = () => {
  return (
    <aside className="h-screen min-w-52  hidden md:block p-4 pt-8  border-border shadow-inner">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <Image src="/logo.svg" height={26} width={115} alt="logo" />
          <SidebarItems />
        </div>
      </div>
    </aside>
  );
};
