import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mx-5 mt-8 self-start text-lg font-semibold text-dark dark:font-normal dark:text-light xs:mx-10 sm:mx-12 md:mx-16 md:text-2xl lg:mx-20">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
