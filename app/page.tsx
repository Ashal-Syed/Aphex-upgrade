import "./globals.css";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import PDC_Card from "@/components/PDC_Card/PDC_Card";
import Services_Component from "@/components/Services_Component/Services_Component";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <PDC_Card />
      <Services_Component />
    </div>
  );
}
