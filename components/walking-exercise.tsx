import React from "react";
import { Card } from "./ui/card";
import { BarChart2 } from "lucide-react";

export const WalkingExercise = () => {
  return (
    <Card className="p-4">
      <div>
        <p>Walking Exercise</p>
        <p>100,00,622 Steps</p>
        <p>Keep pushing them to reach their goals!</p>
      </div>
      <BarChart2 />
    </Card>
  );
};
