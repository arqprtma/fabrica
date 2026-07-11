import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="bg-[#FAF8F4] py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        <AboutImage />

        <AboutContent />
      </div>
    </section>
  );
}