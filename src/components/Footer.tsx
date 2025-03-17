"use client";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

  return (
    <footer className="m-2 mt-16 flex flex-col items-center rounded-2xl bg-dark text-light dark:bg-accentDark/90 dark:text-dark sm:m-10">
      <h3 className="mt-16 px-4 text-center text-2xl font-medium capitalize dark:font-bold sm:text-3xl lg:text-4xl">
        Interesting Stories | Updates
      </h3>
      <p className="mt-5 w-full px-4 text-center text-sm font-light dark:font-medium sm:w-3/5 sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx04 mt-6 flex w-fit items-stretch rounded bg-light p-1 dark:bg-dark sm:min-w-[384px] sm:p-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="mr-2 w-full border-0 border-b bg-transparent pb-1 pl-2 text-dark focus:border-dark focus:ring-0 sm:pl-0"
        />

        <input
          type="submit"
          className="cursor-pointer rounded bg-dark px-3 py-1 font-medium text-light dark:bg-light dark:text-dark sm:px-5"
        />
      </form>
      <div className="mt-8 flex items-center">
        <a
          href={siteMetadata.linkedin}
          className="mr-4 inline-block h-6 w-6"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="mr-4 inline-block h-6 w-6"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a
          href={siteMetadata.github}
          className="mr-4 inline-block h-6 w-6 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="ease fill-light  transition-all duration-200 hover:scale-125 dark:fill-dark" />
        </a>
      </div>

      <div className="relative  mt-16 flex w-full flex-col items-center justify-between border-t border-solid border-light px-8  py-6 font-medium md:mt-24 md:flex-row">
        <span className="text-center">
          &copy;2023 Andrei Duduman. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="my-4 text-center underline md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://andrei-duduman.vercel.app/"
            className="underline"
            target="_blank"
          >
            Andrei Duduman
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
