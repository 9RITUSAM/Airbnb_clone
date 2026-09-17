import { CalendarX, KeyRound, ShieldAlert } from "lucide-react";
import { listing } from "@/data/listing";

export default function ThingsToKnow() {
  return (
    <div className="py-10 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-6">Things to know</h2>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <CalendarX size={20} strokeWidth={1.3} />
            <h3 className="font-semibold">Cancellation policy</h3>
          </div>
          <p className="text-sm mb-2">{listing.cancellationPolicy}</p>
          <a href="#" className="text-sm underline font-medium">
            Review this host&apos;s full policy for details.
          </a>
          <br />
          <a href="#" className="text-sm underline font-semibold mt-2 inline-block">
            Learn more
          </a>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <KeyRound size={20} strokeWidth={1.3} />
            <h3 className="font-semibold">House rules</h3>
          </div>
          {listing.houseRules.map((r) => (
            <p key={r} className="text-sm mb-1">
              {r}
            </p>
          ))}
          <a href="#" className="text-sm underline font-semibold mt-2 inline-block">
            Learn more
          </a>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <ShieldAlert size={20} strokeWidth={1.3} />
            <h3 className="font-semibold">Safety & property</h3>
          </div>
          {listing.safety.map((s) => (
            <p key={s} className="text-sm mb-1">
              {s}
            </p>
          ))}
          <a href="#" className="text-sm underline font-semibold mt-2 inline-block">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
