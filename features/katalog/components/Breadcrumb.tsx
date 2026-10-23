import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  productName: string;
}

export default function Breadcrumb({ productName }: Props) {
  return (
    <nav className="mb-10 flex items-center gap-2 text-sm text-gray-500">
      <Link href="/" className="hover:text-[#5A3825]">
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href="/katalog"
        className="hover:text-[#5A3825]"
      >
        Katalog
      </Link>

      <ChevronRight size={16} />

      <span className="font-medium text-[#5A3825]">
        {productName}
      </span>
    </nav>
  );
}