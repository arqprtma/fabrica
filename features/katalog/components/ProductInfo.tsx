import { CheckCircle2, Ruler, PackageCheck } from "lucide-react";
import { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div>
      <span className="rounded-full bg-[#17324D]/10 px-4 py-2 text-sm font-medium text-[#17324D]">
        {product.category}
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        {product.name}
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        {product.shortDescription}
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <PackageCheck className="text-green-600" />
          {product.stock}
        </div>

        <div className="flex items-center gap-3">
          <Ruler />
          {product.width}
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 />
          {product.composition}
        </div>
      </div>

      <a
        href={`https://wa.me/6281953437411?text=Halo, saya tertarik dengan ${product.name}`}
        target="_blank"
        className="mt-10 inline-flex rounded-2xl bg-[#17324D] px-8 py-4 font-semibold text-white transition hover:bg-[#24486d]"
      >
        Chat via WhatsApp
      </a>
    </div>
  );
}