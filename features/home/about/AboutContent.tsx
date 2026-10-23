import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { about } from "./data";

const advantages = [
  "Fokus pada polyester, katun, dan rayon",
  "Diskusi kebutuhan langsung bersama Vichra",
  "Bantuan memilih bahan untuk rencana produksi",
];

export default function AboutContent() {
  return (
    <div className="max-w-xl py-6 lg:px-0">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#94633B]">
        Kenalan dengan sales Anda
      </span>

      <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#5A3825] sm:text-5xl">
        Halo, saya {about.name}.
      </h2>

      <p className="mt-3 text-base font-medium text-[#94633B] sm:text-lg">
        {about.role}
      </p>

      <p className="mt-7 text-base leading-8 text-gray-600">
        {about.description}
      </p>

      <div className="mt-10 grid gap-4">
        {advantages.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="shrink-0 text-[#94633B]" size={20} />

            <span className="text-sm text-gray-700 sm:text-base">{item}</span>
          </div>
        ))}
      </div>

      <Link
        href="https://wa.me/6281953437411?text=Halo%20Vichra%2C%20saya%20ingin%20bertanya%20tentang%20kain."
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex rounded-full bg-[#5A3825] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#765239]"
      >
        Kenalan lewat WhatsApp
      </Link>
    </div>
  );
}