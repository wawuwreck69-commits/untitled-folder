export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "5th Element built all the stainless steel railings and custom metalwork for our packing facility. Their attention to detail and ability to work within our food-safe requirements was outstanding. We continue to call them for every project.",
    author: "Operations Manager",
    role: "Facilities",
    company: "Jealous Fruits",
  },
  {
    quote:
      "I needed a custom aluminum flatdeck for my work truck and they nailed it. Perfect fit, great welds, and they even added features I hadn't thought of. These guys know metal.",
    author: "Dave Kali",
    role: "Owner",
    company: "DK Contracting",
  },
]
