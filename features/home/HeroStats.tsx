const stats = [
  {
    value: "1000+",
    label: "Customers",
  },
  {
    value: "200+",
    label: "Fabric Types",
  },
  {
    value: "4.9★",
    label: "Rating",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-8">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-[#17324D]">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}