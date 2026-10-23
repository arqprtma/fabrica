import { products } from "@/features/katalog/data/products";

export interface Statistic {
  title: string;
  value: string;
  description: string;
}

export const statistics: Statistic[] = [
  {
    title: "Kategori pilihan",
    value: String(products.length).padStart(2, "0"),
    description: "Koleksi kain dengan pilihan warna",
  },
  {
    title: "Pendampingan",
    value: "1:1",
    description: "Diskusikan kebutuhan kain secara langsung",
  },
  {
    title: "Brand",
    value: "allmakind",
    description: "Sales tekstil bersama Vichra",
  },
  // {
  //   title: "Fokus",
  //   value: "Anda",
  //   description: "Pilihan bahan menyesuaikan kebutuhan koleksi",
  // },
];