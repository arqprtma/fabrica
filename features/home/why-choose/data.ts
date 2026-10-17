import {
  ShieldCheck,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

import { WhyChooseItem } from "./types";

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Tiga kategori utama",
    description: "Mulai eksplorasi polyester, katun, dan rayon dalam satu tempat.",
    icon: ShieldCheck,
  },
  {
    title: "Konsultasi langsung",
    description: "Sampaikan kebutuhan koleksi atau produksi langsung kepada Vichra.",
    icon: MessageCircle,
  },
  {
    title: "Bantuan memilih bahan",
    description: "Diskusikan karakter dan penggunaan kain sebelum menentukan pilihan.",
    icon: PackageCheck,
  },
];