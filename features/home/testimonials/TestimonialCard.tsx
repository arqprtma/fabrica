import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "./types";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="mb-6 flex">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="leading-8 text-gray-600">
        {testimonial.message}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-bold text-[#5A3825]">
            {testimonial.name}
          </h4>

          <p className="text-sm text-gray-500">
            {testimonial.company}
          </p>

          <p className="text-sm text-gray-400">
            {testimonial.city}
          </p>
        </div>
      </div>
    </div>
  );
}