import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    slug: "premium-polyester-ivory",
    name: "Premium Polyester",
    category: "Polyester",
    image: ["/images/categories/polyester.webp"],
    shortDescription: "Kain polyester premium untuk kebutuhan sehari-hari.",
  },
  {
    id: 2,
    slug: "premium-cotton-cream",
    name: "Premium Katun",
    category: "Katun",
    image: ["/images/fabrics/cotton-weave.svg"],
    shortDescription: "Kain katun premium yang nyaman dan lembut.",
  },
  {
    id: 3,
    slug: "premium-rayon-soft",
    name: "Premium Rayon",
    category: "Rayon",
    image: ["/images/fabrics/rayon-drape.svg"],
    shortDescription: "Kain rayon ringan dengan drape premium.",
  },
];