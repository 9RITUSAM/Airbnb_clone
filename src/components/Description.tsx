"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { listing } from "@/data/listing";

export default function Description() {
  const [expanded, setExpanded] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between mb-6">
        <p className="text-sm">Some info has been automatically translated.</p>
        <button
          onClick={() => setShowOriginal((s) => !s)}
          className="text-sm font-medium underline a11y-focus"
        >
          {showOriginal ? "Show translation" : "Show original"}
        </button>
      </div>

      <p className={`text-base leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
        {listing.description}
      </p>

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-3 flex items-center gap-1 font-semibold underline a11y-focus"
        >
          Show more
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
