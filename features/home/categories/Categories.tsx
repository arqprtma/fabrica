import CategoryCard from "./CategoryCard";
import { categories } from "./data";

export default function Categories() {
  return (
    <section id="kategori" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#94633B]">
              Koleksi kain
            </span>

            <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#5A3825] sm:text-5xl">
              Pilihan kain untuk setiap koleksi.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-600">
              Jelajahi koleksi kain dan pilihan warna yang tersedia. Pilih
              koleksi untuk melihat detailnya di katalog.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}