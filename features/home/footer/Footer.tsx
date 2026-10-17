import Link from "next/link";
import { Phone } from "lucide-react";

import { FaInstagram } from "react-icons/fa6";

const quickLinks = [
  { name: "Beranda", href: "/" },
  { name: "Kategori kain", href: "#kategori" },
  { name: "Tentang Vichra", href: "#tentang" },
  { name: "Inspirasi", href: "#inspirasi" },
  { name: "Kontak", href: "#kontak" },
];

const categories = ["Polyester", "Katun", "Rayon"];

export default function Footer() {
  return (
    <footer className="bg-[#17324D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Vichra
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Vichra, sales tekstil allmakind. Temukan pilihan polyester,
              katun, dan rayon untuk kebutuhan koleksi Anda.
            </p>

            <div className="mt-6">
              <Link
                href="https://www.instagram.com/allmakind/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram allmakind"
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
              >
                <FaInstagram size={17} />
                @allmakind
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold">
              Jelajahi
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-xl font-semibold">
              Kategori
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {categories.map((item) => (
                <Link
                  href={`/katalog?kategori=${encodeURIComponent(item)}`}
                  key={item}
                  className="text-gray-300 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Hubungi
            </h3>

            <div className="mt-6 space-y-5 text-gray-300">
              <a
                href="https://wa.me/6281953437411"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <Phone className="mt-1 h-5 w-5" />

                <span>+62 819-534-37411 · WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/allmakind/"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <FaInstagram className="mt-1 h-5 w-5" />
                <span>@allmakind</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-gray-400 lg:flex-row">
          <p>
            © {new Date().getFullYear()} Vichra.
            All rights reserved.
          </p>

          <p>Sales tekstil untuk kebutuhan fashion & produksi.</p>
        </div>
      </div>
    </footer>
  );
}