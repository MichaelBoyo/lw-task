import Image from "next/image";
import SidebarItems from "./SidebarItems";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

export const SideBar = () => {
  return (
    <aside className="h-screen min-w-52 relative  hidden md:block p-4 px-6 pt-8  border-border shadow-inner">
      <Button
        className="rounded-full absolute top-14 -right-5 bg-white border z-20"
        size="icon"
      >
        <ChevronLeft color="black" />
      </Button>
      <div className="flex flex-col   gap-[110px] h-full">
        <Image src="/logo.svg" height={26} width={115} alt="logo" />
        <SidebarItems />
      </div>
    </aside>
  );
};
