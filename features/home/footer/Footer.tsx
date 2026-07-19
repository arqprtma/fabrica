import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "#categories" },
  // { name: "Products", href: "#products" },
  // { name: "Gallery", href: "#gallery" },
  // { name: "Contact", href: "#contact" },
];

const categories = [
  "Cotton",
  "Linen",
  "Satin",
  "Rayon",
];

export default function Footer() {
  return (
    <footer className="bg-[#17324D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Fabrica
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Premium fabric supplier untuk fashion,
              butik, garment, konveksi, dan kebutuhan
              tekstil di seluruh Indonesia.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="#">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
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
              Categories
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {categories.map((item) => (
                <Link
                  href="#"
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
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-gray-300">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5" />

                <span>
                  Jakarta, Indonesia
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5" />

                <span>+62 819-534-37411</span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5" />

                <span>hello@fabrica.id</span>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5" />

                <span>
                  Mon - Sat
                  <br />
                  08.00 - 17.00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-gray-400 lg:flex-row">
          <p>
            © {new Date().getFullYear()} Fabrica.
            All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}