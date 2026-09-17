"use client";

import { ChevronDown, Tag } from "lucide-react";
import { listing } from "@/data/listing";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
}

export default function BookingCard() {
  return (
    <div className="sticky top-[140px]">
      <div className="rounded-2xl border border-gray-200 shadow-lg p-6 mb-4">
        <div className="flex items-start gap-3">
          <Tag size={18} className="mt-1 text-green-700 shrink-0" />
          <div>
            <p className="text-sm font-medium">Get 10% off your next stay.</p>
            <a href="#" className="text-sm underline">
              Terms apply
            </a>
          </div>
          <button className="ml-auto shrink-0 border border-gray-800 rounded-lg px-4 py-1.5 text-sm font-medium hover:bg-gray-100 a11y-focus">
            Claim
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 shadow-lg p-6">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-xl font-semibold underline">
            ₹{listing.price.toLocaleString("en-IN")}
          </span>
          <span className="text-base">for {listing.nights} nights</span>
        </div>

        <div className="border border-gray-400 rounded-t-xl grid grid-cols-2">
          <div className="border-r border-b border-gray-400 p-2">
            <label className="block text-[10px] font-bold tracking-wide">CHECK-IN</label>
            <span className="text-sm">{formatDate(listing.checkIn)}</span>
          </div>
          <div className="border-b border-gray-400 p-2">
            <label className="block text-[10px] font-bold tracking-wide">CHECKOUT</label>
            <span className="text-sm">{formatDate(listing.checkOut)}</span>
          </div>
          <button className="col-span-2 flex items-center justify-between border-gray-400 rounded-b-xl p-2 text-left hover:bg-gray-50 a11y-focus">
            <div>
              <label className="block text-[10px] font-bold tracking-wide">GUESTS</label>
              <span className="text-sm">2 guests</span>
            </div>
            <ChevronDown size={16} />
          </button>
        </div>

        <button className="w-full mt-4 bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity a11y-focus">
          Reserve
        </button>

        <p className="text-center text-sm text-gray-500 mt-3">
          You won&apos;t be charged yet
        </p>
      </div>

      <div className="mt-4">
        <a href="#" className="text-sm underline text-gray-600 hover:text-black">
          Report this listing
        </a>
      </div>
    </div>
  );
}
