import Image from "next/image";

function SkillsSection() {
  return (
    <>
      <div className="md:flex gap-4">
        <div className="md:w-2/4 flex flex-col gap-4">
          <p className="text-[#6FAE4D] font-medium">Skills</p>
          <h1 className="md:text-[50px] text-3xl leading-normal">
            Getting A Greener Future Safe Environment
          </h1>
          <p className="text-base">
            Competently cultivate worldwide e-tailers through principle-centered
            value professionally engineer high-payoff deliverables without
            exceptional processes. Rapidiously network cost effective vortals
          </p>
          <div className="flex flex-wrap gap-6 md:w-3/4">
            <div className="bg-[#F3F3F3] md:p-4 p-2">
              <p className="text-sm">Safe Environment </p>
            </div>
            <div className="bg-[#F3F3F3] md:p-4 p-2">
              <p className="text-sm">Reward Recycling </p>
            </div>
            <div className="bg-[#F3F3F3] md:p-4 p-2">
              <p className="text-sm">Clean Surroundings </p>
            </div>
            <div className="bg-[#F3F3F3] md:p-4 p-2">
              <p className="text-sm">Economic Benefits </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 py-4">
          <Image
            src={"/ft.webp"}
            alt="img"
            className="w-full h-full object-cover md:rounded-[180px] rounded-3xl"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}

export default SkillsSection;
