"use client";

const TABS = ["Photos", "Amenities", "Reviews", "Location"];

export default function StickyTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
        <nav className="flex items-center gap-8" aria-label="Listing sections">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`relative py-4 text-sm font-medium a11y-focus transition-colors ${
                active === tab ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              aria-current={active === tab}
            >
              {tab}
              <span
                className={`absolute left-0 right-0 -bottom-px h-[2px] bg-black transition-transform duration-200 origin-left ${
                  active === tab ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
