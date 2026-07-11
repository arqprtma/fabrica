import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17324D] text-lg font-bold text-white shadow-lg">
        F
      </div>

      <div>
        <h2 className="font-heading text-xl font-bold tracking-wide">
          Fabrica
        </h2>

        <p className="text-xs text-muted-foreground">
          Premium Fabric
        </p>
      </div>
    </Link>
  );
}