import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  link: string;
  name: string;
  active: boolean;
  className?: string;
}

const Category: React.FC<CategoryProps> = ({
  link = "#",
  name,
  active,
  className,
}) => {
  return (
    <Link
      href={link}
      className={cx(
        "ease m-2  inline-block rounded-full  border-2   border-solid border-dark px-6 py-1.5 transition-all duration-200 hover:scale-105 dark:border-light md:px-10 md:py-2",
        className || "",
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light",
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
