import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 py-24">
      <SearchX
        size={56}
        className="text-gray-300"
      />

      <h3 className="mt-6 text-2xl font-semibold">
        Produk tidak ditemukan
      </h3>

      <p className="mt-2 text-gray-500">
        Coba gunakan kata kunci atau kategori lain.
      </p>
    </div>
  );
}