import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton Combed",
    category: "Katun",
    image: "/images/products/cotton-1.jpg",
    price: 45000,
    stock: 120,
    rating: 5,
  },
  {
    id: 2,
    name: "Japanese Linen",
    category: "Linen",
    image: "/images/products/linen.jpg",
    price: 95000,
    stock: 80,
    rating: 5,
  },
  {
    id: 3,
    name: "Luxury Satin",
    category: "Satin",
    image: "/images/products/satin.jpg",
    price: 65000,
    stock: 150,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Stretch Denim",
    category: "Denim",
    image: "/images/products/denim.jpg",
    price: 85000,
    stock: 60,
    rating: 5,
  },
];