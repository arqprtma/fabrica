import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { about } from "./data";

const advantages = [
  "Premium Quality Fabric",
  "Competitive Price",
  "Fast Response",
  "Nationwide Shipping",
];

export default function AboutContent() {
  return (
    <div className="max-w-xl py-6 lg:px-0">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
        About Me
      </span>

      <h2 className="mt-4 text-5xl font-bold text-[#17324D]">
        Hi, I&lsquo;m {about.name}
      </h2>

      <p className="mt-3 text-xl font-medium text-gray-500">
        {about.role}
      </p>

      <p className="mt-8 leading-8 text-sm lg:text-lg text-gray-600">
        {about.description}
      </p>

      <div className="mt-10 grid gap-4">
        {advantages.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              className="text-green-600"
              size={22}
            />

            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-6">
        <div>
          <h3 className="text-sm lg:text-3xl font-bold text-[#17324D]">
            {about.customers}
          </h3>

          <p className="text-gray-500">
            Happy Customers
          </p>
        </div>

        <div>
          <h3 className="text-sm lg:text-3xl font-bold text-[#17324D]">
            {about.experience}
          </h3>

          <p className="text-gray-500">
            Experience
          </p>
        </div>
      </div>

      <Link
        href="https://wa.me/6281953437411"
        className="mt-12 inline-flex rounded-full bg-[#17324D] px-8 py-4 font-semibold text-white"
      >
        Konsultasi Gratis
      </Link>
    </div>
  );
}