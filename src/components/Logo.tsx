import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" mr-2 w-12 overflow-hidden rounded-full md:mr-4 md:w-16">
        <Image
          src={profileImg}
          placeholder="blur"
          alt="AD Logo"
          className="h-auto w-full rounded-full"
          priority
        />
      </div>
      <span className="text-lg font-bold dark:font-semibold md:text-xl">
        Andrei Duduman
      </span>
    </Link>
  );
};

export default Logo;
