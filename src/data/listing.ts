export interface Photo {
  id: string;
  url: string;
  room: string;
  caption: string;
}

export interface PhotoGroup {
  title: string;
  subtitle: string;
  photos: Photo[];
}

const IMG = {
  livingRoom: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1600&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
    "https://images.unsplash.com/photo-1631048283445-1f0dc5ae6b8b?w=1600&q=80",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1600&q=80",
  ],
  kitchen: [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&q=80",
    "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1600&q=80",
    "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1600&q=80",
  ],
  bedroom: [
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&q=80",
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=80",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1600&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
  ],
  bathroom: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
  ],
  gym: [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1600&q=80",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=80",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1600&q=80",
  ],
  exterior: [
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1600&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=80",
  ],
  pool: [
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1600&q=80",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=80",
  ],
  additional: [
    "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1600&q=80",
    "https://images.unsplash.com/photo-1560449017-7d3aa8e2b8f4?w=1600&q=80",
    "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=1600&q=80",
  ],
};

function makeGroup(
  title: string,
  subtitle: string,
  urls: string[],
  count: number
): PhotoGroup {
  const list: Photo[] = [];
  for (let i = 0; i < count; i++) {
    list.push({
      id: `${title.toLowerCase().replace(/\s+/g, "-")}-${i}`,
      url: urls[i % urls.length],
      room: title,
      caption: subtitle,
    });
  }
  return { title, subtitle, photos: list };
}

export const photoGroups: PhotoGroup[] = [
  makeGroup("Living room 1", "Sofa · Air conditioning · Ceiling fan · TV", IMG.livingRoom, 3),
  makeGroup("Living room 2", "Ceiling fan · Hot tub", IMG.livingRoom.slice(2), 3),
  makeGroup("Full kitchen", "Fridge · Stove · Microwave · Dishwasher", IMG.kitchen, 4),
  makeGroup(
    "Bedroom",
    "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    IMG.bedroom,
    5
  ),
  makeGroup("Full bathroom", "Hairdryer · Hot water · Shampoo · Shower gel", IMG.bathroom, 1),
  makeGroup("Gym", "Air conditioning · Gym · Exercise equipment · Ceiling fan", IMG.gym, 5),
  makeGroup("Exterior", "", IMG.exterior, 3),
  makeGroup("Pool", "Pool", IMG.pool, 10),
  makeGroup("Additional photos", "", IMG.additional, 9),
];

export const photos: Photo[] = photoGroups.flatMap((g) => g.photos);

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
    reviews: 1463,
    rating: 4.68,
    bornDecade: "80s",
    school: "NICMAR GOA",
    responseRate: 100,
    respondsWithin: "an hour",
  },
  coHosts: [
    { name: "Sharath" },
    { name: "Aman Dev Pahwa" },
    { name: "Maria Karen Priyanka" },
    { name: "Simran" },
    { name: "Pallavi" },
    { name: "Sanyukta" },
    { name: "Shruti" },
    { name: "Amisha" },
  ],
  price: 28499,
  nights: 5,
  checkIn: "2026-10-18",
  checkOut: "2026-10-23",
  highlights: [
    {
      icon: "sofa",
      title: "Outdoor entertainment",
      text: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "fan",
      title: "Designed for staying cool",
      text: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "doorOpen",
      title: "Self check-in",
      text: "You can check in with the building staff.",
    },
  ],
  description:
    "Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Enjoy high-speed WiFi, Smart TV, pet-friendly comfort, and stylish interiors. Just minutes from Candolim Beach, popular cafés, restaurants, and nightlife, it's the ideal base for your Goa getaway.",
  amenities: [
    { icon: "utensils", label: "Kitchen" },
    { icon: "wifi", label: "Wifi" },
    { icon: "briefcase", label: "Dedicated workspace" },
    { icon: "car", label: "Free parking on premises" },
    { icon: "waves", label: "Pool" },
    { icon: "bath", label: "Hot tub" },
    { icon: "pawPrint", label: "Pets allowed" },
    { icon: "camera", label: "Exterior security cameras on property" },
    { icon: "alarmSmoke", label: "Carbon monoxide alarm", unavailable: true },
    { icon: "alarmSmoke", label: "Smoke alarm", unavailable: true },
  ],
  totalAmenities: 50,
  ratingBreakdown: [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 6 },
    { stars: 3, pct: 0 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 2 },
  ],
  categoryRatings: [
    { label: "Cleanliness", value: 5.0, icon: "sparkles" },
    { label: "Accuracy", value: 5.0, icon: "checkCircle" },
    { label: "Check-in", value: 5.0, icon: "key" },
    { label: "Communication", value: 5.0, icon: "messageCircle" },
    { label: "Location", value: 4.8, icon: "map" },
    { label: "Value", value: 4.8, icon: "tag" },
  ],
  reviewTags: [
    { label: "Comfort", count: 6 },
    { label: "Accuracy", count: 5 },
    { label: "Hot tub", count: 5 },
    { label: "Condition", count: 4 },
    { label: "Hospitality", count: 8 },
    { label: "Cleanliness", count: 4 },
    { label: "Amenities", count: 2 },
  ],
  reviews: [
    {
      name: "Amit",
      tenure: "2 months on Airbnb",
      rating: 5,
      date: "1 week ago",
      text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    },
    {
      name: "Aheesh",
      tenure: "3 years on Airbnb",
      rating: 5,
      date: "2 weeks ago",
      text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    },
    {
      name: "Samiksha",
      tenure: "8 months on Airbnb",
      rating: 5,
      date: "May 2026",
      text: "the host nitish was really great help",
    },
    {
      name: "Vedant",
      tenure: "4 years on Airbnb",
      rating: 5,
      date: "May 2026",
      text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.",
    },
    {
      name: "Vaibhav S",
      tenure: "3 years on Airbnb",
      rating: 5,
      date: "May 2026",
      text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
    },
    {
      name: "Mohd",
      tenure: "5 years on Airbnb",
      rating: 5,
      date: "May 2026",
      text: "Great place. Exactly as described in the listing.",
    },
  ],
  location: {
    area: "Candolim, Goa, India",
    blurb:
      "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
  },
  cancellationPolicy:
    "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
  houseRules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
  safety: [
    "Carbon monoxide alarm not reported",
    "Smoke alarm not reported",
    "Exterior security cameras on property",
  ],
  nearbyStays: [
    {
      title: "Beautiful Studio with a view to die for",
      price: 23600,
      rating: 4.91,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    },
    {
      title: "NAQAB - 1bhk with private pool",
      price: 42218,
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    },
    {
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      price: 44506,
      rating: 4.94,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    },
    {
      title: "The Tropical Studio | 5 mins to Beach",
      price: 22824,
      rating: 4.96,
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
    },
    {
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      price: 39942,
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    },
  ],
};
