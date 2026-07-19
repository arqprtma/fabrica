import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler, PackageCheck } from "lucide-react";

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
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-[#17324D]">
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {product.shortDescription}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <PackageCheck size={18} />
            <span>{product.composition}</span>
          </div>

          <div className="flex items-center gap-2">
            <Ruler size={18} />
            <span>{product.width}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              product.stock === "Ready Stock"
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {product.stock}
          </span>

          <Link
            href={`/katalog/${product.slug}`}
            className="flex items-center gap-2 font-medium text-[#17324D] transition group-hover:gap-3"
          >
            Detail
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}