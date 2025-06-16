import Hero from "@/components/Hero";
import "./globals.css";
import PDC_Card from "@/components/PDC_Card/PDC_Card";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <PDC_Card />
    </div>
  );
}
