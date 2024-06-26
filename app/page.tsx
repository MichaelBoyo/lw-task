import { GraphData } from "@/components/graph-data";
import { Card } from "@/components/ui/card";
import { MAIN_CARDS_DATA, SECONDARY_CARDS_DATA } from "@/constants/dummy.data";
import { GanttChartSquare } from "lucide-react";
import React from "react";

const DashBoard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {MAIN_CARDS_DATA.map((val, index) => (
          <Card key={index} className="p-4">
            <div className="space-y-2">
              <p>{val.title}</p>
              <p>{val.rating}</p>
            </div>
            <GanttChartSquare />
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {SECONDARY_CARDS_DATA.map((val, index) => (
          <Card key={index} className="p-4">
            <div className="space-y-2">
              <p>{val.title}</p>
              <p>{val.rating}</p>
            </div>
            <GanttChartSquare />
            <div>
              {val.data.map((subData, id) => (
                <Card key={id}>
                  <p>{subData.name}</p>
                </Card>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <GraphData />
    </div>
  );
};

export default DashBoard;
