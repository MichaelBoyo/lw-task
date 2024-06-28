import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { IconButton } from "./icon-button";
import { Card } from "./ui/card";

export const Steps = () => {
  return (
    <Card className="p-4 border-none">
      <div className="flex justify-between items-center ">
        <p className="font-bold text-[12.96px]">Steps</p>
        <div className="flex space-x-4">
          <IconButton icon={ChevronLeft} />
          <IconButton icon={ChevronRight} />
          <IconButton icon={Info} />
        </div>
      </div>
      <p className="text-[9.42px] text-[#72777B]">
        27% client data usage was gathered this week
      </p>
    </Card>
  );
};
