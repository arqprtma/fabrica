"use client";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition
          ${
            selected === category
              ? "bg-[#17324D] text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}