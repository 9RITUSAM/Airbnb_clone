"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react";
import { Photo } from "@/data/listing";

export default function Lightbox({
  photos,
  index,
  onClose,
  onChangeIndex,
  onBackToGrid,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
  onBackToGrid?: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const goPrev = useCallback(
    () => onChangeIndex((index - 1 + photos.length) % photos.length),
    [index, photos.length, onChangeIndex]
  );
  const goNext = useCallback(
    () => onChangeIndex((index + 1) % photos.length),
    [index, photos.length, onChangeIndex]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[60] bg-white flex flex-col animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}: ${photo.room}`}
    >
      <div className="flex items-center justify-between px-6 py-4 shrink-0">
        <button
          onClick={onBackToGrid ?? onClose}
          className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
          aria-label="Back to photo grid"
        >
          <Grid3x3 size={20} />
        </button>
        <span className="text-base font-medium">{photo.room}</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {index + 1} of {photos.length}
          </span>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
            aria-label="Close photo viewer"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center px-20 pb-8 min-h-0">
        <button
          onClick={goPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2.5 shadow hover:scale-105 transition-transform a11y-focus"
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          key={photo.id}
          className="relative w-full h-full max-w-4xl animate-scaleIn"
        >
          <Image
            src={photo.url}
            alt={photo.room}
            fill
            sizes="80vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={goNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2.5 shadow hover:scale-105 transition-transform a11y-focus"
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
