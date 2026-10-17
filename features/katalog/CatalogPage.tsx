"use client";

import { useMemo, useState } from "react";
import { products } from "./data/products";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import SortDropdown from "./components/SortDropdown";
import EmptyState from "./components/EmptyState";

interface CatalogPageProps {
  initialCategory?: string;
}

export default function CatalogPage({
  initialCategory = "All",
}: CatalogPageProps) {
  const [sortBy, setSortBy] = useState("newest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(() =>
    products.some((product) => product.category === initialCategory)
      ? initialCategory
      : "All",
  );

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    result = result.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        break;
    }

    return result;
  }, [searchValue, selectedCategory, sortBy]);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FAF8F4] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9C7B43]">
            Vichra · allmakind
          </span>

          <h1 className="mt-5 font-heading text-4xl font-medium tracking-[-0.035em] text-[#17324D] sm:text-5xl">
            Koleksi kain pilihan
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Jelajahi polyester, katun, dan rayon. Hubungi Vichra untuk
            menanyakan detail varian, harga, dan ketersediaan terbaru.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          <SearchBar value={searchValue} onChange={setSearchValue} />

          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              Menampilkan <strong>{filteredProducts.length}</strong> produk
            </p>

            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          {filteredProducts.length === 0 ? (
            <EmptyState />
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </section>
    </main>
  );
}
