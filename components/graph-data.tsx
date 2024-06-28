"use client";
import React from "react";
import { Card } from "./ui/card";
import { Info, MoreVertical, Repeat } from "lucide-react";
import { Button } from "./ui/button";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Label } from "recharts";
import { cn } from "@/lib/utils";
import { IconButton } from "./icon-button";
import { CHART_DATA } from "@/constants/chart.data";

const generateRandomValue = () => Math.floor(Math.random() * 25);

export const GraphData = () => {
  CHART_DATA.forEach((item) => {
    item.w = generateRandomValue();
    item.x = generateRandomValue();
    item.y = generateRandomValue();
    item.z = generateRandomValue();
  });
  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#2D2D2D] text-2xl font-bold">
            Clients Performance Graph
          </h1>
          <p className="text-[#72777B] font-semibold">Sleep</p>
        </div>
        <div className="flex space-x-2">
          <IconButton icon={Info} />
          <IconButton icon={Repeat} />
          <IconButton icon={MoreVertical} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {tabs.map((tab, i) => (
          <Button
            className={cn(tab === "Sleep" ? "bg-[#323A46]" : "bg-[#E7EAEE]")}
            key={i}
          >
            {tab}
          </Button>
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
      <div className="min-w-full">
        <AreaChart
          width={window.innerWidth - 650}
          height={410}
          data={CHART_DATA}
          className=""
        >
          <CartesianGrid />
          <XAxis dataKey="name">
            <Label value="Label" offset={-5} position="insideBottom" />
          </XAxis>

          <YAxis
            label={{ value: "Label", angle: -90, position: "insideLeft" }}
            // tick={({ w, x, y, z, payload }) => {
            //   return payload.value;
            // }}
          />

          <Area
            type="monotone"
            dataKey="x"
            stackId="1"
            stroke="blue"
            fill="#00C7F2"
          />
          <Area
            type="monotone"
            dataKey="y"
            stackId="1"
            stroke="green"
            fill="#0FCA7A"
          />
          <Area
            type="monotone"
            dataKey="z"
            stackId="2"
            stroke="blue"
            // fill="#0E669D"
            fill={chartsKeys[2].color}
          />

          <Area
            type="monotone"
            gradientTransform=""
            dataKey="w"
            stackId="2"
            fill={chartsKeys[0].color}
            stroke="#FBC62F"
          />
        </AreaChart>
      </div>
    </Card>
  );
};

const tabs = ["Sleep", "Steps", "Weight", "Termerature"];

const chartsKeys = [
  {
    name: "REM",
    color: "#FFD700",
  },
  {
    name: "Light Sleep",
    color: "#00C7F2",
  },
  {
    name: "Deep Sleep",
    color: "#0E659D",
  },
  {
    name: "Awake",
    color: "#22AD7D",
  },
];
