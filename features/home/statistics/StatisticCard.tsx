import { Statistic } from "./data";

interface Props {
  item: Statistic;
}

export default function StatisticCard({ item }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-5xl font-bold text-[#17324D]">
        {item.value}
      </h2>

      <h3 className="mt-4 text-xl font-semibold">
        {item.title}
      </h3>

      <p className="mt-2 text-gray-500">
        {item.description}
      </p>
    </div>
  );
}