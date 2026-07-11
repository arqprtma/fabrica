import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Product } from "./types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-72 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <span className="rounded-full bg-[#17324D]/10 px-3 py-1 text-sm font-medium text-[#17324D]">
          {product.category}
        </span>

        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-[#17324D]">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            {product.rating}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-green-600">
            Stock {product.stock}
          </span>

          <Link
            href={`/katalog/${product.id}`}
            className="flex items-center gap-2 font-semibold text-[#17324D]"
          >
            Detail

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}