export default function HeroBackground() {
  return (
    <>
      {/* Gold Blur */}
      <div
        className="
        absolute
        left-[-180px]
        top-[-150px]
        h-[450px]
        w-[450px]
        rounded-full
        bg-yellow-300/30
        blur-[150px]
      "
      />

      {/* Navy Blur */}

      <div
        className="
        absolute
        right-[-120px]
        bottom-[-100px]
        h-[420px]
        w-[420px]
        rounded-full
        bg-blue-900/20
        blur-[160px]
      "
      />
    </>
  );
}