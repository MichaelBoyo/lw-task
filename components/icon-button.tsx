import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export const IconButton = (props: { icon: LucideIcon }) => {
  return (
    <Button size="sm" className="bg-[#F7F8F9] p-2 h-max">
      <props.icon size={10} strokeWidth={3} color="black" />
    </Button>
  );
};
