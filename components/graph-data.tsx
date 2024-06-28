"use client";
import { CHART_DATA } from "@/constants/chart.data";
import { cn } from "@/lib/utils";
import { Info, MoreVertical, Repeat } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { IconButton } from "./icon-button";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useLayoutEffect, useState } from "react";

const formatTime = (num: number) => {
  if (num === 0) {
    return "0";
  }
  return num > 12 ? `${num}:00` : `${num}:00`;
};

export const GraphData = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  const onResize = () => {
    setInnerWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    onResize();
  }, []);
  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
          width={innerWidth > 0 ? innerWidth - 650 : 900}
          height={410}
          data={CHART_DATA}
          className=""
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>

          <YAxis
            label={{ value: "Time", angle: -90, position: "insideLeft" }}
            tickFormatter={formatTime}
            tickCount={6}
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
          <Tooltip />
        </AreaChart>
      </div>
    </Card>
  );
};

const tabs = ["Sleep", "Steps", "Weight", "Temperature"];

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
