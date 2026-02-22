export interface Product {
  slug: string
  name: string
  price: number
  category: "truck" | "marine" | "architectural" | "apparel"
  image: string
  description: string
  longDescription: string
  specs: string[]
  features: string[]
  useCases: string[]
  leadTime: string
  shippingNote: string
  returnsPolicy: string
  faq: { question: string; answer: string }[]
}

export const products: Product[] = [
  {
    slug: "garbage-receptacles",
    name: "Custom Garbage Receptacles",
    price: 850,
    category: "architectural",
    image: "/images/product-receptacle.jpg",
    description:
      "Heavy-duty aluminum garbage receptacles designed for commercial, municipal, and residential applications. Built to withstand weather, impact, and daily use.",
    longDescription:
      "Our custom garbage receptacles are precision-fabricated from aluminum with optional stainless steel liners. Available in multiple sizes and finishes, these units are designed for high-traffic environments including wineries, parks, commercial streetscapes, and public facilities. Each unit is CNC-formed and TIG-welded for a clean, durable finish.",
    specs: [
      "Material: 5052-H32 Aluminum (standard), Stainless Steel optional",
      "Capacity: 30-gallon / 45-gallon / 60-gallon",
      "Finish: Mill, brushed, powder-coated (custom colors)",
      "Mounting: Surface-mount, in-ground, or freestanding",
      "Liner: Removable galvanized or stainless steel",
    ],
    features: [
      "Weather-resistant construction",
      "Removable inner liner for easy servicing",
      "Custom logo or branding laser-cut options",
      "Bear-resistant locking mechanism available",
      "Modular design for recycling station configuration",
    ],
    useCases: [
      "Municipal streetscapes and parks",
      "Wineries and hospitality venues",
      "Commercial building exteriors",
      "Residential strata developments",
    ],
    leadTime: "3-5 weeks depending on quantity and finish",
    shippingNote:
      "Ships via freight across North America. Local delivery and installation available in the Okanagan.",
    returnsPolicy:
      "Custom fabricated items are non-returnable. Defects in materials or workmanship are covered under our 2-year warranty.",
    faq: [
      {
        question: "Can I customize the size and finish?",
        answer:
          "Yes. We fabricate to your specifications. Choose from mill finish, brushed, or powder-coated in any RAL color.",
      },
      {
        question: "Do you offer bear-resistant models?",
        answer:
          "Yes. We offer a locking mechanism that meets bear-resistant standards for parks and campgrounds.",
      },
      {
        question: "What is the minimum order quantity?",
        answer:
          "No minimum. We fabricate single units or production runs of 100+.",
      },
    ],
  },
  {
    slug: "dock-cleats",
    name: "Boat Dock Cleats",
    price: 125,
    category: "marine",
    image: "/images/product-cleat.jpg",
    description:
      "Marine-grade aluminum dock cleats precision CNC-machined for strength and corrosion resistance. Perfect for docks, marinas, and watercraft.",
    longDescription:
      "Our dock cleats are CNC-machined from solid 6061-T6 aluminum billet, providing exceptional strength-to-weight ratio and corrosion resistance in freshwater and saltwater environments. Available in multiple sizes for everything from personal watercraft to large vessel moorings. Each cleat is deburred, polished, and ready to install.",
    specs: [
      "Material: 6061-T6 Aluminum billet",
      'Sizes: 6", 8", 10", 12"',
      "Finish: Polished, anodized, or powder-coated",
      "Hardware: 316 stainless steel mounting bolts included",
      "Load rating: Exceeds industry standards for recreational marine use",
    ],
    features: [
      "CNC-machined from solid billet for maximum strength",
      "Corrosion-resistant for fresh and saltwater",
      "Smooth edges - no casting flash or sharp points",
      "Mounting hardware included",
      "Available in custom sizes for commercial applications",
    ],
    useCases: [
      "Residential and commercial docks",
      "Marina installations",
      "Custom boat builds",
      "Waterfront property upgrades",
    ],
    leadTime: "1-2 weeks for standard sizes, 3-4 weeks for custom",
    shippingNote:
      "Ships via courier across North America. Free shipping on orders over $500.",
    returnsPolicy:
      "Standard sizes may be returned unused within 30 days. Custom sizes are non-returnable.",
    faq: [
      {
        question: "Are these suitable for saltwater use?",
        answer:
          "Yes. 6061-T6 aluminum has excellent corrosion resistance. For extreme saltwater environments, we recommend our anodized finish.",
      },
      {
        question: "Can you make custom sizes?",
        answer:
          "Absolutely. We can machine cleats to any specification for commercial or custom applications.",
      },
    ],
  },
  {
    slug: "floor-drains",
    name: "Custom Floor Drains",
    price: 275,
    category: "architectural",
    image: "/images/product-drain.jpg",
    description:
      "Stainless steel and aluminum floor drains designed for commercial kitchens, breweries, wineries, and industrial facilities.",
    longDescription:
      "Our custom floor drains are fabricated to meet the specific requirements of food processing, beverage production, and industrial environments. CNC-cut grating patterns ensure optimal flow rates while maintaining safety. Available in stainless steel (304 or 316) or aluminum, with options for standard or custom drain body connections.",
    specs: [
      "Material: 304 Stainless Steel (standard), 316 SS or Aluminum available",
      'Grate sizes: 6"x6" to 24"x24" (custom available)',
      "Finish: #4 brushed (standard), electropolished, or mill",
      "Load class: Light, medium, or heavy duty",
      "Connection: Standard 2\", 3\", 4\" drain body or custom",
    ],
    features: [
      "CNC-cut grating for precise flow patterns",
      "Food-safe materials and finishes",
      "Removable grate for easy cleaning",
      "Custom sizing for retrofit or new construction",
      "Meets health and safety regulations for food processing",
    ],
    useCases: [
      "Commercial kitchens and restaurants",
      "Breweries and wineries",
      "Food processing plants",
      "Industrial wash bays",
      "Pool and spa surrounds",
    ],
    leadTime: "2-4 weeks depending on material and complexity",
    shippingNote:
      "Ships via courier or freight depending on size. Local delivery available in the Okanagan.",
    returnsPolicy:
      "Custom fabricated items are non-returnable. Defects covered under 2-year warranty.",
    faq: [
      {
        question: "Which material should I choose?",
        answer:
          "304 SS is ideal for most commercial applications. 316 SS is recommended for highly corrosive environments (chemical plants, saltwater). Aluminum works well for lighter-duty applications.",
      },
      {
        question: "Can you match existing drain body connections?",
        answer:
          "Yes. Send us your existing drain specs and we'll fabricate a grate and frame to match.",
      },
    ],
  },
  {
    slug: "dad-hat-black",
    name: "Dad Hat - Black Logo Embroidered",
    price: 35,
    category: "apparel",
    image: "/images/product-hat.jpg",
    description:
      "Classic dad hat featuring the 5th Element Manufacturing embroidered logo. One size fits most.",
    longDescription:
      "Rep the shop with our signature dad hat. Features a high-quality embroidered 5th Element Manufacturing logo on the front. Unstructured, low-profile design with an adjustable strap for a comfortable fit. Perfect for the shop, the job site, or just everyday wear.",
    specs: [
      "Material: 100% cotton twill",
      "Color: Black with white/amber embroidery",
      "Closure: Adjustable brass buckle strap",
      "Profile: Unstructured, low-profile",
      "One size fits most",
    ],
    features: [
      "High-quality embroidered logo",
      "Comfortable unstructured fit",
      "Adjustable brass buckle closure",
      "Pre-curved brim",
      "Breathable cotton construction",
    ],
    useCases: [
      "Everyday casual wear",
      "Job site and shop wear",
      "Brand merchandise and gifts",
    ],
    leadTime: "Ships within 3-5 business days",
    shippingNote:
      "Ships via standard mail across North America. Free shipping on orders over $100.",
    returnsPolicy:
      "Unworn items with tags attached may be returned within 30 days for a full refund.",
    faq: [
      {
        question: "Is this adjustable?",
        answer:
          "Yes. The brass buckle strap adjusts to fit most head sizes comfortably.",
      },
      {
        question: "Do you offer other colors?",
        answer:
          "Currently available in black only. Check back for new colors and styles.",
      },
    ],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}
