import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "3+ Web Projects Completed",
  "3+ Azure Cloud Projects Completed",
  "2+ Python Projects Completed",
  "1+ Years Experience in Data Analysis",
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
