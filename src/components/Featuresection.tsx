import Image from "next/image";
import Link from "next/link";

function Featuresection() {
  return (
    <>
      <div className="flex items-center gap-8">
        <div className="w-1/2">
          <Image
            src={"/ft.webp"}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-3xl"
            alt="fet"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-4 items-start">
          <p className="text-[10px] text-[#6FAE4D] capitalize">
            About GreenRoyale
          </p>
          <h1 className="text-[50px]">
            GreenRoyale Provide Recycling services with rewards{" "}
          </h1>
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
              <h1 className="font-bold text-[#2F6D57]">Economic Benefits</h1>
              <p className="text-[xs] text-gray-500">
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
              <p className="text-[xs] text-gray-500">
                Alternative innovation after ethical to network environmental
                whiteboard transparent growth natural done
              </p>
            </div>
          </div>{" "}
          <Link
            href={"/signup"}
            className="bg-[#6FAE4D] p-4 text-white rounded-lg"
          >
            {" "}
            More{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Featuresection;
