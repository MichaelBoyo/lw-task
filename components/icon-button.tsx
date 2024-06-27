import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export const IconButton = (props: { icon: LucideIcon }) => {
  return (
    <Button size="sm" className="bg-[#F7F8F9]">
      <props.icon size={16} color="black" />
    </Button>
  );
};
