import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  if (variant === "light") {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
          <span className="text-white font-bold text-xl">
            <GraduationCap />
          </span>
        </div>
        <span className="font-bold text-xl">EduZ</span>
      </Link>
    );
  } else {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-1">
          <span className="text-blue-800 font-bold text-xl">
            <GraduationCap />
          </span>
        </div>
        <span className="font-bold text-xl">EduZ</span>
      </Link>
    );
  }
}
