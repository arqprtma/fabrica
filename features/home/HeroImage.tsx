import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-[540px]">
      <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#C8A96A]/40 sm:-right-8 sm:-top-8 sm:h-48 sm:w-48" />
      <div className="relative h-[440px] overflow-hidden rounded-[180px_180px_28px_28px] bg-[#E7E0D4] shadow-2xl shadow-[#17324D]/15 sm:h-[600px]">
        <Image
          src="/images/hero/hero.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 540px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102638]/60 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9C7B43]">
            Pilihan bahan
          </p>
          <p className="mt-1 font-heading text-lg font-medium text-[#17324D] sm:text-xl">
            Dari ide, jadi koleksi.
          </p>
        </div>
      </div>
    </div>
  );
}