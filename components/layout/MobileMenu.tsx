"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAVIGATION } from "@/constants/navigation";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-xl p-2 hover:bg-gray-100 lg:hidden">
          <Menu />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80">
        <div className="mt-10 flex flex-col gap-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}