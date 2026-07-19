import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative h-[650px] w-full max-w-lg overflow-hidden rounded-[40px] shadow-2xl">
      <Image
        src="/images/hero/fabrica-hero.webp"
        alt="Premium Fabric Collection"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}