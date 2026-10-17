import StatisticCard from "./StatisticCard";
import { statistics } from "./data";

export default function Statistics() {
  return (
    <section className="bg-[#FAF8F4] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9C7B43]">
            Cara kerja Vichra
          </span>

          <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#17324D] sm:text-5xl">
            Pilih bahan dengan lebih yakin.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            Kenali karakter kain, ceritakan kebutuhan produksi, lalu temukan
            opsi yang paling sesuai untuk rencana Anda.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
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