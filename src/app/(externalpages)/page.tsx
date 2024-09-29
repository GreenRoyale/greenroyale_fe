import Featuresection from "@/components/Featuresection";
import Herosection from "@/components/Herosection";
import ServicesSection from "@/components/Servcicessection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Featuresection />
      <ServicesSection />
      <SkillsSection />
    </div>
  );
}
