import Link from "next/link";

export default function NotFound() {
  return (
    <main className="my-32 flex w-full justify-center font-mr dark:bg-dark">
      <div className="relative flex flex-col items-center justify-center">
        <h1
          className={`inline-block w-full text-center
      text-6xl font-bold capitalize text-dark dark:text-light xl:text-8xl`}
        >
          404
        </h1>
        <h2
          className={`mt-4 inline-block w-full
      text-center text-5xl font-bold capitalize leading-snug tracking-wide text-dark dark:text-light xl:text-6xl`}
        >
          Page Not Found!
        </h2>
        <Link
          href="/"
          className="mt-8 inline-block self-center rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light
        "
        >
          Go To Home
        </Link>
      </div>
    </main>
  );
}
