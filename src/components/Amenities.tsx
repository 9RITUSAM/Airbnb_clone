"use client";

import { useState } from "react";
import {
  Utensils,
  Wifi,
  Briefcase,
  Car,
  Waves,
  Bath,
  PawPrint,
  Camera,
  BellOff,
  X,
} from "lucide-react";
import { listing } from "@/data/listing";

const ICONS: Record<string, React.ElementType> = {
  utensils: Utensils,
  wifi: Wifi,
  briefcase: Briefcase,
  car: Car,
  waves: Waves,
  bath: Bath,
  pawPrint: PawPrint,
  camera: Camera,
  alarmSmoke: BellOff,
};

export default function Amenities() {
  const [open, setOpen] = useState(false);

  return (
    <div id="amenities" className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-6">What this place offers</h2>
      <div className="grid grid-cols-2 gap-y-4">
        {listing.amenities.map((a, i) => {
          const Icon = ICONS[a.icon];
          return (
            <div
              key={i}
              className={`flex items-center gap-4 text-base ${
                a.unavailable ? "text-gray-400 line-through" : ""
              }`}
            >
              <Icon size={22} strokeWidth={1.3} />
              <span>{a.label}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mt-6 border border-gray-800 rounded-lg px-6 py-3 text-sm font-medium hover:bg-gray-100 a11y-focus"
      >
        Show all {listing.totalAmenities} amenities
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl mt-10 mb-10 w-full max-w-2xl p-6 animate-slideUp"
            role="dialog"
            aria-modal="true"
            aria-label="All amenities"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">What this place offers</h3>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {listing.amenities.map((a, i) => {
                const Icon = ICONS[a.icon];
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 py-2 border-b border-gray-100 ${
                      a.unavailable ? "text-gray-400 line-through" : ""
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.3} />
                    <span>{a.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
