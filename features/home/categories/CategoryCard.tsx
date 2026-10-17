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
      className="group overflow-hidden rounded-[28px] border border-[#17324D]/10 bg-[#FAF8F4] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-72 overflow-hidden bg-[#E7E0D4]">
        <Image
          src={category.image}
          alt={`Inspirasi gaya berbahan ${category.name.toLowerCase()}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102638]/45 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#17324D] backdrop-blur">
          {category.name}
        </span>
      </div>

      <div className="flex items-end justify-between gap-4 p-6">
        <div className="max-w-xs">
          <h3 className="font-heading text-2xl font-medium text-[#17324D]">
            {category.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {category.description}
          </p>
        </div>

        <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#17324D]/15 text-[#17324D] transition-colors group-hover:border-[#17324D] group-hover:bg-[#17324D] group-hover:text-white">
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
        </span>
      </div>
    </Link>
  );
}