import { Blog } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const BlogLayoutThree = ({ blog }: { blog: Blog }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={blog.url} className="h-full overflow-hidden rounded-xl">
        <Image
          src={blog?.image?.filePath.replace("../public", "") || ""}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl || ""}
          alt={blog.title}
          width={blog?.image?.width || 0}
          height={blog?.image?.height || 0}
          className=" ease aspect-[4/3] h-full w-full object-cover  object-center transition-all duration-300 group-hover:scale-105 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="mt-4 flex w-full flex-col">
        <span className="text-xs font-semibold uppercase text-accent dark:text-accentDark sm:text-sm">
          {blog?.tags?.[0] || ""}
        </span>
        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="text-base font-semibold  capitalize sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  bg-[length:0px_6px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="text-sm font-semibold capitalize text-gray dark:text-light/50  sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
