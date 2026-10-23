"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "relative py-2 text-sm font-medium transition-all duration-300",
        pathname === href
          ? "text-[#5A3825]"
          : "text-gray-600 hover:text-[#5A3825]"
      )}
    >
      {children}

      {pathname === href && (
        <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#B78A52]" />
      )}
    </Link>
  );
}