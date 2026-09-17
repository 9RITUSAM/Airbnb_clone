"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { listing } from "@/data/listing";

export default function NearbyStays() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: number) {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">1 / 2</span>
          <button
            onClick={() => scroll(-1)}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 a11y-focus"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 a11y-focus"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar">
        {listing.nearbyStays.map((s) => (
          <button
            key={s.title}
            className="w-56 shrink-0 text-left a11y-focus group"
          >
            <div className="relative w-56 h-56 rounded-xl overflow-hidden mb-2">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="224px"
                className="object-cover photo-tile group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm font-medium truncate">{s.title}</p>
            <p className="text-sm text-gray-500">
              ₹{s.price.toLocaleString("en-IN")} · ★ {s.rating}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
