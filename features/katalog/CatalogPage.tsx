"use client";

import { useMemo, useState } from "react";
import { products } from "./data/products";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import SortDropdown from "./components/SortDropdown";
import EmptyState from "./components/EmptyState";

export default function CatalogPage() {
  const [sortBy, setSortBy] = useState("newest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      <section className="bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Collection
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#17324D]">
            Premium Fabric Collection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Temukan berbagai pilihan kain berkualitas tinggi untuk kebutuhan
            fashion, konveksi, interior, maupun bisnis Anda.
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
