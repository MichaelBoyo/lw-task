import { GraphData } from "@/components/graph-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MAIN_CARDS_DATA, SECONDARY_CARDS_DATA } from "@/constants/dummy.data";
import {
  ArrowRight,
  BarChart2,
  ChevronsRight,
  CircleHelp,
  GanttChartSquare,
  Info,
  MessageCircle,
  Repeat,
  Search,
  Triangle,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashBoard = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="bg-white flex justify-between items-center p-4">
        <div>
          <p className="font-bold text-[16px]">Good Evening</p>
          <p className="text-xs text-slate-600">Monday 20 Sep, 2023</p>
        </div>
        <div className="flex items-center space-x-10">
          <div className="relative">
            <Search className="absolute top-[13px] left-2" size={14} />
            <Input
              placeholder="Search for clients & classes"
              className="pl-8"
            />
          </div>
          <CircleHelp size={20} />
        </div>
      </div>
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
        <Card key={index} className="p-4 space-y-2">
          <Button
            size="icon"
            className="bg-slate-100 hover:bg-slate-100 cursor-text"
          >
            <Zap color="black" />
          </Button>
          <div className="flex justify-between">
            <div className="space-y-2">
              <p className="text-slate-500 text-sm">{val.title}</p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold">{val.rating}</p>
                <div className="text-xs rounded-lg bg-[#D2FFE6] flex items-center p-1 space-x-1  ">
                  <Triangle fill="black" size={6} />
                  <p className="text-[#005E36]  font-semibold">{val.growth}</p>
                </div>
              </div>
            </div>
            <Button
              size="icon"
              style={{
                background: val.color,
              }}
            >
              <BarChart2 strokeWidth={3} />
            </Button>
          </div>
          <div>
            <p className=" text-right">40%</p>

            <div className="bg-slate-200 h-1 rounded-lg">
              <div
                style={{
                  background: val.color,
                }}
                className="h-full w-1/3 rounded-lg"
              />
            </div>
          </div>
          {val.sub ? (
            <div className="flex justify-between items-center">
              <p className="text-slate-500">{val.sub}</p>
              <Link href="/" className="text-[#008EEF] flex">
                View More
                <ChevronsRight />
              </Link>
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {SECONDARY_CARDS_DATA.map((val, index) => (
        <Card key={index} className="p-4 space-y-2">
          <div className="space-y-2">
            <p>{val.title}</p>
            <p>{val.rating}</p>
          </div>
          <val.icon />
          <div className="space-y-2">
            {val.data.map((subData, id) => (
              <Card
                key={id}
                className="flex justify-between p-4 border-none bg-[#F8F7FF] items-center rounded-lg"
              >
                <div className="flex space-x-10">
                  <Avatar>
                    <AvatarImage src="/nav_user.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{subData.name}</p>
                    <p>{subData.time}</p>
                  </div>
                </div>
                <Button size="icon" className="rounded-full">
                  <MessageCircle />
                </Button>
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Button>
              View More <ChevronsRight />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
