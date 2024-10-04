// import React from 'react'

import { CirclePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const RewardModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="rounded-md border border-white bg-[#6FAE4D] flex items-center text-white gap-4 text-base w-fit h-12">
          Redeem Points
        </Button>
      </DialogTrigger>
      <div>
        <DialogContent className="w-[600px] min-w-[600px]">
          <DialogHeader className="mb-5">
            <DialogTitle>
              <div className="flex items-center justify-between">
                <h3 className="text-[#9095A0] font-semibold">
                  Recycle / Log Recycle
                </h3>
              </div>
            </DialogTitle>
          </DialogHeader>

          <section className="space-y-8">
            <h1 className="font-semibold text-2xl mb-8">Redeem your points</h1>

            <div className="w-full h-[400px] border border-dashed"></div>

            <Button className="space-x-4 bg-[#6FAE4D] text-base">
              <CirclePlusIcon />
              <span>Add</span>
            </Button>
          </section>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default RewardModal;
