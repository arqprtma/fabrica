"use client";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "name-asc",
    label: "Name A - Z",
  },
  {
    value: "name-desc",
    label: "Name Z - A",
  },
];

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#17324D]"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}