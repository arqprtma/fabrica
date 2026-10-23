import { notFound } from "next/navigation";
import { products } from "./data/products";
import Breadcrumb from "./components/Breadcrumb";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecification from "./components/ProductSpecification";
import RelatedProducts from "./components/RelatedProducts";

interface Props {
  slug: string;
}

export default function ProductDetailPage({ slug }: Props) {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb productName={product.name} />

        <div className="grid gap-16 lg:grid-cols-2">
          <ProductGallery
            key={product.slug}
            images={product.image}
            name={product.name}
          />

          <ProductInfo product={product} />
        </div>
        <div className="mt-2">
          <ProductSpecification product={product} />
                <RelatedProducts currentProduct={product} products={products} />

        </div>
      </div>
    </main>
  );
}
