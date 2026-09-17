import Image from "next/image";
import { photos } from "@/data/listing";

export default function WhereYoullSleep() {
  const rooms = [photos[3], photos[0]];

  return (
    <div className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {rooms.map((p, i) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden border border-gray-200 relative h-64 photo-tile"
          >
            <Image src={p.url} alt={p.room} fill sizes="25vw" className="object-cover" />
            <div className="absolute bottom-3 left-3 bg-white/95 rounded px-2 py-1 text-xs font-medium">
              {i === 0 ? "Bedroom" : "Living room"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
