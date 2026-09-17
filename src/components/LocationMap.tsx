import { Search, Plus, Minus, Home } from "lucide-react";
import { listing } from "@/data/listing";

export default function LocationMap() {
  return (
    <div id="location" className="py-10 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Where you&apos;ll be</h2>
      <p className="mb-4">{listing.location.area}</p>

      <div className="relative h-96 rounded-xl overflow-hidden bg-[#e8f0e3]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 45,0 0,100" fill="#bcdff5" />
          <line x1="0" y1="0" x2="100" y2="0" stroke="#cfe0cf" strokeWidth="0.3" />
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#d6e4d6" strokeWidth="0.2" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#d6e4d6" strokeWidth="0.2" />
          ))}
          <circle cx="38" cy="40" r="8" fill="#cfe8c8" />
          <circle cx="62" cy="55" r="10" fill="#cfe8c8" />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
            <Home size={16} />
          </div>
        </div>

        <button
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow a11y-focus"
          aria-label="Search this area"
        >
          <Search size={18} />
        </button>

        <div className="absolute top-4 right-4 flex flex-col rounded-lg overflow-hidden shadow">
          <button className="bg-white p-2 hover:bg-gray-50 a11y-focus" aria-label="Zoom in">
            <Plus size={16} />
          </button>
          <button className="bg-white p-2 border-t border-gray-200 hover:bg-gray-50 a11y-focus" aria-label="Zoom out">
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-3">Exact location will be provided after booking.</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Neighbourhood highlights</h3>
        <p className="text-base">{listing.location.blurb}</p>
        <button className="mt-2 flex items-center gap-1 font-semibold underline a11y-focus">
          Show more
        </button>
      </div>
    </div>
  );
}
