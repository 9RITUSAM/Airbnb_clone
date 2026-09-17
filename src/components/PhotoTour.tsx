"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { PhotoGroup, photos } from "@/data/listing";

export default function PhotoTour({
  groups,
  onClose,
  onOpenLightbox,
}: {
  groups: PhotoGroup[];
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // running offset of each group's first photo within the flat `photos` array
  let runningIndex = 0;
  const groupOffsets = groups.map((g) => {
    const offset = runningIndex;
    runningIndex += g.photos.length;
    return offset;
  });

  function scrollToGroup(i: number) {
    document.getElementById(`tour-group-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      <div className="sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
            aria-label="Close photo tour"
          >
            <ChevronLeft size={22} />
          </button>
          <h2 className="text-base font-medium">Photo tour</h2>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
              aria-label="Share this listing"
            >
              <Share size={18} />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
              aria-label="Save this listing"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Category jump-nav */}
        <div className="flex flex-wrap gap-x-8 gap-y-6 pt-2 pb-10">
          {groups.map((g, i) => (
            <button
              key={g.title}
              onClick={() => scrollToGroup(i)}
              className="flex flex-col items-center gap-2 w-24 a11y-focus group"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden photo-tile">
                <Image
                  src={g.photos[0].url}
                  alt={g.title}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-center leading-tight">{g.title}</span>
            </button>
          ))}
        </div>

        {/* Room sections */}
        <div className="space-y-16">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              id={`tour-group-${gi}`}
              className="grid md:grid-cols-[280px_1fr] gap-8 scroll-mt-20"
            >
              <div>
                <h3 className="text-2xl font-semibold">{g.title}</h3>
                {g.subtitle && (
                  <p className="text-sm text-gray-500 mt-2">{g.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {g.photos.map((p, pi) => {
                  const flatIndex = groupOffsets[gi] + pi;
                  const isFullWidth = pi % 3 === 0;
                  return (
                    <button
                      key={p.id}
                      onClick={() => onOpenLightbox(flatIndex)}
                      className={`relative rounded-xl overflow-hidden photo-tile a11y-focus h-64 ${
                        isFullWidth ? "col-span-2" : "col-span-1"
                      }`}
                      aria-label={`Open photo ${pi + 1} of ${g.title}`}
                    >
                      <Image
                        src={p.url}
                        alt={p.room}
                        fill
                        sizes={isFullWidth ? "70vw" : "35vw"}
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
