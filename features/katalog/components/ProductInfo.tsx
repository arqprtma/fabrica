import { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div>
      <span className="rounded-full bg-[#5A3825]/10 px-4 py-2 text-sm font-medium text-[#5A3825]">
        {product.category}
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        {product.name}
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        {product.shortDescription}
      </p>

      <a
        href={`https://wa.me/6281953437411?text=${encodeURIComponent(`Halo Vichra, saya tertarik dengan ${product.name}. Bisa minta detail varian, harga, dan ketersediaannya?`)}`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex rounded-full bg-[#5A3825] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#765239]"
      >
        Tanya detail via WhatsApp
      </a>
    </div>
  );
}