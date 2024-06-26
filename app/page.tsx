import { Card } from "@/components/ui/card";
import { MAIN_CARDS_DATA } from "@/constants/dummy.data";
import { GanttChartSquare } from "lucide-react";
import React from "react";

const DashBoard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {MAIN_CARDS_DATA.map((val, index) => (
          <Card key={index}>
            <div className="space-y-2">
              <p>{val.title}</p>
              <p>{val.rating}</p>
            </div>
            <GanttChartSquare />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
