import { GraphData } from "@/components/graph-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MAIN_CARDS_DATA, SECONDARY_CARDS_DATA } from "@/constants/dummy.data";
import {
  ArrowRight,
  BarChart2,
  GanttChartSquare,
  Info,
  Repeat,
} from "lucide-react";
import Image from "next/image";

const DashBoard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4 space-y-4">
          <SectionOne />
          <SectionTwo />
          <GraphData />
        </div>
        <div className="space-y-4">
          <Card className="bg-black text-white flex flex-col items-center space-y-4 py-6">
            <Image src="/Asset 3 1.png" height={300} width={100} alt="spiral" />

            <div className=" text-center">
              <p>Client Attendance Predictors</p>
              <p>Here to be of service</p>
            </div>

            <p>Coming Soon</p>
          </Card>
          <Card className="p-4">
            <div className="flex justify-between items-center">
              <p>Connected Devices</p>
              <div className="flex space-x-4">
                <Repeat />
                <Info />
              </div>
            </div>
            <p>choose a wearable device</p>

            <Image
              src="/apple-watch.png"
              height={400}
              width={600}
              alt="spiral"
            />
            <div className="flex">
              <div>
                <p>Apple Watches & 26 more devices</p>
                <p className="text-sm">
                  50% of your clients are connected to their device
                </p>
              </div>
              <Button>
                view all <ArrowRight />
              </Button>
            </div>
          </Card>

          <Card className="">
            <div className="border-b">
              <div className="flex justify-between items-center p-4">
                <p>Steps</p>
                <div className="flex space-x-4">
                  <Repeat />
                  <Info />
                </div>
              </div>
              <p className="text-sm p-4">
                27% client data usage was gathered this week
              </p>
            </div>
            <div className="flex p-4">
              <div>
                <p>Walking Exercise</p>
                <p>100,00,622 Steps</p>
                <p>Keep pushing them to reach their goals!</p>
              </div>
              <BarChart2 />
            </div>
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
