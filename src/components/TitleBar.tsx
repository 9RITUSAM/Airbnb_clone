"use client";

import { useState } from "react";
import { Share, Heart } from "lucide-react";

export default function TitleBar({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-20 pt-6 flex items-start justify-between gap-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center gap-4 shrink-0">
        <button className="flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-2 hover:bg-gray-100 rounded-lg px-2 py-1 a11y-focus">
          <Share size={16} />
          Share
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          className="flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-2 hover:bg-gray-100 rounded-lg px-2 py-1 a11y-focus"
        >
          <Heart
            size={16}
            className={
              saved
                ? "fill-[#FF385C] text-[#FF385C] transition-colors"
                : "transition-colors"
            }
          />
          Save
        </button>
      </div>
    </div>
  );
}
