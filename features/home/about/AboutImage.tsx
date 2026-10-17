import Image from "next/image";

import { about } from "./data";

export default function AboutImage() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-xl">
        <Image
          src={about.image}
          alt="Close-up tekstur kain katun"
          fill
          sizes="(max-width: 1024px) 100vw, 384px"
          className="object-cover"
        />
      </div>
    </div>
  );
}