"use client";

import { useState } from "react";
import {
  Sparkles,
  CheckCircle,
  Key,
  MessageCircle,
  Map,
  Tag,
  Star,
  X,
} from "lucide-react";
import { listing } from "@/data/listing";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  checkCircle: CheckCircle,
  key: Key,
  messageCircle: MessageCircle,
  map: Map,
  tag: Tag,
};

function ReviewCard({ review }: { review: (typeof listing.reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 140;

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center font-semibold text-sm">
          {review.name[0]}
        </div>
        <div>
          <p className="font-medium text-sm">{review.name}</p>
          <p className="text-xs text-gray-500">{review.tenure}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs mb-2">
        <span className="flex">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={10} fill="currentColor" />
          ))}
        </span>
        <span aria-hidden="true">·</span>
        <span className="text-gray-500">{review.date}</span>
      </div>
      <p className={`text-sm leading-relaxed ${!expanded && long ? "line-clamp-3" : ""}`}>
        {review.text}
      </p>
      {long && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-sm font-semibold underline mt-1 a11y-focus"
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const maxBar = Math.max(...listing.ratingBreakdown.map((r) => r.pct));

  return (
    <div id="reviews" className="py-10 border-b border-gray-200">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-5xl font-semibold">
          <span aria-hidden="true">🌿</span>
          {listing.rating}
          <span aria-hidden="true">🌿</span>
        </div>
        <p className="text-lg font-semibold mt-4">Guest favourite</p>
        <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a href="#" className="text-sm font-semibold underline mt-2 inline-block a11y-focus">
          How reviews work
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-10">
        <div>
          <p className="text-sm font-medium mb-2">Overall rating</p>
          {listing.ratingBreakdown.map((r) => (
            <div key={r.stars} className="flex items-center gap-2 text-xs text-gray-500">
              <span>{r.stars}</span>
              <div className="flex-1 h-1 bg-gray-200 rounded">
                <div
                  className="h-1 bg-black rounded"
                  style={{ width: `${(r.pct / maxBar) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {listing.categoryRatings.map((c) => {
          const Icon = CATEGORY_ICONS[c.icon];
          return (
            <div key={c.label}>
              <p className="text-sm font-medium mb-2">{c.label}</p>
              <p className="text-2xl font-semibold mb-1">{c.value}</p>
              <Icon size={20} strokeWidth={1.3} />
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6 mb-6">
        {listing.reviewTags.map((t) => (
          <button
            key={t.label}
            className="shrink-0 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium hover:border-black transition-colors a11y-focus"
          >
            {t.label} {t.count}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        {listing.reviews.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>

      <button
        onClick={() => setShowAll(true)}
        className="mt-8 border border-gray-800 rounded-lg px-6 py-3 text-sm font-medium hover:bg-gray-100 a11y-focus"
      >
        Show all {listing.reviewCount} reviews
      </button>

      {showAll && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto animate-fadeIn"
          onClick={() => setShowAll(false)}
        >
          <div
            className="bg-white rounded-xl mt-10 mb-10 w-full max-w-3xl p-8 animate-slideUp"
            role="dialog"
            aria-modal="true"
            aria-label="All reviews"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Star size={16} fill="currentColor" /> {listing.rating} · {listing.reviewCount}{" "}
                reviews
              </h3>
              <button
                onClick={() => setShowAll(false)}
                className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-h-[70vh] overflow-y-auto pr-2">
              {listing.reviews.map((r) => (
                <ReviewCard key={r.name} review={r} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
