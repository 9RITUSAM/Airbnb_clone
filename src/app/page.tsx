"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PhotoGrid from "@/components/PhotoGrid";
import TitleBar from "@/components/TitleBar";
import StickyTabs from "@/components/StickyTabs";
import SummaryCard from "@/components/SummaryCard";
import BookingCard from "@/components/BookingCard";
import Highlights from "@/components/Highlights";
import Description from "@/components/Description";
import WhereYoullSleep from "@/components/WhereYoullSleep";
import Amenities from "@/components/Amenities";
import Calendar from "@/components/Calendar";
import Reviews from "@/components/Reviews";
import LocationMap from "@/components/LocationMap";
import HostSection from "@/components/HostSection";
import ThingsToKnow from "@/components/ThingsToKnow";
import NearbyStays from "@/components/NearbyStays";
import PhotoTour from "@/components/PhotoTour";
import Lightbox from "@/components/Lightbox";
import { listing, photos, photoGroups } from "@/data/listing";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Photos");
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function handleTabChange(tab: string) {
    setActiveTab(tab);
    const el = document.getElementById(tab.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PhotoGrid
        photos={photos}
        onOpenTour={() => setTourOpen(true)}
        onOpenLightbox={(i) => setLightboxIndex(i)}
      />
      <TitleBar title={listing.title} />
      <StickyTabs active={activeTab} onChange={handleTabChange} />

      <main className="max-w-[1920px] mx-auto px-6 lg:px-20 grid lg:grid-cols-3 gap-12 pb-16">
        <div id="photos" className="lg:col-span-2">
          <SummaryCard />
          <Highlights />
          <Description />
          <WhereYoullSleep />
          <Amenities />
          <Calendar />
          <Reviews />
          <LocationMap />
          <HostSection />
          <ThingsToKnow />
        </div>

        <div className="hidden lg:block">
          <BookingCard />
        </div>
      </main>

      <div className="max-w-[1920px] mx-auto px-6 lg:px-20 border-t border-gray-200">
        <NearbyStays />
      </div>

      {tourOpen && (
        <PhotoTour
          groups={photoGroups}
          onClose={() => setTourOpen(false)}
          onOpenLightbox={(i) => {
            setTourOpen(false);
            setLightboxIndex(i);
          }}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
          onBackToGrid={() => {
            setLightboxIndex(null);
            setTourOpen(true);
          }}
        />
      )}
    </div>
  );
}
