const stats = [
  {
    value: "1:1",
    label: "Diskusi personal",
  },
  {
    value: "03",
    label: "Kategori kain",
  },
  {
    value: "Vichra",
    label: "Sales allmakind",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#17324D]/10 pt-6 sm:gap-8">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="font-heading text-2xl font-medium tracking-tight text-[#17324D] sm:text-3xl">
            {item.value}
          </h3>

          <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}