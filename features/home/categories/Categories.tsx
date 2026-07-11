import CategoryCard from "./CategoryCard";
import { categories } from "./data";

export default function Categories() {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Categories
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#17324D]">
            Browse Fabric Collections
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-500">
            Temukan berbagai pilihan kain premium untuk kebutuhan fashion,
            konveksi, butik, garment, maupun bisnis tekstil Anda.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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