"use client";
import React from "react";
import { Card } from "./ui/card";
import { Info, MoreVertical, Repeat } from "lucide-react";
import { Button } from "./ui/button";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Jan", w: 8, x: 12, y: 23, z: 122 },
  { name: "Feb", w: 8, x: 22, y: 3, z: 73 },
  { name: "Mar", w: 8, x: 13, y: 15, z: 32 },
  { name: "Apr", w: 8, x: 42, y: 35, z: 23 },
  { name: "May", w: 8, x: 51, y: 45, z: 20 },
  { name: "June", w: 8, x: 16, y: 25, z: 29 },
  { name: "July", w: 8, x: 17, y: 17, z: 61 },
  { name: "Aug", w: 8, x: 81, y: 32, z: 45 },
  { name: "Sept", w: 8, x: 19, y: 43, z: 93 },
  { name: "Oct", w: 8, x: 19, y: 43, z: 93 },
  { name: "Nov", w: 8, x: 19, y: 43, z: 93 },
  { name: "Dec", w: 8, x: 19, y: 43, z: 93 },
];

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
      <AreaChart width={1200} height={400} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis>kk</YAxis>
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
          fill="#0E669D"
        />

        <Area
          type="monotone"
          gradientTransform=""
          dataKey="w"
          stackId="2"
          stroke="yellow"
          fill="#FBC62F"
        />
      </AreaChart>
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
