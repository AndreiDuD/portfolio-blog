import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center border-b-2 border-solid  border-dark text-dark dark:border-light dark:text-light md:h-[75vh] md:flex-row">
      <div className="inline-block h-full w-full border-solid border-dark dark:border-light sm:w-4/5 md:w-2/5 md:border-r-2">
        <LottieAnimation />
      </div>
      <div className="flex  w-full flex-col items-start justify-center px-5 pb-8 xs:px-10 md:w-3/5 md:px-16">
        <h2 className="text-2xl font-bold  capitalize xs:text-3xl sm:text-4xl">
          Let's Connect!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
