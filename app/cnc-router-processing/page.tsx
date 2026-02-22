"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDownRight, Cpu, Layers, Square, Scissors, Gauge } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { Crosshair } from "@/components/ui/crosshair"
import { TrustStrip } from "@/components/trust-strip"

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

const capabilities = [
  {
    icon: Layers,
    title: "Sheet Processing",
    description: "Full sheets up to 4' x 8' processed in-house. Nesting for optimal material utilization.",
  },
  {
    icon: Square,
    title: "Precision Cutting",
    description: "Tolerances of ±0.005\". Clean edges, minimal burr. Ready for assembly.",
  },
  {
    icon: Scissors,
    title: "Complex Profiling",
    description: "Intricate cutouts, curves, and shapes. No dies or tooling required.",
  },
  {
    icon: Gauge,
    title: "Consistent Results",
    description: "Repeatable precision on production runs. Every part matches the first.",
  },
]

const materials = [
  "Aluminum (all grades)",
  "Stainless Steel",
  "Mild Steel",
  "Copper & Brass",
  "Titanium",
  "Composites",
  "Plastic",
  "Wood",
]

const applications = [
  {
    title: "Architectural Panels",
    description: "Decorative wall panels, ceiling elements, and facade components.",
  },
  {
    title: "Marine Components",
    description: "Boat panels, deck hardware, and custom marine fittings.",
  },
  {
    title: "Industrial Parts",
    description: "Machine guards, brackets, templates, and jigs.",
  },
  {
    title: "Signage",
    description: "Letters, logos, and decorative elements in metal.",
  },
]

export default function CNCRouterPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end border-b border-white/10 pb-16 md:pb-24 pt-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/cnc-router-processing/squarespace-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#050505]/45" />
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.15 }} 
          transition={{ duration: 2 }}
        >
          <DotPattern className="mix-blend-screen" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute top-8 left-8 size-4 pointer-events-none"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 right-8 size-4 pointer-events-none"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-8 left-8 size-4 pointer-events-none"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-8 right-8 size-4 pointer-events-none"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
        </motion.div>

        <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest text-white/50 font-mono">
              [ CNC Services ]
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h1 
                variants={revealMask}
                className="text-[10vw] sm:text-[8vw] lg:text-[6vw] font-bold tracking-tighter uppercase text-white leading-[0.85]"
              >
                CNC Router
                <br />
                Processing
              </motion.h1>
            </div>
            
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 items-end mt-8 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-6">
                <p className="text-lg md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
                  Precision CNC routing for aluminum, stainless steel, and
                  composite materials. From complex profiles to production
                  cutouts - our CNC router delivers clean, accurate results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link 
                  href="/contact-us"
                  className="relative overflow-hidden bg-white text-black px-8 py-6 text-sm font-bold uppercase tracking-widest group"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get a Quote</span>
                  <div className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </Link>
                <Link
                  href="/project-gallery"
                  className="border border-white/20 px-8 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] text-[#050505] py-20 border-b border-black/10">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="relative min-h-[360px] md:min-h-[500px] border border-black/10 overflow-hidden">
            <Crosshair className="top-6 left-6 text-black/30" />
            <Crosshair className="bottom-6 right-6 text-black/30" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/cnc-router-processing/squarespace-03.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute left-6 bottom-6 font-mono text-[10px] tracking-[0.2em] uppercase text-white/80">
              Project Snapshot
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl border-x border-white/10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-8 lg:p-16 border-b border-white/10 bg-[#0a0a0a]"
          >
            <motion.h2 variants={revealMask} className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white mb-6">Router Capabilities</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-xl max-w-3xl font-light leading-relaxed">
               High-precision cutting and profiling for metal and composite materials. Our CNC router handles sheets up to 4' x 8' with tolerances of ±0.005". No dies or custom tooling required means faster turnaround and lower costs.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative flex flex-col bg-[#0a0a0a] p-8 lg:p-10 hover:bg-[#111] transition-colors"
              >
                <cap.icon className="size-10 text-white mb-8" />
                <h3 className="text-xl font-bold tracking-tight uppercase text-white mb-4">
                  {cap.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-white text-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-12 mb-12"
          >
            <div className="overflow-hidden">
              <motion.h2 variants={revealMask} className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Materials</motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-black/60 max-w-md font-light">
              We cut a wide range of materials with the same precision.
            </motion.p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {materials.map((mat, i) => (
              <motion.span 
                key={mat}
                variants={fadeUp}
                className="border border-black/10 px-6 py-3 font-mono text-sm uppercase tracking-widest"
              >
                {mat}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16"
          >
            [ Applications ]
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {applications.map((app, i) => (
              <motion.div 
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-10 md:p-16 group hover:bg-[#111] transition-colors"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white">{app.title}</h3>
                <p className="text-white/50 font-light">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-32 md:py-48 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16"
        >
          <div className="max-w-4xl overflow-hidden">
            <motion.h2 variants={revealMask} className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Start <br/> Building.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              Ready to start your CNC project? Send us your files and we'll get a quote to you within 24 hours.
            </motion.p>
          </div>
          
          <motion.div variants={fadeUp} className="flex flex-col w-full md:w-auto gap-4 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            <Link 
              href="/contact-us"
              className="relative overflow-hidden bg-black text-white px-12 py-6 text-center flex items-center justify-between min-w-[300px] group"
            >
              <span className="relative z-10">Request Quote</span>
              <div className="relative z-10 size-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                <ArrowDownRight className="size-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-neutral-800 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
