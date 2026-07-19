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
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-3xl border bg-gray-100">
        <Image
          src={selectedImage}
          alt={name}
          fill
          className="object-cover transition duration-300 hover:scale-105"
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
                ? "border-[#17324D]"
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