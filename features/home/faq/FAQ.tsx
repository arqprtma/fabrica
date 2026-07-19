import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "./data";

export default function FAQ() {
  return (
    <section className="bg-[#FAF8F4] py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#17324D]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Masih ada pertanyaan? Berikut beberapa pertanyaan yang paling sering
            diajukan oleh pelanggan kami.
          </p>

          <a
            href="https://wa.me/6281953437411"
            className="mt-10 inline-flex rounded-full bg-[#17324D] px-8 py-4 text-white font-semibold"
          >
            Hubungi Kami
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