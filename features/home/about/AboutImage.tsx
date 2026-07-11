import Image from "next/image";

import { about } from "./data";

export default function AboutImage() {
  return (
    <div className="relative">
      <div className="relative h-[600px] w-[450px] overflow-hidden rounded-[40px] bg-gray-100">
        <Image
          src={about.image}
          alt={about.name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}