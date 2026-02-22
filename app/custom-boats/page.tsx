"use client"

import Link from "next/link"
import { ArrowRight, ArrowDownRight, Ship, Anchor, Waves, Shield, MapPin, Plus, Minus } from "lucide-react"
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

const capabilities = [
  {
    icon: Ship,
    title: "Custom Hulls",
    description: "Purpose-built aluminum hulls designed for your specific needs - fishing, work, or recreation.",
  },
  {
    icon: Waves,
    title: "Pontoon Boats",
    description: "Custom pontoon platforms and party barges. Aluminum construction for BC lakes.",
  },
  {
    icon: Anchor,
    title: "Marine Hardware",
    description: "Bowers, davits, rails, and custom hardware. Everything welded in-house.",
  },
  {
    icon: Shield,
    title: "Saltwater Ready",
    description: "5083 aluminum hulls and 316 stainless hardware for freshwater and saltwater use.",
  },
]

const process = [
  {
    step: "1",
    title: "Design",
    description: "We work with you to design the perfect boat for your specific use case.",
  },
  {
    step: "2",
    title: "Template",
    description: "Full-size patterns ensure accurate fit before any metal is cut.",
  },
  {
    step: "3",
    title: "Fabrication",
    description: "Hull, deck, and structures welded by CWB-certified aluminum welders.",
  },
  {
    step: "4",
    title: "Finish",
    description: "Paint, hardware, and final assembly. Ready for the water.",
  },
]

const applications = [
  "Fishing boats",
  "Work skiffs",
  "Pontoon platforms",
  "Party barges",
  "Duck boats",
  "Patrol boats",
  "Dive platforms",
  "Swim platforms",
]

export default function CustomBoatsPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      
      {/*
        ========================================
        01. THE HERO
        ========================================
      */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-between overflow-hidden border-b border-white/10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2 }}>
          <DotPattern className="opacity-10 mix-blend-screen" />
        </motion.div>
        
        <Crosshair className="top-8 left-8 text-white" delay={0} />
        <Crosshair className="top-8 right-8 text-white" delay={0.1} />
        <Crosshair className="bottom-8 left-8 text-white" delay={0.2} />
        <Crosshair className="bottom-8 right-8 text-white" delay={0.3} />

        <div className="relative z-10 flex justify-between items-start p-8 md:p-12 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
          <div className="space-y-1">
            <p>LOC: 50.8841° N, 119.3973° W</p>
            <p>FACILITY: KELOWNA_BC_01</p>
          </div>
          <div className="text-right space-y-1">
            <p>DIV: MARINE</p>
            <p>STATUS: OPERATIONAL</p>
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-[120rem]">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.8] font-bold tracking-tighter uppercase flex flex-col gap-2 md:gap-0 overflow-hidden">
                <span className="block overflow-hidden">
                  <motion.span variants={revealMask} className="block text-white/20">Custom.</motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={revealMask} className="block text-white">Aluminum.</motion.span>
                </span>
              </h1>
              <motion.p variants={fadeUp} className="mt-12 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide">
                Purpose-built aluminum boats for BC waters. From fishing rigs to 
                pontoon platforms - engineered for the Okanagan lifestyle.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-[#050505]/80 backdrop-blur-md">
          <div className="p-6 md:p-8 border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Hull Grade</p>
            <p className="font-mono text-sm md:text-base tracking-widest">5083 H321</p>
          </div>
          <div className="p-6 md:p-8 border-r-0 md:border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Thickness</p>
            <p className="font-mono text-sm md:text-base tracking-widest">3/16" — 1/4"</p>
          </div>
          <div className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Weld Cert</p>
            <p className="font-mono text-sm md:text-base tracking-widest text-white/80">CWB ALUMINUM</p>
          </div>
          <div className="p-6 md:p-8 border-t md:border-t-0 border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors relative">
            <Link href="/contact-us" className="absolute inset-0 flex items-center justify-between px-6 md:px-8">
              <span className="font-mono text-xs tracking-[0.2em] uppercase group-hover:text-black font-bold transition-colors">Start Project</span>
              <ArrowRight className="size-5 text-white/40 group-hover:text-black transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/*
        ========================================
        02. CAPABILITIES
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 relative">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">Marine Capabilities</h2>
              <p className="text-xl text-black/60 font-light max-w-lg">In-house design, fabrication, and finishing. Everything under one roof.</p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Specializations ]
            </div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#f5f5f5] p-8 md:p-12 flex flex-col justify-between min-h-[350px] group hover:bg-white transition-colors">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-black/5 rounded-none group-hover:bg-black group-hover:text-white transition-colors">
                    <cap.icon className="size-6" />
                  </div>
                  <span className="font-mono text-sm tracking-widest text-black/30">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{cap.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/*
        ========================================
        03. PROCESS
        ========================================
      */}
      <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16">
            [ Build Sequence ]
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {process.map((step, i) => (
              <motion.div key={step.step} variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[350px] group hover:bg-[#111] transition-colors">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-6xl font-light tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">
                    {step.step}
                  </span>
                  <Minus className="size-4 text-white/20" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">{step.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*
        ========================================
        04. LOCAL BUILDER & TYPES
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-32">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Boat<br/>Types</h2>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 text-right">
              <p>Built for Okanagan.</p>
              <p>Engineered for life.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10 mb-24">
            <div className="bg-[#f5f5f5] p-12 md:p-20 flex flex-col justify-between min-h-[400px]">
              <div className="flex justify-between items-start mb-16">
                <MapPin className="size-8 text-black/20" />
                <span className="font-mono text-sm tracking-widest text-black/30">LOC_01</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Local Builder</h4>
                <div className="space-y-4 font-mono text-xs tracking-widest uppercase text-black/40">
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span>Base</span> <span className="text-black/80">Kelowna, BC</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span>Waters</span> <span className="text-black/80">Okanagan Lake</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Advantage</span> <span className="text-black/80 text-right">Local Service<br/>No Shipping</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-12 md:p-20 flex flex-col justify-between min-h-[400px] group hover:bg-white transition-colors">
              <Plus className="size-4 text-black/20 mb-16" />
              <div className="flex flex-wrap gap-2">
                {applications.map((app) => (
                  <span
                    key={app}
                    className="bg-black text-white px-4 py-2 font-mono text-xs tracking-widest uppercase"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*
        ========================================
        05. CTA
        ========================================
      */}
      <section className="bg-[#050505] text-[#ededed] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-24">
            [ Ready to Launch ]
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <motion.div variants={fadeUp} className="bg-[#0a0a0a] p-12 md:p-20 flex flex-col justify-between min-h-[400px]">
              <div>
                <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase mb-8 leading-none">
                  Start <br/> Building.
                </h2>
                <p className="text-xl text-white/50 font-light max-w-md leading-relaxed">
                  Tell us what you have in mind. We'll help you design and build 
                  the perfect boat for your needs.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#0a0a0a] p-12 md:p-20 flex flex-col justify-center items-start gap-6">
              <Link 
                href="/contact-us"
                className="relative overflow-hidden bg-white text-black px-12 py-6 text-center flex items-center justify-between min-w-[300px] group"
              >
                <span className="relative z-10 font-mono text-sm tracking-[0.2em] uppercase font-bold flex items-center justify-between w-full">
                  Request Quote
                  <ArrowDownRight className="size-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-neutral-200 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </Link>
              <Link 
                href="/project-gallery"
                className="border border-white/20 text-white px-12 py-6 font-mono text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
