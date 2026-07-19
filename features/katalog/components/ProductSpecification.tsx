import {
  Palette,
  Ruler,
  PackageCheck,
  CheckCircle2,
  Shirt,
  Sparkles,
} from "lucide-react";

import { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductSpecification({
  product,
}: Props) {
  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold text-[#17324D]">
        Product Specification
      </h2>

      {/* Specification */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200">
        <div className="grid grid-cols-2 border-b p-5">
          <div className="flex items-center gap-3 font-medium">
            <CheckCircle2 size={18} />
            Composition
          </div>

          <div>{product.composition}</div>
        </div>

        <div className="grid grid-cols-2 border-b p-5">
          <div className="flex items-center gap-3 font-medium">
            <Ruler size={18} />
            Width
          </div>

          <div>{product.width}</div>
        </div>

        <div className="grid grid-cols-2 border-b p-5">
          <div className="flex items-center gap-3 font-medium">
            <PackageCheck size={18} />
            Stock
          </div>

          <div>{product.stock}</div>
        </div>

        <div className="grid grid-cols-2 p-5">
          <div className="flex items-center gap-3 font-medium">
            <Shirt size={18} />
            Minimum Order
          </div>

          <div>{product.moq} Meter</div>
        </div>
      </div>

      {/* Usage */}
      <div className="mt-12">
        <h3 className="flex items-center gap-2 text-2xl font-semibold">
          <Sparkles size={22} />
          Suitable For
        </h3>

        <div className="mt-5 flex flex-wrap gap-3">
          {product.usage.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#17324D]/10 px-4 py-2 text-sm font-medium text-[#17324D]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mt-12">
        <h3 className="flex items-center gap-2 text-2xl font-semibold">
          <Palette size={22} />
          Available Colors
        </h3>

        <div className="mt-5 flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <span
              key={color}
              className="rounded-full border border-gray-300 px-4 py-2"
            >
              {color}
            </span>
          ))}
        </div>
      </div>

      {/* Care */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">
          Care Instructions
        </h3>

        <ul className="mt-5 space-y-3">
          {product.care.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}