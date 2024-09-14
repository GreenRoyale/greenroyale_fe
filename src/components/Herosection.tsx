import Image from "next/image";
import Link from "next/link";

function Herosection() {
  return (
    <>
      <div className="w-full relative">
        <div className="w-full h-[85%]">
          <Image
            src={"/hero.jpeg"}
            width={1000}
            height={1000}
            alt="hero"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center absolute top-0 right-0 bottom-0 left-0">
          <h1 className="text-[114px] text-white font-extralight w-5/6 leading-tight text-center">
            Transforming Waste into Value
          </h1>
          <p className="text-white text-2xl w-4/6 text-center">
            Recycle with purpose. Earn rewards, save the planet, and make a
            difference—one item at a time.
          </p>
          <div className="flex gap-4">
            <Link
              href={"/login"}
              className="p-4 border border-white text-white rounded-lg"
            >
              {" "}
              Sign In{" "}
            </Link>

            <Link
              href={"/signup"}
              className="bg-[#6FAE4D] p-4 text-white rounded-lg"
            >
              {" "}
              Get Started{" "}
            </Link>
          </div>
        </div>
      </div>
      <marquee behavior="" direction="left">
        <div className="flex gap-32 py-10">
          <p>Recycling</p>

          <p>Environmental</p>

          <p>Eco-friendly</p>
          <p>rewards</p>
          <p>Waste</p>
        </div>
      </marquee>
    </>
  );
}

export default Herosection;
