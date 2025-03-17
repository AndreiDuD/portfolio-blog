export default function Loading() {
  return (
    <main className="my-32 flex w-full justify-center bg-light font-mr dark:bg-dark ">
      <div className="relative flex flex-col items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 font-mr text-dark ![clip:rect(0,0,0,0)] dark:text-light">
            Loading...
          </span>
        </div>
      </div>
    </main>
  );
}
