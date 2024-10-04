"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 224, mobile: 190 },
  { month: "August", desktop: 314, mobile: 240 },
  { month: "September", desktop: 414, mobile: 340 },
  { month: "October", desktop: 254, mobile: 110 },
  { month: "November", desktop: 294, mobile: 100 },
  { month: "December", desktop: 274, mobile: 90 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function OverviewChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full text-base font-medium"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          domain={[0, "auto"]} // Setting Y-axis range to start from 0 and adjust automatically
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="#A2CA72" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
