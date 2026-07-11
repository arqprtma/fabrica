import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "./data";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
              Featured
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#17324D]">
              Featured Collection
            </h2>

            <p className="mt-6 max-w-2xl text-gray-500">
              Produk pilihan dengan kualitas terbaik yang paling banyak
              diminati pelanggan.
            </p>
          </div>

          <Link
            href="/katalog"
            className="hidden rounded-full border px-6 py-3 font-semibold lg:block"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}