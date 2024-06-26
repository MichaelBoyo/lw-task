import { GraphData } from "@/components/graph-data";
import { Card } from "@/components/ui/card";
import { MAIN_CARDS_DATA, SECONDARY_CARDS_DATA } from "@/constants/dummy.data";
import { GanttChartSquare } from "lucide-react";
import Image from "next/image";
import React from "react";

const DashBoard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4 space-y-4">
          <SectionOne />
          <SectionTwo />
          <GraphData />
        </div>
        <div>
          <Card className="bg-black text-white flex flex-col items-center space-y-4 py-6">
            <Image src="/Asset 3 1.png" height={300} width={100} alt="spiral" />

            <div className=" text-center">
              <p>Client Attendance Predictors</p>
              <p>Here to be of service</p>
            </div>

            <p>Coming Soon</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

const SectionOne = () => {
  return (
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
  );
};

const SectionTwo = () => {
  return (
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
  );
};
