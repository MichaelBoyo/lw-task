import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Devices = () => {
  return (
    <Card>
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
  );
};
