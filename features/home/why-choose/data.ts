import {
  ShieldCheck,
  Truck,
  MessageCircle,
  PackageCheck,
  BadgeDollarSign,
  Headset,
} from "lucide-react";

import { WhyChooseItem } from "./types";

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Premium Quality",
    description: "Seluruh kain dipilih dengan standar kualitas terbaik.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Pengiriman cepat ke seluruh Indonesia.",
    icon: Truck,
  },
  {
    title: "Free Consultation",
    description: "Bantu memilih kain yang tepat untuk kebutuhan Anda.",
    icon: MessageCircle,
  },
  {
    title: "Ready Stock",
    description: "Stok selalu diperbarui setiap hari.",
    icon: PackageCheck,
  },
  {
    title: "Best Price",
    description: "Harga kompetitif untuk eceran maupun grosir.",
    icon: BadgeDollarSign,
  },
  {
    title: "After Sales",
    description: "Layanan tetap kami berikan setelah transaksi selesai.",
    icon: Headset,
  },
];