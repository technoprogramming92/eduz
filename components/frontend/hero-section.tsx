import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SmallTitle from "./small-title";

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-24">
      <SmallTitle title="Welcome to EduZ" />

      <h1 className="mt-8 max-w-4xl text-center text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        Your Complete School Management Solution
      </h1>

      <p className="mt-6 max-w-2xl text-center text-xl text-gray-600">
        From admissions to academics, simplify every aspect of school
        administration with our comprehensive and user-friendly platform.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          size="lg"
          className="h-12 px-6 text-base bg-blue-500 text-white"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-12 px-6 text-base bg-blue-500 text-white"
        >
          See All features
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
