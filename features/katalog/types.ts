export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string[];
  shortDescription: string;
  composition: string;
  width: string;
  stock: "Ready Stock" | "Pre Order";
  usage: string[];
  colors: string[];
  care: string[];
  moq: number;

}