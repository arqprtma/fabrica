import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={product.image[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-[#5A3825]">
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-[#5A3825]/10 pt-4">
          <span className="text-xs text-gray-500">Tanya varian & ketersediaan</span>
          <Link
            href={`/katalog/${product.slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#5A3825] transition group-hover:gap-3"
          >
            Selengkapnya
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}