import { OverviewChart } from "@/components/OverviewChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GiftIcon, TrendingUp } from "lucide-react";

function Dashboard() {
  return (
    <div>
      <div className="w-full bg-[#2F6D57] ">
        <div className=" w-11/12 mx-auto px-8 pb-8 flex flex-col gap-2 ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl text-white">Overview</h1>
              <p className="text-sm text-[#A2CA72]">
                Stay on top your app&apos;s performance with real-time insights.
              </p>
            </div>{" "}
            <div>
              <Tabs defaultValue="account" className="">
                <TabsList>
                  <TabsTrigger value="account">Last 7 days</TabsTrigger>
                  <TabsTrigger value="password">Last 30 Days</TabsTrigger>
                  <TabsTrigger value="password 2">Last 90 Days</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>{" "}
          <div className="grid grid-cols-4 py-4 gap-6">
            <div className="p-8 flex flex-col gap-1 rounded-2xl rounded-2xl border border-[#A2CA72] bg-[#ffffff10]">
              <div className="flex justify-between">
                <GiftIcon className="text-white" />
                <div className="flex gap-1 items-center">
                  <TrendingUp className="text-[#00CC5F] text-[12px]" />
                  <p className="text-white text-[12px]">16.5% + 3k today</p>
                </div>
              </div>
              <h1 className="text-white text-2xl">54,034pts</h1>
              <p className="text-white text-md">Total Rewards Point</p>
            </div>
            <div className="p-8 flex flex-col gap-1 rounded-2xl rounded-2xl border border-[#A2CA72] bg-[#ffffff10]">
              <div className="flex justify-between">
                <GiftIcon className="text-white" />
                <div className="flex gap-1 items-center">
                  <TrendingUp className="text-[#00CC5F] text-[12px]" />
                  <p className="text-white text-[12px]">16.5% + 3k today</p>
                </div>
              </div>
              <h1 className="text-white text-2xl">54,034pts</h1>
              <p className="text-white text-md">Total Rewards Point</p>
            </div>
            <div className="p-8 flex flex-col gap-1 rounded-2xl rounded-2xl border border-[#A2CA72] bg-[#ffffff10]">
              <div className="flex justify-between">
                <GiftIcon className="text-white" />
                <div className="flex gap-1 items-center">
                  <TrendingUp className="text-[#00CC5F] text-[12px]" />
                  <p className="text-white text-[12px]">16.5% + 3k today</p>
                </div>
              </div>
              <h1 className="text-white text-2xl">54,034pts</h1>
              <p className="text-white text-md">Total Rewards Point</p>
            </div>
            <div className="p-8 flex flex-col gap-1 rounded-2xl rounded-2xl border border-[#A2CA72] bg-[#ffffff10]">
              <div className="flex justify-between">
                <GiftIcon className="text-white" />
                <div className="flex gap-1 items-center">
                  <TrendingUp className="text-[#00CC5F] text-[12px]" />
                  <p className="text-white text-[12px]">16.5% + 3k today</p>
                </div>
              </div>
              <h1 className="text-white text-2xl">54,034pts</h1>
              <p className="text-white text-md">Total Rewards Point</p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-11/12 mx-auto py-10">
        <div className="w-7/12 p-8 border border-gray-300 rounded-lg">
          <OverviewChart />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
