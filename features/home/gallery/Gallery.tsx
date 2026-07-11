import Link from "next/link";
import GalleryCard from "./GalleryCard";
import { gallery } from "./data";

export default function Gallery() {
  return (
    <section className="bg-[#FAF8F4] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Lookbook
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#17324D]">
            Inspiration Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-500">
            Jelajahi koleksi kain premium dan berbagai inspirasi
            penggunaan kain untuk fashion, seragam, batik,
            interior, hingga kebutuhan garment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="rounded-full border px-8 py-4 font-semibold"
          >
            View All Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}