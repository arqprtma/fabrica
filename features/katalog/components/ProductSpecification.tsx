import Link from "next/link";
import { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductSpecification({
  product,
}: Props) {
  return (
    <section className="mt-20 rounded-[28px] bg-[#F7F1E8] p-7 sm:p-10">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#94633B]">
        Informasi produk
      </span>
      <h2 className="mt-3 font-heading text-3xl font-medium text-[#5A3825]">
        Perlu detail {product.category.toLowerCase()} ini?
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        Komposisi, lebar, pilihan warna, minimum pembelian, harga, dan stok
        dapat berbeda menurut varian. Hubungi Vichra untuk memastikan detail
        terbaru sebelum memesan.
      </p>
      <Link
        href={`https://wa.me/6281953437411?text=${encodeURIComponent(`Halo Vichra, saya ingin mengetahui detail ${product.name}.`)}`}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-full bg-[#5A3825] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#765239]"
      >
        Tanyakan ke Vichra
      </Link>
    </section>
  );
}