import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section id="tentang" className="overflow-hidden bg-[#FAF8F4] py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-8 lg:flex-row lg:gap-20">
        <div className="w-full min-w-0 lg:w-1/2">
          <AboutImage />
        </div>

        <div className="w-full min-w-0 lg:w-1/2">
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
