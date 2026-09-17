"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(startDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function MonthGrid({
  year,
  month,
  selected,
  onSelect,
}: {
  year: number;
  month: number;
  selected: { start: number; end: number; year: number; month: number };
  onSelect: (day: number) => void;
}) {
  const cells = buildMonth(year, month);
  const monthName = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const today = new Date();
  const isPast = (d: number) =>
    new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div>
      <p className="text-center font-semibold mb-4">{monthName}</p>
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
        {WEEKDAYS.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
        {cells.map((d, i) => {
          if (d === null) return <span key={i} />;
          const disabled = isPast(d);
          const inRange =
            selected.month === month &&
            selected.year === year &&
            d >= selected.start &&
            d <= selected.end;
          const isEdge =
            selected.month === month &&
            selected.year === year &&
            (d === selected.start || d === selected.end);
          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() => onSelect(d)}
              className={`h-9 w-9 mx-auto rounded-full text-sm transition-colors a11y-focus
                ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:border hover:border-gray-800"}
                ${inRange && !isEdge ? "bg-gray-100 rounded-none" : ""}
                ${isEdge ? "bg-black text-white" : ""}
              `}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Calendar() {
  const [monthOffset, setMonthOffset] = useState(0);
  const base = new Date(2026, 9, 1); // October 2026
  const y1 = base.getFullYear();
  const m1 = base.getMonth() + monthOffset;
  const [selected, setSelected] = useState({ start: 18, end: 23, year: 2026, month: 9 });

  const secondDate = new Date(y1, m1 + 1, 1);

  function handleSelect(day: number, month: number, year: number) {
    setSelected((prev) => {
      if (year !== prev.year || month !== prev.month || day < prev.start) {
        return { start: day, end: day, year, month };
      }
      return { ...prev, end: day };
    });
  }

  return (
    <div id="calendar" className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-1">5 nights in Candolim</h2>
      <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <CalendarIcon size={14} />
        18 Oct 2026 - 23 Oct 2026
      </p>

      <div className="relative">
        <button
          onClick={() => setMonthOffset((o) => o - 1)}
          className="absolute left-0 top-0 p-2 rounded-full hover:bg-gray-100 a11y-focus z-10"
          aria-label="Previous month"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setMonthOffset((o) => o + 1)}
          className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100 a11y-focus z-10"
          aria-label="Next month"
        >
          <ChevronRight size={18} />
        </button>

        <div className="grid grid-cols-2 gap-12 px-10">
          <MonthGrid
            year={y1}
            month={m1}
            selected={selected}
            onSelect={(d) => handleSelect(d, m1, y1)}
          />
          <MonthGrid
            year={secondDate.getFullYear()}
            month={secondDate.getMonth()}
            selected={selected}
            onSelect={(d) => handleSelect(d, secondDate.getMonth(), secondDate.getFullYear())}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 a11y-focus" aria-label="Toggle flexible dates">
          <CalendarIcon size={16} />
        </button>
        <button
          onClick={() => setSelected({ start: 18, end: 23, year: 2026, month: 9 })}
          className="text-sm font-semibold underline a11y-focus"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
