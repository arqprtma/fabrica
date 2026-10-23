import { WhyChooseItem } from "./types";

interface Props {
  item: WhyChooseItem;
}

export default function WhyChooseCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#5A3825] hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5A3825]/10">
        <Icon className="h-7 w-7 text-[#5A3825]" />
      </div>

      <h3 className="text-2xl font-bold text-[#5A3825]">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">
        {item.description}
      </p>
    </div>
  );
}