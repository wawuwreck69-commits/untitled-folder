export interface GalleryItem {
  id: string
  alt: string
  category: "stairs" | "marine" | "architectural" | "welding" | "trucks" | "all"
  title: string
  description: string
  image: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    alt: "Custom aluminum staircase with glass railing panels installed at a Kelowna winery",
    category: "stairs",
    title: "Winery Staircase",
    description: "Aluminum staircase with glass infill panels - Kelowna winery",
    image: "/images/staircase.jpg",
  },
  {
    id: "2",
    alt: "TIG-welded stainless steel railing on a lakefront residential deck",
    category: "stairs",
    title: "Lakefront Railing",
    description: "Stainless steel cable railing - Okanagan Lake residence",
    image: "/images/staircase.jpg",
  },
  {
    id: "3",
    alt: "Custom aluminum boat hull under fabrication in the 5th Element shop",
    category: "marine",
    title: "Boat Hull Build",
    description: "20ft aluminum jet boat hull - in-progress build",
    image: "/images/custom-boat.jpg",
  },
  {
    id: "4",
    alt: "Marine-grade aluminum swim platform with teak inlay",
    category: "marine",
    title: "Swim Platform",
    description: "Custom swim platform with teak inlay for a ski boat",
    image: "/images/gallery-marine.jpg",
  },
  {
    id: "5",
    alt: "CNC-routed aluminum sign panel with laser-cut lettering for a local business",
    category: "architectural",
    title: "Business Signage",
    description: "CNC-routed aluminum sign panel with backlit lettering",
    image: "/images/gallery-sign.jpg",
  },
  {
    id: "6",
    alt: "Custom powder-coated aluminum garbage receptacles installed at a park",
    category: "architectural",
    title: "Park Receptacles",
    description: "Custom garbage receptacles - municipal park installation",
    image: "/images/product-receptacle.jpg",
  },
  {
    id: "7",
    alt: "Close-up of precision TIG weld bead on aluminum pipe",
    category: "welding",
    title: "TIG Weld Detail",
    description: "Precision TIG weld on 6061 aluminum pipe joint",
    image: "/images/gallery-weld.jpg",
  },
  {
    id: "8",
    alt: "Custom aluminum flatdeck mounted on a Ford F-350 service truck",
    category: "trucks",
    title: "Service Flatdeck",
    description: "Custom aluminum flatdeck - Ford F-350 service truck",
    image: "/images/truck-deck.jpg",
  },
  {
    id: "9",
    alt: "Stainless steel commercial kitchen floor drain with CNC-cut grating",
    category: "architectural",
    title: "Commercial Floor Drain",
    description: "316 SS floor drain grate - brewery installation",
    image: "/images/product-drain.jpg",
  },
  {
    id: "10",
    alt: "Aluminum headache rack with integrated LED work lights on a Dodge Ram",
    category: "trucks",
    title: "Headache Rack",
    description: "Aluminum headache rack with LED lights - Dodge Ram 3500",
    image: "/images/gallery-headrack.jpg",
  },
  {
    id: "11",
    alt: "Multi-stack welding station with aluminum components in progress",
    category: "welding",
    title: "Fabrication in Progress",
    description: "Multiple projects on the welding bench",
    image: "/images/hero-welding.jpg",
  },
  {
    id: "12",
    alt: "Custom aluminum dock with cleats and railing on Okanagan Lake",
    category: "marine",
    title: "Custom Dock",
    description: "Aluminum dock system with integrated cleats - Okanagan Lake",
    image: "/images/gallery-dock.jpg",
  },
]

export const galleryCategories = [
  { value: "all", label: "All Projects" },
  { value: "stairs", label: "Stairs & Railings" },
  { value: "marine", label: "Marine" },
  { value: "architectural", label: "Architectural" },
  { value: "welding", label: "Welding" },
  { value: "trucks", label: "Trucks" },
] as const
