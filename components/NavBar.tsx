import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown, Moon, MoreVertical } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="flex justify-end items-center space-x-6">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="/nav_user.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ChevronDown />
      </div>
      <div className="">
        <p>Ronald Richards</p>
        <p>Instructor</p>
      </div>
      <Bell />
      <Moon />
      <MoreVertical />
    </div>
  );
};
