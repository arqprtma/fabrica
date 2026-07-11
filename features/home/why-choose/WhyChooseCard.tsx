import { WhyChooseItem } from "./types";

interface Props {
  item: WhyChooseItem;
}

export default function WhyChooseCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#17324D] hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17324D]/10">
        <Icon className="h-7 w-7 text-[#17324D]" />
      </div>

      <h3 className="text-2xl font-bold text-[#17324D]">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">
        {item.description}
      </p>
    </div>
  );
}