"use client";
import Link from "next/link";
import { ErrorIllustration } from "../ui/error-illustration";

interface ErrorPageProps {
  code: "404" | "500";
  title: string;
  description: string;
}

export function ErrorPage({ code, title, description }: ErrorPageProps) {
  return (
    <div className="min-h-screen w-full p-6 flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">
                ERROR CODE: {code}
              </p>
              <h1 className="text-6xl font-black tracking-tight">OOOPS!!</h1>
              <p className="text-2xl">{title}</p>
            </div>
            <p className="text-muted-foreground">{description}</p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Here are some helpful links instead:
              </p>
              <nav className="flex gap-6">
                <Link
                  href="/"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Home
                </Link>
              </nav>
            </div>
          </div>
          <div className="lg:h-[600px]">
            <ErrorIllustration code={code} />
          </div>
        </div>
      </div>
    </div>
  );
}
