import React from "react";
import { Card } from "./ui/card";
import { Info, Repeat } from "lucide-react";
import { IconButton } from "./icon-button";

export const Steps = () => {
  return (
    <Card className="">
      <div className="border-b">
        <div className="flex justify-between items-center p-4">
          <p>Steps</p>
          <div className="flex space-x-4">
            <IconButton icon={Repeat} />
            <IconButton icon={Info} />
          </div>
        </div>
        <p className="text-sm p-4">
          27% client data usage was gathered this week
        </p>
      </div>
    </Card>
  );
};
