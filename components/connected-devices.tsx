import { Info, Repeat } from "lucide-react";
import { IconButton } from "./icon-button";
import { Card } from "./ui/card";

export const ConnectedDevices = () => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <p>Connected Devices</p>
        <div className="flex space-x-4">
          <IconButton icon={Repeat} />
          <IconButton icon={Info} />
        </div>
      </div>
      <p>choose a wearable device</p>
    </Card>
  );
};
