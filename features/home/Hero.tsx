import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F1E8]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">
        <HeroContent />
       
        <HeroImage />
      </div>
    </section>
  );
}