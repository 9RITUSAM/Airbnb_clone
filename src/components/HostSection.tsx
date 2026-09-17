import { ShieldCheck, MapPin, GraduationCap } from "lucide-react";
import { listing } from "@/data/listing";

export default function HostSection() {
  return (
    <div className="py-10 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-6">Meet your host</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="border border-gray-200 rounded-2xl p-6 flex gap-6 items-center max-w-sm">
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-full bg-emerald-900 flex items-center justify-center text-white text-[9px] font-bold text-center">
                MIRASHYA
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#FF385C] text-white rounded-full p-1">
                <ShieldCheck size={14} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex divide-x divide-gray-200 text-center mb-3">
                <div className="flex-1 pr-2">
                  <p className="font-semibold">{listing.host.reviews.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Reviews</p>
                </div>
                <div className="flex-1 px-2">
                  <p className="font-semibold">{listing.host.rating}★</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
                <div className="flex-1 pl-2">
                  <p className="font-semibold">{listing.host.yearsHosting}</p>
                  <p className="text-xs text-gray-500">Years hosting</p>
                </div>
              </div>
              <p className="font-semibold text-lg">{listing.host.name}</p>
              <p className="text-sm text-gray-500">Host</p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Born in the {listing.host.bornDecade}
            </p>
            <p className="flex items-center gap-2">
              <GraduationCap size={16} /> Where I went to school: {listing.host.school}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Co-Hosts</h3>
          <div className="grid grid-cols-3 gap-y-4">
            {listing.coHosts.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                  {c.name[0]}
                </div>
                <span className="text-sm">{c.name}</span>
              </div>
            ))}
          </div>

          <h3 className="font-semibold mt-6 mb-2">Host details</h3>
          <p className="text-sm">Response rate: {listing.host.responseRate}%</p>
          <p className="text-sm">Responds within {listing.host.respondsWithin}</p>

          <button className="mt-4 bg-gray-900 text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-black a11y-focus">
            Message host
          </button>

          <p className="text-xs text-gray-500 mt-4 flex items-start gap-2">
            <ShieldCheck size={16} className="shrink-0 mt-0.5" />
            To help protect your payment, always use Airbnb to send money and communicate with
            hosts.
          </p>
        </div>
      </div>
    </div>
  );
}
