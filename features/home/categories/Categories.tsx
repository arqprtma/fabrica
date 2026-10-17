import CategoryCard from "./CategoryCard";
import { categories } from "./data";

export default function Categories() {
  return (
    <section id="kategori" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9C7B43]">
              Pilihan material
            </span>

            <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#17324D] sm:text-5xl">
              Tiga bahan, banyak kemungkinan.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-600">
              Mulai dari bahan yang nyaman untuk sehari-hari hingga pilihan
              dengan karakter jatuh yang elegan. Pilih kategori, lalu diskusikan
              detailnya bersama Vichra.
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