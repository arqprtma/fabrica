import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "./data";

export default function FAQ() {
  return (
    <section className="bg-[#F7F1E8] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-lg">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#94633B]">
            Pertanyaan umum
          </span>

          <h2 className="mt-4 font-heading text-4xl font-medium tracking-[-0.035em] text-[#5A3825] sm:text-5xl">
            Sebelum memilih kain.
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Butuh detail harga, varian, atau ketersediaan? Tanyakan langsung
            kepada Vichra agar informasinya sesuai kondisi terbaru.
          </p>

          <a
            href="https://wa.me/6281953437411?text=Halo%20Vichra%2C%20saya%20punya%20pertanyaan%20tentang%20kain."
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#5A3825] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#765239]"
          >
            Tanya lewat WhatsApp
          </a>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}