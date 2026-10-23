"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLink from "./Navlink";
import MobileMenu from "./MobileMenu";

import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/6281953437411"
            target="_blank"
            className="hidden rounded-full bg-[#5A3825] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#765239] lg:block"
          >
            Chat WhatsApp
          </Link>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}