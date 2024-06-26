import React from "react";
import { Card } from "./ui/card";
import { Info, MoreVertical, Repeat } from "lucide-react";

export const GraphData = () => {
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <h1>Clients Performance Graph</h1>
        <div className="flex space-x-6">
          <Info />
          <Repeat />
          <MoreVertical />
        </div>
      </div>
    </Card>
  );
};
