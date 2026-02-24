"use client"

import Link from "next/link"
import { ArrowRight, ArrowDownRight, Landmark, Flame, Sprout, Palette, Sun, Plus, Minus } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { motion } from "framer-motion"

const smoothTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
const fastTransition = { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] }

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: fastTransition 
  }
}

const revealMask = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%", 
    transition: smoothTransition 
  }
}

const Crosshair = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ duration: 0.8, delay: delay }}
    className={`absolute size-4 pointer-events-none ${className}`}
  >
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
  </motion.div>
)

const products = [
  {
    icon: Flame,
    title: "Fire Features",
    description: "Fire pits, fire tables, and fireplaces. Wood-burning or gas. Custom designs and sizes.",
  },
  {
    icon: Sprout,
    title: "Planters & Garden",
    description: "Aluminum planters, raised beds, and garden structures. Powder-coated for outdoor durability.",
  },
  {
    icon: Landmark,
    title: "Architectural Metal",
    description: "Decorative screens, wall panels, signage, and architectural features. Make a statement.",
  },
  {
    icon: Sun,
    title: "Outdoor Furniture",
    description: "Benches, tables, chairs, and lounge furniture. Custom designs for patios and decks.",
  },
]

const finishes = [
  {
    title: "Powder Coat",
    description: "Durable, colorful finish. Thousands of colors available. 5-10 year warranty.",
    specs: ["5-10 Year", "Many Colors"],
  },
  {
    title: "Anodized",
    description: "Natural aluminum look. Hard, wear-resistant surface. Great for architectural.",
    specs: ["Natural Look", "Hard Surface"],
  },
  {
    title: "Brushed Stainless",
    description: "Modern, clean aesthetic. Maximum durability. Low maintenance.",
    specs: ["Modern", "Low Maint"],
  },
  {
    title: "Raw Aluminum",
    description: "Natural industrial look. Develops patina over time. Lowest maintenance.",
    specs: ["Industrial", "No Maint"],
  },
]

const applications = [
  "Residential",
  "Commercial",
  "Hospitality",
]

export default function ArchitecturalOutdoorPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      
      {/*
        ========================================
        01. THE HERO
        ========================================
      */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-between overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/architectural/squarespace-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#050505]/20" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2 }}>
          <DotPattern className="opacity-10 mix-blend-screen" />
        </motion.div>
        
        <Crosshair className="top-8 left-8 text-white" delay={0} />
        <Crosshair className="top-8 right-8 text-white" delay={0.1} />
        <Crosshair className="bottom-8 left-8 text-white" delay={0.2} />
        <Crosshair className="bottom-8 right-8 text-white" delay={0.3} />

        <div className="relative z-10 flex justify-between items-start p-4 md:p-8 lg:p-12 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
          <div className="space-y-1">
            <p>LOC: 50.8841° N, 119.3973° W</p>
            <p>FACILITY: KELOWNA_BC_01</p>
          </div>
          <div className="text-right space-y-1">
            <p>DIV: ARCHITECTURAL</p>
            <p>STATUS: OPERATIONAL</p>
          </div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-[120rem]">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <h1 className="text-[9vw] sm:text-[7vw] lg:text-[5vw] leading-[0.8] font-bold tracking-tighter uppercase flex flex-col gap-2 md:gap-0 overflow-hidden">
                <span className="block overflow-hidden">
                  <motion.span variants={revealMask} className="block text-white/20">Architectural</motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={revealMask} className="block text-white">&amp; Outdoor.</motion.span>
                </span>
              </h1>
              <motion.p variants={fadeUp} className="mt-12 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide">
                Custom architectural metalwork, outdoor furniture, fire pits, planters, 
                and decorative elements. Make your outdoor space stand out.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-[#050505]/60 backdrop-blur-md">
          <div className="p-6 md:p-8 border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Style</p>
            <p className="font-mono text-sm md:text-base tracking-widest">CUSTOM</p>
          </div>
          <div className="p-6 md:p-8 border-r-0 md:border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Finish</p>
            <p className="font-mono text-sm md:text-base tracking-widest">MULTI</p>
          </div>
          <div className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Material</p>
            <p className="font-mono text-sm md:text-base tracking-widest text-white/80">AL / SS</p>
          </div>
          <div className="p-6 md:p-8 border-t md:border-t-0 border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors relative">
            <Link href="/contact-us" className="absolute inset-0 flex items-center justify-between px-6 md:px-8">
              <span className="font-mono text-xs tracking-[0.2em] uppercase group-hover:text-black font-bold transition-colors">Start Project</span>
              <ArrowRight className="size-5 text-white/40 group-hover:text-black transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] text-[#050505] py-20 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <div className="relative min-h-[360px] md:min-h-[500px] border border-black/10 overflow-hidden">
            <Crosshair className="top-6 left-6 text-black/30" />
            <Crosshair className="bottom-6 right-6 text-black/30" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/architectural/squarespace-03.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute left-6 bottom-6 font-mono text-[10px] tracking-[0.2em] uppercase text-white/80">
              Project Snapshot
            </p>
          </div>
        </div>
      </section>

      {/*
        ========================================
        02. PRODUCTS
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 relative">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">What We Create</h2>
              <p className="text-xl text-black/60 font-light max-w-lg">Custom metalwork for outdoor and architectural applications.</p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Capabilities ]
            </div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {products.map((product, i) => (
              <motion.div key={product.title} variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#f5f5f5] p-4 md:p-8 lg:p-12 flex flex-col justify-between min-h-[350px] group hover:bg-white transition-colors">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-black/5 rounded-none group-hover:bg-black group-hover:text-white transition-colors">
                    <product.icon className="size-6" />
                  </div>
                  <span className="font-mono text-sm tracking-widest text-black/30">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{product.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/*
        ========================================
        03. FINISHES & APPLICATIONS
        ========================================
      */}
      <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16">
            [ Finishes & Applications ]
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16">
            {finishes.map((finish, i) => (
              <motion.div key={finish.title} variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[300px] group hover:bg-[#111] transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-5xl font-light tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <Minus className="size-4 text-white/20" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{finish.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{finish.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {finish.specs.map((spec) => (
                      <span key={spec} className="border border-white/20 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-white/60">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8">
            [ Projects by Sector ]
          </div>
          <div className="flex flex-wrap gap-2">
            {applications.map((app) => (
              <span key={app} className="bg-white text-black px-4 py-2 font-mono text-xs tracking-widest uppercase">
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/*
        ========================================
        04. CTA
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16">
          <div className="max-w-4xl">
            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Have a <br/> Design?
            </h2>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              Custom architectural metalwork and outdoor products. Send us your ideas and we'll bring them to life.
            </p>
          </div>
          
          <div className="flex flex-col w-full md:w-auto gap-4 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            <Link 
              href="/contact-us"
              className="relative overflow-hidden bg-black text-white px-12 py-6 text-center flex items-center justify-between min-w-[300px] group"
            >
              <span className="relative z-10 flex items-center justify-between w-full">
                Request Quote
                <ArrowDownRight className="size-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-neutral-800 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
            <Link 
              href="/project-gallery"
              className="border border-black px-12 py-6 text-center hover:bg-black/5 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
