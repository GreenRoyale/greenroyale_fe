import Leaderboard from "@/components/leaderboard";
import { DataTable } from "@/components/recycle-table/data-table";
import RewardModal from "@/components/reward-modal";
import { rewardColumns } from "@/components/reward-table/column";
import { Button } from "@/components/ui/button";
import { DownloadIcon, SearchIcon } from "lucide-react";

const page = () => {
  return (
    <div>
      <header className="bg-[#2F6D57] curved__header">
        <div className=" text-white boxed__container">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-semibold">Rewards</h2>
              <p className="text-dashboardGreen100">
                Stay on top your app&apos;s performance with real-time insights.
              </p>
            </div>
            <div>
              <div className="flex justify-end">
                <p className="text-dashboardGreen100">Total rewards</p>
              </div>
              <h1 className="text-[68px] font-semibold">876,234.00pts</h1>
            </div>
          </div>

          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-2 border w-[392px] h-12 rounded-md px-4">
              <SearchIcon id="search" color="#fff" />
              <input
                type="text"
                placeholder="Search"
                className="outline-0 border-none w-full text-black h-full bg-transparent"
              />
            </div>
            <div className="flex items-center gap-8">
              <Button className="border border-white bg-[#6FAE4D] rounded-[4px] text-base h-12 flex gap-4 items-center px-4 w-fit">
                <DownloadIcon />
                <span>Export</span>
              </Button>
              <RewardModal />
            </div>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-12 boxed__container py-24">
        <div className="w-full col-start-1 col-end-8 mx-auto">
          <DataTable columns={rewardColumns} data={[]} />
        </div>
        <div className="col-start-9 col-end-13 space-y-4">
          <div>
            <h2 className="font-semibold text-2xl mb-4">Leaderboard 🏆</h2>
          </div>
          <Leaderboard />
        </div>
      </main>
    </div>
  );
};

export default page;
