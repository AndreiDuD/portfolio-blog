"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string; // Updated field names without spaces
  email: string;
  phoneNumber: string; // Updated field name without spaces
  projectDetails: string; // Updated field name without spaces
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 font-in text-base font-medium leading-relaxed xs:text-lg sm:text-xl"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg 
        focus:border-gray focus:ring-0"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg 
        focus:border-gray focus:ring-0"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phoneNumber", {})}
        className="mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg 
        focus:border-gray focus:ring-0"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("projectDetails", {})}
        placeholder="My project is about..."
        rows={3}
        className="mx-0 w-full border-0 border-b border-gray bg-transparent  p-0 outline-none placeholder:text-lg 
        focus:border-gray focus:ring-0"
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 inline-block cursor-pointer rounded border-2 border-solid border-dark px-6 py-2 text-lg font-medium capitalize dark:border-light sm:px-8 sm:py-3 sm:text-xl"
      />
    </form>
  );
}
