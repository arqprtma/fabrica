interface Props {
  name: string;
}

export default function BrandLogo({ name }: Props) {
  return (
    <div
      className="
        flex
        h-20
        items-center
        justify-center
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-8
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <span className="text-lg font-semibold tracking-widest text-gray-500">
        {name}
      </span>
    </div>
  );
}