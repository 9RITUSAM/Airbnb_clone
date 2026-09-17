"use client";

import Image from "next/image";
import { Grid3x3 } from "lucide-react";
import { Photo } from "@/data/listing";

export default function PhotoGrid({
  photos,
  onOpenTour,
  onOpenLightbox,
}: {
  photos: Photo[];
  onOpenTour: () => void;
  onOpenLightbox: (index: number) => void;
}) {
  const main = photos[0];
  const rest = photos.slice(1, 5);

  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-20 mt-6">
      <div className="relative photo-grid grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[400px] lg:h-[480px]">
        <button
          onClick={() => onOpenLightbox(0)}
          className="col-span-2 row-span-2 relative photo-tile a11y-focus"
          aria-label={`View photo: ${main.room}`}
        >
          <Image
            src={main.url}
            alt={main.room}
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </button>
        {rest.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onOpenLightbox(i + 1)}
            className="relative photo-tile a11y-focus"
            aria-label={`View photo: ${p.room}`}
          >
            <Image
              src={p.url}
              alt={p.room}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </button>
        ))}

        <button
          onClick={onOpenTour}
          className="absolute bottom-4 right-4 bg-white text-sm font-semibold px-4 py-2 rounded-lg shadow flex items-center gap-2 hover:bg-gray-100 transition-colors a11y-focus"
        >
          <Grid3x3 size={16} />
          Show all photos
        </button>
      </div>
    </div>
  );
}
