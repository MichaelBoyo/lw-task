import React from "react";
import { Card } from "./ui/card";
import { BarChart2 } from "lucide-react";
import { IconButton } from "./icon-button";
import Image from "next/image";

export const WalkingExercise = () => {
  return (
    <Card className="p-4 border-none">
      <div className="flex justify-between">
        <p className="font-bold text-[12.96px]">Walking Exercise</p>
        <IconButton icon={BarChart2} />
      </div>
      <div>
        <p className="font-bold text-[15.31px]">100,00,622 Steps</p>
        <p className="text-[#72777B] text-[9.42px]">
          Keep pushing them to reach their goals!
        </p>
      </div>

      <div className="flex gap-4 pt-6">
        <Image
          src="/Chart.svg"
          alt="Chart"
          height={130}
          width={130}
          quality={100}
        />
        <div className="space-y-2">
          {data.map((el, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: el.color }}
              />
              <div>
                <p className="text-[7.07px]">{el.name}</p>
                <p className="font-bold text-[9.42px]">{el.value}</p>
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
