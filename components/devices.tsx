import { ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Devices = () => {
  return (
    <Card className="p-4 border-none">
      <div className="flex gap-3">
        <p className="font-bold text-[12.96px]">
          Apple Watches & 26 more devices
        </p>
        <Button size="sm" className="bg-[#4AD79B] h-[24px] px-2">
          View all <ChevronsRight size={20} />
        </Button>
      </div>
      <p className="text-[9.42px]">
        50% of your clients are connected to their device
      </p>
    </Card>
  );
};
