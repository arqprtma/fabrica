import { Category } from "./types";
import { products } from "@/features/katalog/data/products";

export const categories: Category[] = products.map((product) => ({
  id: product.id,
  name: product.category,
  description: product.shortDescription,
  image: product.image[0],
}));