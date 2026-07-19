import ProductDetailPage from "@/features/katalog/ProductDetailPage";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  return <ProductDetailPage slug={slug} />;
}