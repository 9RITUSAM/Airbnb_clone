"use client";

import { Search, Menu, CircleUserRound, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 lg:px-20 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-[#FF385C] font-bold text-2xl a11y-focus"
          aria-label="Airbnb home"
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
            <path d="M16 1c-1.5 0-2.7.9-3.4 2.2C9.5 8.6 4 17.8 4 21.5 4 26.2 7.6 30 16 30s12-3.8 12-8.5c0-3.7-5.5-12.9-8.6-18.3C18.7 1.9 17.5 1 16 1zm0 24.5c-4.1 0-7.5-2.4-7.5-5.9 0-2.2 2.9-8.3 7.5-15.3 4.6 7 7.5 13.1 7.5 15.3 0 3.5-3.4 5.9-7.5 5.9z" />
          </svg>
          <span className="hidden sm:inline">airbnb</span>
        </a>

        {/* Search pill */}
        <button
          className="hidden md:flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow py-2 pl-6 pr-2 gap-1 a11y-focus"
          aria-label="Search"
        >
          <span className="text-sm font-medium pr-4 border-r border-gray-300">
            Anywhere
          </span>
          <span className="text-sm font-medium px-4 border-r border-gray-300">
            Anytime
          </span>
          <span className="text-sm text-gray-500 pl-4 pr-2">Add guests</span>
          <span className="bg-[#FF385C] rounded-full p-2 text-white">
            <Search size={16} />
          </span>
        </button>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden lg:block text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-100 a11y-focus"
          >
            Become a host
          </a>
          <button
            className="p-2 rounded-full hover:bg-gray-100 a11y-focus"
            aria-label="Choose a language and region"
          >
            <Globe size={18} />
          </button>
          <button
            className="flex items-center gap-3 border border-gray-300 rounded-full py-2 pl-3 pr-2 hover:shadow-md transition-shadow a11y-focus"
            aria-label="Main menu"
          >
            <Menu size={16} />
            <CircleUserRound size={26} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
