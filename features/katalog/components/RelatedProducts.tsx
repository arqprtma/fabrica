import { Product } from "../types";
import ProductGrid from "./ProductGrid";

interface Props {
  currentProduct: Product;
  products: Product[];
}

export default function RelatedProducts({
  currentProduct,
  products,
}: Props) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.slug !== currentProduct.slug
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  console.log(currentProduct.category);

console.log(products);

  return (
    <section className="mt-28">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B78A52]">
          Recommendation
        </span>

        <h2 className="mt-3 text-4xl font-bold text-[#5A3825]">
          You May Also Like
        </h2>

        <p className="mt-3 max-w-2xl text-gray-500">
          Explore more premium fabrics from the same category.
        </p>
      </div>

      <ProductGrid products={relatedProducts} />
    </section>
  );
}