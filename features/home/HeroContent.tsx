import Link from "next/link";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex rounded-full bg-[#C8A96A]/10 px-4 py-2 text-sm font-semibold text-[#17324D]">
        Premium Fabric Supplier
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight text-[#17324D] lg:text-7xl">
        Premium Fabrics for Your Fashion Business
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Helping boutiques, garment factories, fashion designers,
        and tailors find premium-quality fabrics with trusted
        service and competitive prices.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/katalog"
          className="rounded-full bg-[#17324D] px-8 py-4 text-center font-semibold text-white transition hover:scale-105"
        >
          Explore Collection
        </Link>

        <Link
          href="https://wa.me/628123456789"
          target="_blank"
          className="rounded-full border border-[#17324D] px-8 py-4 text-center font-semibold text-[#17324D] transition hover:bg-[#17324D] hover:text-white"
        >
          Chat WhatsApp
        </Link>
      </div>

      <HeroStats />
    </div>
  );
}