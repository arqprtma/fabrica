"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAVIGATION } from "@/constants/navigation";
import Logo from "./Logo";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#5A3825]/10 bg-white text-[#5A3825] transition hover:border-[#5A3825]/25 hover:bg-[#F7F1E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A3825] lg:hidden"
        aria-label="Buka menu navigasi"
      >
        <Menu size={20} strokeWidth={1.8} />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[min(88vw,400px)] gap-0 border-l-0 bg-[#F7F1E8] p-0 text-[#5A3825] shadow-2xl"
      >
        <SheetHeader className="border-b border-[#5A3825]/10 px-6 pb-6 pt-7">
          <Logo />
          <SheetTitle className="sr-only">Menu navigasi Vichra</SheetTitle>
          <SheetDescription className="sr-only">
            Pilih halaman atau hubungi sales Vichra.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Navigasi utama mobile" className="px-4 py-7">
          <p className="px-3 pb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#94633B]">
            Jelajahi
          </p>

          <div className="flex flex-col gap-2">
            {NAVIGATION.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition ${
                        isActive
                          ? "bg-[#5A3825] text-white shadow-lg shadow-[#5A3825]/15"
                          : "text-[#5A3825] hover:bg-white"
                      }`}
                    />
                  }
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`font-heading text-xs ${
                        isActive ? "text-[#D7B785]" : "text-[#94633B]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-base font-semibold">{item.label}</span>
                  </span>
                  <ArrowRight
                    size={18}
                    className={`transition-transform group-hover:translate-x-1 ${
                      isActive ? "text-[#D7B785]" : "text-[#94633B]"
                    }`}
                  />
                </SheetClose>
              );
            })}
          </div>
        </nav>

        <div className="mt-auto px-6 pb-7">
          <div className="rounded-[24px] bg-[#5A3825] p-5 text-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D7B785]">
              Butuh bantuan memilih kain?
            </p>
            <Link
              href="https://wa.me/6281953437411"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D7B785] px-5 py-3.5 text-sm font-semibold text-[#5A3825] transition hover:bg-[#EAD9B8]"
            >
              <MessageCircle size={17} />
              Chat WhatsApp
            </Link>
          </div>
          <p className="mt-5 text-center text-xs text-gray-500">
            Sales Tekstil · Vichra by allmakind
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}