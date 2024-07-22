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
import { daysLeft } from "@/lib/utils";

interface CampaignCardProps {
  campaign: {
    title: string;
    description: string;
    category: string;
    ownedBy: string;
    endDate: Date;
    fundingGoal: number;
    currentFunding: number;
  };
}

const chartData = [
  { browser: "safari", visitors: 1260, fill: "hsl(var(--chart-2))" },
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

const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const {
    title,
    description,
    category,
    ownedBy,
    endDate,
    fundingGoal,
    currentFunding,
  } = campaign;

  const remainingDays = daysLeft(endDate);
  return (
    <div className="flex w-[288px] cursor-pointer flex-col items-center rounded-xl border border-[#333333] bg-[#1E1E1E] shadow-lg shadow-[rgba(0,0,0,0.4)]">
      <Image
        loading="lazy"
        src={appScreen}
        alt="App Screen"
        className="h-[158px] w-full rounded-lg object-cover object-top"
      />

      <div className="font-epilogue flex w-full items-center justify-start gap-2 p-4 text-[12px] font-medium text-[#808191] text-purple-300">
        <FolderIcon className="h-5 w-auto" />
        <h1>{category}</h1>
      </div>

      <div className="block w-full px-4">
        <h3 className="font-epilogue truncate text-left text-[16px] font-semibold leading-[26px] text-white">
          {title}
        </h3>
        <p className="font-epilogue mt-[5px] truncate text-left font-normal leading-[18px] text-[#808191]">
          {description}
        </p>
      </div>

      <div className="flex w-full items-center justify-between p-4">
        <div className="flex flex-col text-center">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] min-h-20"
          >
            <RadialBarChart
              data={chartData}
              endAngle={(Number(currentFunding) * 360) / fundingGoal}
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
                            ${formatNumber(currentFunding)}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <h1 className="text-sm">Raised of ${formatNumber(fundingGoal)}</h1>
        </div>
        <div className="flex flex-col items-center">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] min-h-20"
          >
            <RadialBarChart
              data={dayData}
              endAngle={(Number(remainingDays) * 360) / 100}
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
                            {remainingDays}
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
      <div className="my-[20px] flex items-center gap-[12px]">
        <p className="font-epilogue flex-1 truncate text-[12px] font-normal text-[#808191]">
          by <span className="text-[#b2b3bd]">{ownedBy}</span>
        </p>
      </div>
    </div>
  );
};
