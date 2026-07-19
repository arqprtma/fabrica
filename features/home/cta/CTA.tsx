import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-[#17324D] px-10 py-20 text-center text-white lg:px-24">
          {/* Decorative Blur */}
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#C8A96A]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              Let's Work Together
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-6xl">
              Ready to Find Your Perfect Fabric?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-200">
              Kami siap membantu Anda menemukan kain terbaik untuk butik,
              garment, UMKM, fashion brand, maupun kebutuhan produksi skala
              besar.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="https://wa.me/6281953437411"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#17324D] transition hover:scale-105"
              >
                <MessageCircle size={20} />
                Chat WhatsApp
              </Link>

              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-[#17324D]"
              >
                Browse Catalog
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}