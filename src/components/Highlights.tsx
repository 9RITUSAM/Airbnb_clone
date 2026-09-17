import { Sofa, Fan, DoorOpen } from "lucide-react";
import { listing } from "@/data/listing";

const ICONS: Record<string, React.ElementType> = {
  sofa: Sofa,
  fan: Fan,
  doorOpen: DoorOpen,
};

export default function Highlights() {
  return (
    <div className="py-6 border-b border-gray-200 space-y-6">
      {listing.highlights.map((h) => {
        const Icon = ICONS[h.icon];
        return (
          <div key={h.title} className="flex items-start gap-4">
            <Icon size={26} strokeWidth={1.3} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{h.title}</p>
              <p className="text-sm text-gray-500">{h.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
