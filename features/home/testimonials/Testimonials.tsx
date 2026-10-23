import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B78A52]">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#5A3825]">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Kepuasan pelanggan adalah prioritas kami. Berikut pengalaman
            beberapa pelanggan yang telah mempercayakan kebutuhan kain mereka kepada kami.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}