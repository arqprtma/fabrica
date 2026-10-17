import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GalleryCard from "./GalleryCard";
import { gallery } from "./data";

export default function Gallery() {
  return (
    <section id="inspirasi" className="bg-[#FAF8F4] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9C7B43]">
              Moodboard
            </span>

            <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#17324D] sm:text-5xl">
              Inspirasi untuk koleksi berikutnya.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Referensi gaya dari Unsplash untuk membantu membayangkan karakter
              bahan dalam sebuah tampilan. Gambar merupakan inspirasi, bukan
              foto stok kain.
            </p>
          </div>
          <Link
            href="https://www.instagram.com/allmakind/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#17324D]/15 bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition hover:border-[#17324D]"
          >
            Ikuti @allmakind <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}