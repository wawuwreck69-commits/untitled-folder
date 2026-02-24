export type FishWhistleModel = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  detailSummary: string;
  gallery: string[];
  specs: {
    loa: string;
    engine: string;
    hull: string;
    dryWeight: string;
    maxSpeed: string;
    capacity: string;
  };
};

export const fishWhistleModels: FishWhistleModel[] = [
  {
    id: "fw-210",
    name: "FW Storm Series (FW210/FW232)",
    price: "From US$110,000",
    category: "Offshore Fishing & Dive",
    image: "/fishwhistle/model-fw210-main.jpg",
    description:
      "Modified plumb bow geometry, high freeboard, and a weather-capable cabin for rough-water confidence.",
    detailSummary:
      "The Storm Series is engineered for stability, cabin comfort, and heavy offshore duty with serious load capacity.",
    gallery: [
      "/fishwhistle/model-fw210-main.jpg",
      "/fishwhistle/model-fw232-main.jpg",
      "/fishwhistle/home-exterior-fw232.jpg",
      "/fishwhistle/home-interior-fw232.jpg",
    ],
    specs: {
      loa: "21' to 23'",
      engine: "Single 150-350hp or twin 90-250hp",
      hull: "Welded aluminum modified plumb bow",
      dryWeight: "Approx 4,500 lb",
      maxSpeed: "Model dependent",
      capacity: "High-load offshore platform",
    },
  },
  {
    id: "fw-sole",
    name: "FW SOLE Pontoon",
    price: "Contact for Pricing",
    category: "Water Sports Boats",
    image: "/fishwhistle/model-fw-sole-main.jpg",
    description:
      "A welded aluminum platform designed for stable family cruising, utility, and all-day deck comfort.",
    detailSummary:
      "FW SOLE emphasizes deck space, stability, and low-maintenance ownership for multi-purpose use.",
    gallery: [
      "/fishwhistle/model-fw-sole-main.jpg",
      "/fishwhistle/use-water-sports.jpg",
      "/fishwhistle/home-profile-fw151.jpg",
      "/fishwhistle/home-hero-fw232.jpg",
    ],
    specs: {
      loa: "Varies by build",
      engine: "Outboard compatible",
      hull: "Welded aluminum pontoon platform",
      dryWeight: "Build dependent",
      maxSpeed: "Build dependent",
      capacity: "Family and gear focused",
    },
  },
  {
    id: "fw151-rfpfl",
    name: "14'6\" FW174 RFPFL",
    price: "Contact for Pricing",
    category: "Small Fishing Boats",
    image: "/fishwhistle/model-fw151-rfpfl-main.jpg",
    description:
      "A compact welded hull tuned for practical fishing utility, easy transport, and rugged day-to-day use.",
    detailSummary:
      "FW174 RFPFL provides durable aluminum construction in a small-footprint layout for versatile inland boating.",
    gallery: [
      "/fishwhistle/model-fw151-rfpfl-main.jpg",
      "/fishwhistle/use-small-fishing.jpg",
      "/fishwhistle/home-about-fw151-build.jpg",
      "/fishwhistle/about-workshop.jpg",
    ],
    specs: {
      loa: "14'6\"",
      engine: "Outboard compatible",
      hull: "Welded aluminum V/utility hull",
      dryWeight: "Build dependent",
      maxSpeed: "Build dependent",
      capacity: "Small-crew fishing layout",
    },
  },
  {
    id: "fw151",
    name: "12'6\" Model FW151",
    price: "Contact for Pricing",
    category: "Dinghies & Tenders",
    image: "/fishwhistle/model-fw151-main.jpg",
    description:
      "A proven small-format Fish Whistle build used as a tender, utility runabout, and nearshore fishing boat.",
    detailSummary:
      "FW151 is optimized for durability and low maintenance while staying trailer-friendly and easy to launch.",
    gallery: [
      "/fishwhistle/model-fw151-main.jpg",
      "/fishwhistle/home-profile-fw151.jpg",
      "/fishwhistle/use-dinghy.jpg",
      "/fishwhistle/contact-side.jpg",
    ],
    specs: {
      loa: "12'6\"",
      engine: "Outboard compatible",
      hull: "Welded aluminum",
      dryWeight: "Light utility class",
      maxSpeed: "Build dependent",
      capacity: "Tender and utility crew",
    },
  },
  {
    id: "fw127",
    name: "FW127 Catamaran Tender",
    price: "Contact for Pricing",
    category: "Dinghies & Tenders",
    image: "/fishwhistle/model-fw127-main.jpg",
    description:
      "Compact catamaran-style tender layout for dependable transfer duty and stable close-quarters handling.",
    detailSummary:
      "FW127 focuses on practical boarding, storage, and tender utility with the durability of welded aluminum.",
    gallery: [
      "/fishwhistle/model-fw127-main.jpg",
      "/fishwhistle/use-dinghy.jpg",
      "/fishwhistle/about-workshop.jpg",
      "/fishwhistle/home-about-fw151-build.jpg",
    ],
    specs: {
      loa: "12' to 13' class",
      engine: "Outboard compatible",
      hull: "Welded aluminum catamaran tender",
      dryWeight: "Lightweight tender class",
      maxSpeed: "Build dependent",
      capacity: "Tender transfer and gear",
    },
  },
  {
    id: "fw109",
    name: "FW109 Dinghy Tender",
    price: "Contact for Pricing",
    category: "Dinghies & Tenders",
    image: "/fishwhistle/model-fw109-main.jpg",
    description:
      "A small rigid dinghy platform made for yacht tender use, beach landings, and everyday coastal errands.",
    detailSummary:
      "FW109 is a low-maintenance aluminum alternative to inflatable tenders with better puncture resistance.",
    gallery: [
      "/fishwhistle/model-fw109-main.jpg",
      "/fishwhistle/use-dinghy.jpg",
      "/fishwhistle/model-fw127-main.jpg",
      "/fishwhistle/contact-side.jpg",
    ],
    specs: {
      loa: "10' to 11' class",
      engine: "Small outboard compatible",
      hull: "Welded aluminum dinghy hull",
      dryWeight: "Ultra-light tender class",
      maxSpeed: "Build dependent",
      capacity: "Short-hop tender crew",
    },
  },
  {
    id: "fw192",
    name: "FW192 Work Boat",
    price: "Contact for Pricing",
    category: "Military & Professional",
    image: "/fishwhistle/model-fw192-main.jpg",
    description:
      "A mission-ready workboat configuration for patrol, commercial utility, and professional deployments.",
    detailSummary:
      "FW192 emphasizes deck utility, payload, and hard-use durability for institutional and commercial users.",
    gallery: [
      "/fishwhistle/model-fw192-main.jpg",
      "/fishwhistle/military-hero.jpg",
      "/fishwhistle/military-support.jpg",
      "/fishwhistle/home-exterior-fw232.jpg",
    ],
    specs: {
      loa: "19' class",
      engine: "Outboard compatible",
      hull: "Heavy-duty welded aluminum work hull",
      dryWeight: "Workboat class",
      maxSpeed: "Mission dependent",
      capacity: "Crew and payload focused",
    },
  },
];
