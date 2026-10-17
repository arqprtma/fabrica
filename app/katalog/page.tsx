import CatalogPage from "@/features/katalog/CatalogPage";
import Navbar from "@/components/layout/Navbar";

interface PageProps {
  searchParams: Promise<{ kategori?: string | string[] }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const category = Array.isArray(params.kategori)
    ? params.kategori[0]
    : params.kategori;

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <CatalogPage initialCategory={category} />
      </div>
    </>
  );
}