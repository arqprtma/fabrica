import Link from "next/link";
import HeroStats from "./HeroStats";
import { products } from "@/features/katalog/data/products";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#B78A52]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5A3825]">
        <span className="h-2 w-2 rounded-full bg-[#B78A52]" />
        Sales tekstil · allmakind
      </span>

      <h1 className="mt-7 max-w-2xl font-heading text-5xl font-medium leading-[1.08] tracking-[-0.04em] text-[#5A3825] sm:text-6xl lg:text-7xl">
        Kain pilihan untuk cerita brand Anda.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
        Jelajahi berbagai koleksi kain Vichra — sales tekstil allmakind yang
        siap membantu Anda menemukan pilihan warna dan detail untuk kebutuhan
        koleksi maupun produksi.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {products.slice(0, 3).map((product) => (
          <span
            key={product.id}
            className="rounded-full border border-[#5A3825]/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#5A3825]"
          >
            {product.name}
          </span>
        ))}
      </div>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="https://wa.me/6281953437411?text=Halo%20Vichra%2C%20saya%20ingin%20konsultasi%20pilihan%20kain."
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#5A3825] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#5A3825]/15 transition hover:-translate-y-0.5 hover:bg-[#765239]"
        >
          Konsultasi via WhatsApp
        </Link>

        <Link
          href="/katalog"
          className="rounded-full border border-[#5A3825]/20 bg-white/60 px-7 py-4 text-center text-sm font-semibold text-[#5A3825] transition hover:border-[#5A3825] hover:bg-white"
        >
          Jelajahi koleksi
        </Link>
      </div>

      <HeroStats />
    </div>
  );
}