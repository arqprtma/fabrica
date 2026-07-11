import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "./types";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/katalog?kategori=${category.name}`}
      className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-bold text-[#17324D]">
            {category.name}
          </h3>

          <p className="mt-2 text-gray-500">
            {category.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
            {category.totalProducts} Produk
          </span>

          <ArrowRight
            className="transition-transform duration-300 group-hover:translate-x-2"
            size={20}
          />
        </div>
      </div>
    </Link>
  );
}