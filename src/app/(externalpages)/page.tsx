import Featuresection from "@/components/Featuresection";
import Herosection from "@/components/Herosection";
import ServicesSection from "@/components/Servcicessection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Featuresection />
      <ServicesSection />
    </div>
  );
}
