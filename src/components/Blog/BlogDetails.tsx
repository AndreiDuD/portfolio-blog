import { Blog } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({
  blog,
  slug: blogSlug,
}: {
  blog: Blog;
  slug: string;
}) => {
  return (
    <div className="mx-5  flex flex-wrap items-center justify-around rounded-lg bg-accent px-2 py-2 text-lg font-medium text-light dark:bg-accentDark dark:text-dark sm:text-xl  md:mx-10 md:px-10">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog?.tags?.[0] || "")}`} className="m-3">
        #{blog?.tags?.[0] || ""}
      </Link>
    </div>
  );
};

export default BlogDetails;
