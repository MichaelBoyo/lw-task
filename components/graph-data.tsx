import React from "react";
import { Card } from "./ui/card";
import { Info, MoreVertical, Repeat } from "lucide-react";
import { Button } from "./ui/button";

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

      <div className="flex space-x-2 w-full justify-between">
        {tabs.map((tab, i) => (
          <Button key={i}>{tab}</Button>
        ))}
      </div>
      <div className="flex space-x-6">
        {chartsKeys.map((key, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div
              style={{ background: key.color }}
              className="h-4 w-4 rounded-full"
            />
            <h1>{key.name}</h1>
          </div>
        ))}
      </div>
    </Card>
  );
};

const tabs = ["Sleep", "Steps", "Weight", "Termerature"];

const chartsKeys = [
  {
    name: "REM",
    color: "yellow",
  },
  {
    name: "Light Sleep",
    color: "yellow",
  },
  {
    name: "Deep Sleep",
    color: "green",
  },
  {
    name: "Awake",
    color: "blue",
  },
];
