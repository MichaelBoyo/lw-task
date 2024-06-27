import { ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Devices = () => {
  return (
    <Card className="p-4 border-none">
      <div className="flex gap-3">
        <p className="font-bold">Apple Watches & 26 more devices</p>
        <Button size="sm" className="bg-[#4AD79B]">
          View all <ChevronsRight />
        </Button>
      </div>
      <p className="text-sm">
        50% of your clients are connected to their device
      </p>
    </Card>
  );
};
