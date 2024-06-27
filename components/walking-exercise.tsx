import React from "react";
import { Card } from "./ui/card";
import { BarChart2 } from "lucide-react";
import { IconButton } from "./icon-button";

export const WalkingExercise = () => {
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <p className="font-bold">Walking Exercise</p>
        <IconButton icon={BarChart2} />
      </div>
      <div>
        <p className="font-bold text-xl">100,00,622 Steps</p>
        <p className="text-[#72777B] text-sm">
          Keep pushing them to reach their goals!
        </p>
      </div>

      <div className="flex">
        <p>circle</p>
        <div className="space-y-2">
          {data.map((el, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ background: el.color }}
              />
              <div>
                <p>{el.name}</p>
                <p className="font-bold text-xl">{el.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const data = [
  {
    name: "Miles",
    value: "101.25 mi",
    color: "#FBC62F",
  },
  {
    name: "Calories Burned",
    value: "70.230",
    color: "#00C7F2",
  },
  {
    name: "Exercise",
    value: "100,561 mins",
    color: "#F75D5F",
  },
];
