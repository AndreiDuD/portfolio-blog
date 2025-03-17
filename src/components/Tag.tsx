import { cx } from "@/src/utils";
import Link from "next/link";

interface TagProps {
  link?: string;
  name: string;
  className?: string;
}

const Tag = ({ link = "#", name, ...props }: TagProps) => {
  return (
    <Link
      href={link}
      className={cx(
        "ease inline-block rounded-full border-2 border-solid  border-light bg-dark px-6 py-2 text-sm font-semibold capitalize text-light transition-all duration-200 hover:scale-105 sm:px-10 sm:py-3 sm:text-base",
        props.className || "",
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
