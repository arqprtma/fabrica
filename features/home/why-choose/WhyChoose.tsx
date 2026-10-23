import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./data";

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#94633B]">
            Mengapa Vichra
          </span>

          <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#5A3825] sm:text-5xl">
            Lebih mudah memilih bahan.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            Bukan sekadar melihat katalog. Anda bisa bertanya dan mencocokkan
            karakter bahan dengan kebutuhan produk sebelum mengambil keputusan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {whyChooseItems.map((item) => (
            <WhyChooseCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}