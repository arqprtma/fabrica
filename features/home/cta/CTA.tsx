import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function CTA() {
  return (
    <section id="kontak" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#17324D] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-24">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#C8A96A]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D8B8] backdrop-blur">
              Mulai percakapan
            </span>

            <h2 className="mt-7 font-heading text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Sedang mencari bahan untuk koleksi baru?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Ceritakan model, kebutuhan, dan rencana produksi Anda. Vichra
              siap membantu memulai diskusi pilihan kain dari allmakind.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://wa.me/6281953437411?text=Halo%20Vichra%2C%20saya%20ingin%20konsultasi%20kebutuhan%20kain."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9BD83] px-7 py-4 text-sm font-semibold text-[#17324D] transition hover:bg-[#E7D1A5]"
              >
                <MessageCircle size={20} />
                Chat Vichra di WhatsApp
              </Link>

              <Link
                href="https://www.instagram.com/allmakind/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition hover:bg-white hover:text-[#17324D]"
              >
                <FaInstagram size={18} />
                Kunjungi Instagram
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}