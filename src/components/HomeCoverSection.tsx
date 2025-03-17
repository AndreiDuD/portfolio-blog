import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/src/utils";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

const HomeCoverSection = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="inline-block w-full">
      <article className="relative mx-5 flex h-[60vh] flex-col items-start justify-end sm:mx-10 sm:h-[85vh]">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 z-0
            h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90
            "
        />
        <Image
          src={blog?.image?.filePath.replace("../public", "") || ""}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl || ""}
          alt={blog?.title || ""}
          fill
          className="-z-10 h-full w-full rounded-3xl object-cover object-center"
          sizes="100vw"
        />

        <div className="z-0 flex w-full flex-col items-start  justify-center p-6 text-light sm:p-8 md:p-12 lg:w-3/4 lg:p-16">
          <Tag
            link={`/categories/${slug(blog?.tags?.[0] || "")}`}
            name={blog?.tags?.[0] || ""}
          />
          <Link href={blog.url} className="mt-6">
            <h1 className="text-lg font-bold capitalize sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] 
                bg-left-bottom bg-no-repeat
                transition-[background-size] duration-500 hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
              >
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="mt-4  hidden font-in sm:inline-block md:text-lg lg:text-xl">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
