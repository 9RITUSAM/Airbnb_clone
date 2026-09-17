import { listing } from "@/data/listing";

export default function SummaryCard() {
  return (
    <div className="pt-6">
      <h2 className="text-xl font-semibold">{listing.propertyType}</h2>
      <p className="text-base text-gray-700">
        {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed ·{" "}
        {listing.bathrooms} bathroom
      </p>

      <div className="mt-6 border border-gray-300 rounded-xl p-4 flex items-center gap-6">
        <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
          <LaurelIcon flipped />
          <div className="text-center leading-tight">
            <p className="text-sm font-semibold">Guest</p>
            <p className="text-sm font-semibold">favourite</p>
          </div>
          <LaurelIcon />
        </div>

        <p className="text-sm text-gray-800 flex-1">
          One of the most loved homes on Airbnb, according to guests
        </p>

        <div className="text-center shrink-0">
          <p className="text-2xl font-semibold">{listing.rating}</p>
          <p className="text-sm">★★★★★</p>
        </div>

        <div className="w-px h-10 bg-gray-300 shrink-0" />

        <div className="text-center shrink-0">
          <p className="text-2xl font-semibold">{listing.reviewCount}</p>
          <p className="text-sm underline">Reviews</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 pb-6 border-b border-gray-200">
        <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center text-white text-[10px] font-bold overflow-hidden">
          MIRASHYA
        </div>
        <div>
          <p className="font-semibold">Hosted by {listing.host.name}</p>
          <p className="text-sm text-gray-500">{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>
    </div>
  );
}

function LaurelIcon({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      className={flipped ? "scale-x-[-1]" : ""}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M12 22c0-6 2-10 8-14" />
      <path d="M20 8c-2 0-3 1-3 3s2 2 3 1" />
      <path d="M18 12c-2 0-3 1-3 3s2 2 3 1" />
      <path d="M16 16c-2 0-3 1-3 3s2 2 3 1" />
    </svg>
  );
}
