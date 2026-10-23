import { Statistic } from "./data";

interface Props {
  item: Statistic;
}

export default function StatisticCard({ item }: Props) {
  return (
    <div className="rounded-[24px] border border-[#5A3825]/10 bg-white p-6 shadow-sm sm:p-7">
      <h2 className="font-heading text-3xl font-medium tracking-tight text-[#5A3825] sm:text-4xl">
        {item.value}
      </h2>

      <h3 className="mt-5 text-sm font-semibold text-[#5A3825]">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {item.description}
      </p>
    </div>
  );
}