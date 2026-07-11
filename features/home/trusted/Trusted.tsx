import { brands } from "@/data/brands";
import BrandLogo from "./BrandLogo";

export default function Trusted() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Trusted by 1,000+ Customers
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <BrandLogo key={brand} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}