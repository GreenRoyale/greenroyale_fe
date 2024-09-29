import Image from "next/image";
import Link from "next/link";

function Herosection() {
  return (
    <>
      <div className="w-full relative">
        <div className="w-full md:h-[85%] h-screen">
          <Image
            src={"/hero.jpeg"}
            width={1000}
            height={1000}
            alt="hero"
            className="w-full h-full object-cover md:rounded-3xl rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center absolute top-0 right-0 bottom-0 left-0">
          <h1 className="md:text-[114px] text-[30px] text-white font-extralight w-5/6 leading-tight text-center">
            Transforming Waste into Value
          </h1>
          <p className="text-white md:text-2xl text-[10px] w-4/6 text-center">
            Recycle with purpose. Earn rewards, save the planet, and make a
            difference—one item at a time.
          </p>
          <div className="flex gap-4">
            <Link
              href={"/login"}
              className="md:p-4 p-2 md:text-base text-xs border border-white text-white rounded-lg"
            >
              {" "}
              Sign In{" "}
            </Link>

            <Link
              href={"/signup"}
              className="bg-[#6FAE4D] md:p-4 p-2 md:text-base text-xs text-white rounded-lg"
            >
              {" "}
              Get Started{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex md:gap-32 gap-6 py-10">
          <p className="text-[10px]">Recycling</p>

          <p className="text-[10px]">Environmental</p>

          <p className="text-[10px]">Eco-friendly</p>
          <p className="text-[10px]">rewards</p>
          <p className="text-[10px]">Waste</p>
        </div>
      </div>
    </>
  );
}

export default Herosection;
