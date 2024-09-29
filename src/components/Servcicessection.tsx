import Image from "next/image";

function ServicesSection() {
  return (
    <>
      <div className="py-20">
        <div className="py-10">
          <p className="text-[10px] text-[#6FAE4D] capitalize">
            About GreenRoyale
          </p>
          <h1 className="text-[50px] w-4/6">
            GreenRoyale Provide Recycling services with rewards
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="p-10 bg-gray-100 rounded-3xl flex flex-col gap-4">
            <h1 className="text-xl ">Safe Environment</h1>
            <p className="text-sm text-gray-500">
              Alternative innovation after ethical to network environmental
              whiteboard transparent growth natural done
            </p>
            <div className="h-56">
              <Image
                src={"/ft.webp"}
                width={1000}
                height={1000}
                alt="img"
                className="w-fill h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="p-10 bg-gray-100 rounded-3xl flex flex-col gap-4">
            <h1 className="text-xl ">Safe Environment</h1>
            <p className="text-sm text-gray-500">
              Alternative innovation after ethical to network environmental
              whiteboard transparent growth natural done
            </p>
            <div className="h-56">
              <Image
                src={"/ft.webp"}
                width={1000}
                height={1000}
                alt="img"
                className="w-fill h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="p-10 bg-gray-100 rounded-3xl flex flex-col gap-4">
            <h1 className="text-xl ">Safe Environment</h1>
            <p className="text-sm text-gray-500">
              Alternative innovation after ethical to network environmental
              whiteboard transparent growth natural done
            </p>
            <div className="h-56">
              <Image
                src={"/ft.webp"}
                width={1000}
                height={1000}
                alt="img"
                className="w-fill h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default ServicesSection;
