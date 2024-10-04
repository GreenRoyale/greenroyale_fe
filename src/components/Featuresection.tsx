import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Featuresection() {
  return (
    <>
      <div className="md:flex items-center gap-8 mt-12">
        <div className="md:w-1/2 py-4 h-[40%]">
          <Image
            src={"/ft.webp"}
            width={1000}
            height={1000}
            className="w-full h-[40%] object-cover rounded-3xl"
            alt="fet"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4 items-start">
          <p className="text-base font-medium text-[#6FAE4D] capitalize">
            About GreenRoyale
          </p>
          <h1 className="md:text-[50px] text-3xl leading-normal">
            GreenRoyale Provide Recycling services with rewards{" "}
          </h1>
          <div className="flex gap-4">
            <div className="w-[40px] h-[40%]">
              <Image
                src={"/abt.png"}
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
                alt="fet"
              />
            </div>
            <div>
              <h1 className="font-bold text-[#2F6D57]">Economic Benefits</h1>
              <p className="text-base text-gray-500">
                Alternative innovation after ethical to network environmental
                whiteboard transparent growth natural done
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-4">
            <div className="w-[40px] h-[40px]">
              <Image
                src={"/abt.png"}
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
                alt="fet"
              />
            </div>
            <div>
              <h1 className="font-bold text-[#2F6D57]">Safe Environment</h1>
              <p className="text-base text-gray-500">
                Alternative innovation after ethical to network environmental
                whiteboard transparent growth natural done
              </p>
            </div>
          </div>{" "}
          <Button variant={"link"} className="px-8 bg-[#6FAE4D]">
            <Link
              href={"/signup"}
              className="md:p-4 p-2 lg:px-4 md:text-base text-[10px] text-white rounded-lg"
            >
              {" "}
              More{" "}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Featuresection;
