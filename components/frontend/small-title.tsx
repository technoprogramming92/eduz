import React from "react";
import { Sparkles } from "lucide-react";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-lg font-medium">
      <Sparkles className="h-4 w-4 text-yellow-500" />
      {title}
    </div>
  );
}
