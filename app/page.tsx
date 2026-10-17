import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/features/home";
import Categories from "@/features/home/categories";
import Statistics from "@/features/home/statistics/Statistics";
import About from "@/features/home/about/About";
import WhyChoose from "@/features/home/why-choose";
import Gallery from "@/features/home/gallery";
import FAQ from "@/features/home/faq";
import CTA from "@/features/home/cta";
import Footer from "@/features/home/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Categories />
        <Statistics />
        <About />
        <WhyChoose />
        <Gallery />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}