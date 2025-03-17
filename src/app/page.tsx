import { allBlogs } from "@/.contentlayer/generated";
import FeaturedPosts from "@/src/components/FeaturedPosts";
import HomeCoverSection from "@/src/components/HomeCoverSection";
import RecentPosts from "@/src/components/RecentPosts";

export default function BlogHome() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
