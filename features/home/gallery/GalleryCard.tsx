import Image from "next/image";
import { GalleryItem } from "./types";

interface Props {
  item: GalleryItem;
}

export default function GalleryCard({ item }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl">
      <div className="relative h-80 overflow-hidden rounded-[24px] bg-[#E7D9C6] sm:h-96">
        <Image
          src={item.image}
          alt={`${item.title} — inspirasi gaya ${item.category}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100" />

        <div className="absolute bottom-6 left-6 text-white">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
            Inspirasi {item.category}
          </span>

          <h3 className="mt-3 text-2xl font-bold">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}