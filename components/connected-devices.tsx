import { Info, Repeat } from "lucide-react";
import { IconButton } from "./icon-button";
import { Card } from "./ui/card";

export const ConnectedDevices = () => {
  return (
    <Card className="p-4 border-none">
      <div className="flex justify-between items-center">
        <p className="font-bold">Connected Devices</p>
        <div className="flex space-x-2">
          <IconButton icon={Repeat} />
          <IconButton icon={Info} />
        </div>
      </div>
      <p className="text-[#72777B] text-sm">Choose a wearable device</p>
    </Card>
  );
};
