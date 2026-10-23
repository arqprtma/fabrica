"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[1] ?? images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-3xl border bg-[#F2E9DB]">
        <Image
          src={selectedImage}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      {/* Thumbnail */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 ${
              image === selectedImage
                ? "border-[#5A3825]"
                : "border-gray-200"
            }`}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}