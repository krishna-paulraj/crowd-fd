"use client";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { FolderIcon } from "lucide-react";
import Image from "next/image";
import appScreen from "@/assets/images/app-screen.png";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 1260, fill: "hsl(var(--chart-2)" },
];

const dayData = [
  { browser: "safari", visitors: 20, fill: "hsl(285, 100%, 50%)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    theme: { light: "", dark: "dark" },
  },
} satisfies ChartConfig;

export const CampaignCard = () => {
  return (
    <div className="w-[288px] shadow-sm shadow-white/30 rounded-lg bg-[#1c1c24] flex flex-col items-center cursor-pointer">
      <Image
        src={appScreen}
        alt="App Screen"
        className="h-[158px] w-full object-cover object-top rounded-lg"
      />

      <div className="w-full font-epilogue font-medium text-[12px] text-[#808191] flex justify-start items-center gap-2 p-4">
        <FolderIcon className="h-5 w-auto" />
        <h1>Education</h1>
      </div>

      <div className="block w-full px-4">
        <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
          Tech for Seniors
        </h3>
        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
          Providing senior citizens with access to technology and training to
          improve their quality of life.
        </p>
      </div>

      <div className="w-full flex p-4 justify-between items-center">
        <div className="flex flex-col text-center">
          <ChartContainer
            config={chartConfig}
            className="min-h-20 mx-auto aspect-square max-h-[250px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={100}
              innerRadius={30}
              outerRadius={50}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[30, 30]}
              />
              <RadialBar dataKey="visitors" background />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-sm font-semibold"
                          >
                            $ {chartData[0].visitors.toLocaleString()}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <h1 className="text-sm">Raised of $6000</h1>
        </div>
        <div className="flex flex-col items-center">
          <ChartContainer
            config={chartConfig}
            className="min-h-20 mx-auto aspect-square max-h-[250px]"
          >
            <RadialBarChart
              data={dayData}
              endAngle={100}
              innerRadius={30}
              outerRadius={50}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[30, 30]}
              />
              <RadialBar dataKey="visitors" background />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-sm font-semibold"
                          >
                            20
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <h1 className="text-sm">Days Left</h1>
        </div>
      </div>
      <div className="flex items-center my-[20px] gap-[12px]">
        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
          by <span className="text-[#b2b3bd]">Owner</span>
        </p>
      </div>
    </div>
  );
};
