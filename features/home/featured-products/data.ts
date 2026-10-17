import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Polyester",
    category: "Polyester",
    image: "/images/categories/polyester.webp",
    price: 45000,
    stock: 120,
    rating: 5,
  },
  {
    id: 2,
    name: "Premium Katun",
    category: "Katun",
    image: "/images/fabrics/cotton-weave.svg",
    price: 55000,
    stock: 90,
    rating: 5,
  },
  {
    id: 3,
    name: "Premium Rayon",
    category: "Rayon",
    image: "/images/fabrics/rayon-drape.svg",
    price: 65000,
    stock: 70,
    rating: 4.9,
  },
];