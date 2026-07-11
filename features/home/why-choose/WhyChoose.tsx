import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./data";

export default function WhyChoose() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#17324D]">
            More Than Selling Fabric
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Kami percaya bahwa menjual kain bukan hanya soal harga,
            tetapi juga memberikan solusi terbaik, pelayanan cepat,
            dan kualitas yang konsisten untuk setiap pelanggan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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