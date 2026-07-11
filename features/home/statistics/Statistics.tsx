import StatisticCard from "./StatisticCard";
import { statistics } from "./data";

export default function Statistics() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            Our Achievement
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#17324D]">
            Numbers That Speak For Us
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-500">
            Selama bertahun-tahun kami telah membantu ribuan pelanggan
            menemukan kain berkualitas untuk kebutuhan fashion mereka.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => (
            <StatisticCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}