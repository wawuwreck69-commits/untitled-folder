"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDownRight, Flame, Shield, Zap, CheckCircle2, Plus, Minus } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"

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
    icon: Flame,
    title: "TIG Welding",
    description: "Precision GTAW welding for clean, cosmetic welds on aluminum and stainless steel.",
  },
  {
    icon: Zap,
    title: "MIG Welding",
    description: "Efficient GMAW welding for production fabrications and structural components.",
  },
  {
    icon: Shield,
    title: "CWB Certified",
    description: "Canadian Welding Bureau certified welders. CWB certification available on request.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Inspected",
    description: "Every weld visually inspected. MPI available for critical applications.",
  },
]

const materials = [
  {
    title: "Aluminum",
    description: "TIG welded for clean, spatter-free welds. All grades from 6061 to 5083.",
    specs: ["6061-T6", "5083-H321", "5052-H32"],
  },
  {
    title: "Stainless Steel",
    description: "Food-grade and architectural finishes.",
    specs: ["304", "316L", "409"],
  },
  {
    title: "Mild Steel",
    description: "Structural MIG welding with excellent penetration.",
    specs: ["A36", "GR50", "Galv"],
  },
]

const applications = [
  "Structural Fabrication",
  "Marine Welding",
  "Architectural Metalwork",
  "Custom Equipment",
]

export default function WeldingPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      
      {/*
        ========================================
        01. THE HERO
        ========================================
      */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-between overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/welding-fabrication/squarespace-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#050505]/45" />
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.15 }} 
          transition={{ duration: 2 }}
        >
          <DotPattern className="mix-blend-screen" />
        </motion.div>
        
        <Crosshair delay={0.1} className="top-8 left-8 text-white" />
        <Crosshair delay={0.2} className="top-8 right-8 text-white" />
        <Crosshair delay={0.3} className="bottom-8 left-8 text-white" />
        <Crosshair delay={0.4} className="bottom-8 right-8 text-white" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex justify-between items-start p-8 md:p-12 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40"
        >
          <div className="space-y-1">
            <motion.p variants={fadeUp}>LOC: 50.8841° N, 119.3973° W</motion.p>
            <motion.p variants={fadeUp}>FACILITY: KELOWNA_BC_01</motion.p>
          </div>
          <div className="text-right space-y-1">
            <motion.p variants={fadeUp}>DIV: FABRICATION</motion.p>
            <motion.p variants={fadeUp}>STATUS: OPERATIONAL</motion.p>
          </div>
        </motion.div>

        <div className="relative z-10 px-8 md:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-[120rem]">
            <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.8] font-bold tracking-tighter uppercase flex flex-col gap-2 md:gap-0">
              <div className="overflow-hidden py-1">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="block text-white/20"
                >
                  Welding
                </motion.span>
              </div>
              <div className="overflow-hidden py-1">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block text-white"
                >
                  & Fabrication.
                </motion.span>
              </div>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-12 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide"
            >
              CWB-certified TIG and MIG welding for aluminum, stainless steel, 
              and mild steel. From structural assemblies to cosmetic welds.
            </motion.p>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-[#050505]/80 backdrop-blur-md"
        >
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Cert</p>
            <p className="font-mono text-sm md:text-base tracking-widest">CWB</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r-0 md:border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Processes</p>
            <p className="font-mono text-sm md:text-base tracking-widest">TIG / MIG</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Metals</p>
            <p className="font-mono text-sm md:text-base tracking-widest text-white/80">AL / SS / MS</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-0 border-t md:border-t-0 border-white/10 flex">
            <Link href="/contact-us" className="w-full flex items-center justify-between p-6 md:p-8 group cursor-pointer hover:bg-white transition-colors duration-500 relative overflow-hidden">
              <span className="relative z-10 font-mono text-xs tracking-[0.2em] uppercase text-white group-hover:text-black font-bold transition-colors duration-500">
                Start Project
              </span>
              <div className="relative z-10 size-8 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors duration-500">
                <ArrowRight className="size-4 text-white group-hover:text-black transition-transform duration-500 group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#f2f2f2] text-[#050505] py-20 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <div className="relative min-h-[360px] md:min-h-[500px] border border-black/10 overflow-hidden">
            <Crosshair className="top-6 left-6 text-black/30" />
            <Crosshair className="bottom-6 right-6 text-black/30" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/welding-fabrication/squarespace-03.jpg')" }}
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
        02. CAPABILITIES
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 relative">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16"
          >
            <div className="max-w-3xl overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">Welding Capabilities</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-black/60 font-light max-w-lg">Professional welding for structural and cosmetic applications.</motion.p>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Processes ]
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#f5f5f5] p-8 md:p-12 flex flex-col justify-between min-h-[350px] group hover:bg-white transition-colors"
              >
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
          </div>

        </div>
      </section>

      {/*
        ========================================
        03. MATERIALS & APPLICATIONS
        ========================================
      */}
      <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16"
          >
            [ Materials & Applications ]
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {materials.map((mat, i) => (
              <motion.div 
                key={mat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[350px] group hover:bg-[#111] transition-colors"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-6xl font-light tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <Minus className="size-4 text-white/20" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">{mat.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{mat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {mat.specs.map((spec) => (
                      <span key={spec} className="border border-white/20 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-white/60">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[350px] group hover:bg-[#111] transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-6xl font-light tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">04</span>
                <Plus className="size-4 text-white/20" />
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app) => (
                    <span key={app} className="bg-white text-black px-4 py-2 font-mono text-xs tracking-widest uppercase">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*
        ========================================
        04. CTA
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-[100rem] px-8 md:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16"
        >
          <div className="max-w-4xl overflow-hidden">
            <motion.h2 variants={revealMask} className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Start <br/> Building.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              From one-off fabrications to production runs - send us your specs and we'll quote today.
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
            <Link 
              href="/project-gallery"
              className="relative overflow-hidden border border-black px-12 py-6 text-center group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Our Work</span>
              <div className="absolute inset-0 bg-black scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
