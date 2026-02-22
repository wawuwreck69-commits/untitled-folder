export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welding-tolerances-marine-builds",
    title: "Tight Tolerance Welding in Marine Environments",
    excerpt:
      "How we keep structural weldments true under salt exposure, cyclic loading, and long service windows.",
    date: "Jan 12, 2026",
    readTime: "6 min read",
    category: "Marine",
    body: [
      "Marine fabrication fails in the details long before it fails in the field. Weld sequence, heat input, and fixture strategy all decide whether assemblies stay true after cooldown.",
      "On larger hull-adjacent parts, we prioritize symmetry in pass order and lock datums early. This prevents cumulative drift and keeps downstream hole patterns aligned without late-stage force fitting.",
      "Surface prep and post-weld treatment are treated as structural requirements, not cosmetic extras. In salt-exposed systems, corrosion resistance is inseparable from weld quality.",
    ],
  },
  {
    slug: "press-brake-setup-repeatability",
    title: "Press Brake Setup for Repeatable Forming",
    excerpt:
      "A practical setup sequence for reducing variation across batches while protecting edge quality and throughput.",
    date: "Dec 04, 2025",
    readTime: "5 min read",
    category: "Process",
    body: [
      "Repeatability starts before the first bend. Material verification, tool condition, and bend order should be locked before any trial run reaches production quantity.",
      "We use a short qualification run to validate angle, springback compensation, and edge behavior under final tooling. That validation becomes the baseline for operators and reorders.",
      "The result is less adjustment at the brake, cleaner handoff between shifts, and fewer parts that need downstream correction.",
    ],
  },
  {
    slug: "designing-fabrication-ready-cad",
    title: "Designing Fabrication-Ready CAD for the Shop Floor",
    excerpt:
      "Drawing standards and model prep that eliminate rework, speed quoting, and make production handoff clean.",
    date: "Nov 21, 2025",
    readTime: "7 min read",
    category: "CAD",
    body: [
      "A model can be visually complete and still be expensive to build. Fabrication-ready CAD communicates tolerances, datums, and material intent with no ambiguity.",
      "We push for consistent naming, explicit revision tracking, and drawing callouts that match real inspection paths. If the shop floor has to interpret intent, cycle time is already being lost.",
      "When CAD and fabrication language are aligned, quoting gets faster, setup gets cleaner, and final fit-up quality becomes predictable.",
    ],
  },
]

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug)
