import { ConnectedDevices } from "@/components/connected-devices";
import { Devices } from "@/components/devices";
import { GraphData } from "@/components/graph-data";
import { IconButton } from "@/components/icon-button";
import { Steps } from "@/components/steps";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { WalkingExercise } from "@/components/walking-exercise";
import { MAIN_CARDS_DATA, SECONDARY_CARDS_DATA } from "@/constants/dummy.data";
import { cn } from "@/lib/utils";
import {
  BarChart2,
  ChevronsRight,
  CircleHelp,
  Search,
  Triangle,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pacifico } from "./fonts";

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
          <Card className="bg-black text-white flex flex-col items-center space-y-4 py-6 min-h-[327px]">
            <Image src="/Asset 3 1.png" height={149} width={149} alt="spiral" />

            <div className=" text-center">
              <p className="font-bold">Client Attendance Predictors</p>
              <p className="italic">Here to be of service</p>
            </div>

            <p
              className={cn(
                pacifico.className,
                "rounded-full bg-[#75A1FF] p-2 px-4 "
              )}
            >
              Coming Soon
            </p>
          </Card>
          <ConnectedDevices />

          <Image src="/apple-watch.png" height={400} width={600} alt="spiral" />

          <Devices />

          <Steps />
          <WalkingExercise />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

const SectionOne = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {MAIN_CARDS_DATA.map((val, index) => (
        <Card key={index} className="p-4 space-y-1">
          <IconButton icon={Zap} />
          <div className="flex justify-between">
            <div className="">
              <p className="text-slate-500 text-sm">{val.title}</p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold">{val.rating}</p>
                <div className="text-[6.95px] rounded-lg bg-[#D2FFE6] flex items-center p-1 space-x-1  ">
                  <Triangle fill="black" size={4} />
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
    <div className="grid grid-cols-3 gap-3">
      {SECONDARY_CARDS_DATA.map((val, index) => (
        <Card key={index} className="p-4 ">
          <div className="flex justify-between">
            <p className="text-[#72777B] text-[14px]">{val.title}</p>
            <div
              className="p-2 rounded-md"
              style={{
                background: val.iconOneColor,
              }}
            >
              {val.iconOne}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-[24.66px] font-bold">{val.rating}</p>
            <div className="text-[9.49px] rounded-lg bg-[#ECFDF5] flex items-center p-1 space-x-1  ">
              <Triangle fill="black" size={6} />
              <p className="text-[#005E36]  font-semibold">{val.growth}</p>
            </div>
          </div>
          <p className="text-[#72777B] text-[13.28px]">{val.subTitle}</p>
          <div>
            <div className="flex justify-between">
              <p className="">0%</p>
              <p className="">{val.total.value}%</p>
            </div>

            <div className="bg-slate-200 h-1 rounded-lg">
              <div
                style={{
                  background: val.color,
                  width: `${val.total.value}%`,
                }}
                className="h-full  rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-2 py-2">
            {val.data.map((subData, id) => (
              <Card
                key={id}
                className="flex justify-between p-3 border-none bg-[#F8F7FF] items-center rounded-lg"
              >
                <div className="flex space-x-10">
                  <Avatar>
                    <AvatarImage src="/nav_user.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#494949]">
                      {subData.name}
                    </p>
                    <p className="text-[#757575] text-xs">{subData.time}</p>
                  </div>
                </div>
                {val.type === "icon" ? (
                  <Image
                    src="/icons/message.svg"
                    alt="message"
                    height={24}
                    width={24}
                    quality={100}
                  />
                ) : val.type === "text" ? (
                  <div className="p-1 px-2 bg-[#D2FFE6] rounded-md">
                    <p className="text-[#005E36] text-xs">View class</p>
                  </div>
                ) : (
                  <Checkbox
                    checked={id % 2 == 0}
                    className="data-[state=checked]:bg-[#4AD79B] border-slate-300 data-[state=checked]:border-[#4AD79B] rounded-md data-[state=checked]:border border-2 "
                  />
                )}
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Button className="bg-[#EFEEFF] text-[#695CFB]">
              View More <ChevronsRight />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
