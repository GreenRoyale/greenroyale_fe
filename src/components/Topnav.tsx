import { Bell, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Topnav() {
  return (
    <>
      <div className="bg-[#2F6D57] w-full p-8">
        <div className="w-11/12 mx-auto">
          <div className="py-4 border-b border-[#51AD84] flex justify-between">
            <div className="flex gap-16 items-center">
              <div className="w-80">
                <Image
                  src={"/logowhite.png"}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  alt="logo"
                />
              </div>
              <div className="flex gap-8 ">
                <Link href={"/dashboard"} className="text-sm text-white">
                  {" "}
                  Overview{" "}
                </Link>
                <Link href={"/recycle"} className="text-sm text-white">
                  {" "}
                  Recycle{" "}
                </Link>
                <Link href={"/rewards"} className="text-sm text-white">
                  {" "}
                  Rewards{" "}
                </Link>
                <Link href={"/habit-tracking"} className="text-sm text-white">
                  {" "}
                  Habit Tracking{" "}
                </Link>
              </div>
            </div>{" "}
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#ffffff10] flex justify-center items-center rounded-full">
                <HelpCircle className="text-white" />
              </div>
              <div className="w-14 h-14 bg-[#ffffff10] flex justify-center items-center rounded-full">
                <Bell className="text-white" />
              </div>
              <div className="flex gap-4">
                <div className="w-24">
                  <Image
                    src={"/logo.png"}
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-white text-lg">CompassTech</h1>
                  <p className="text-xs text-[#A2CA72]">test@greenroyale.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Topnav;
