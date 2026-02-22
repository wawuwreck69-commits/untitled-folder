export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: string
  image: string
}

export const manufacturingServices: Service[] = [
  {
    slug: "3d-cad-design",
    title: "3D CAD Design & Drafting",
    shortTitle: "3D CAD Design",
    description:
      "Professional 3D modeling and technical drafting for fabrication-ready designs. From concept sketches to production drawings.",
    icon: "PenTool",
    image: "/images/about-shop.jpg",
  },
  {
    slug: "cnc-router-processing",
    title: "CNC Router Processing",
    shortTitle: "CNC Router",
    description:
      "Precision CNC routing for aluminum, stainless steel, and composite materials. Complex profiles, cutouts, and patterns.",
    icon: "Cpu",
    image: "/images/cnc-router.jpg",
  },
  {
    slug: "cnc-press-brake-forming",
    title: "CNC Press Brake Forming",
    shortTitle: "CNC Forming",
    description:
      "Accurate CNC press brake forming for complex bends, angles, and shapes in sheet and plate metals up to 10 feet.",
    icon: "ArrowDownUp",
    image: "/images/press-brake.jpg",
  },
  {
    slug: "welding-fabrication",
    title: "Welding & Fabrication",
    shortTitle: "Welding",
    description:
      "CWB-certified TIG and MIG welding for aluminum, stainless steel, and mild steel. Structural and cosmetic applications.",
    icon: "Flame",
    image: "/images/hero-welding.jpg",
  },
  {
    slug: "custom-boats",
    title: "Custom Aluminum Boats",
    shortTitle: "Custom Boats",
    description:
      "Design and fabrication of custom aluminum boats, pontoons, and marine structures. From hull to hardware.",
    icon: "Ship",
    image: "/images/custom-boat.jpg",
  },
]

export const productCategories: Service[] = [
  {
    slug: "truck-decks-accessories",
    title: "Truck Decks & Accessories",
    shortTitle: "Truck Decks",
    description:
      "Custom aluminum flatdecks, headache racks, toolboxes, and accessories for commercial and recreational trucks.",
    icon: "Truck",
    image: "/images/truck-deck.jpg",
  },
  {
    slug: "structures-stairs",
    title: "Structures, Stairs & Railings",
    shortTitle: "Structures",
    description:
      "Aluminum and stainless steel stairs, railings, platforms, and structural fabrications for commercial and residential projects.",
    icon: "Building2",
    image: "/images/staircase.jpg",
  },
  {
    slug: "marine-fabrication",
    title: "Marine Fabrication",
    shortTitle: "Marine",
    description:
      "Custom marine fabrication including dock hardware, boat components, swim platforms, and waterfront structures.",
    icon: "Anchor",
    image: "/images/gallery-dock.jpg",
  },
  {
    slug: "architectural-outdoor",
    title: "Architectural & Outdoor Products",
    shortTitle: "Architectural",
    description:
      "Custom architectural metalwork, outdoor furniture, fire pits, planters, and decorative elements.",
    icon: "Landmark",
    image: "/images/gallery-sign.jpg",
  },
]
