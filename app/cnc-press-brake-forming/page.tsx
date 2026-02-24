"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowDownRight, ArrowDownUp, Box, Triangle, Move3d, Gauge, Plus, Minus } from "lucide-react"
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

const ParallaxImage = ({ src, alt, className }: { src: string, alt?: string, className?: string }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        style={{ y, backgroundImage: `url('${src}')` }}
        className="absolute inset-[-20%] bg-cover bg-center"
      />
    </div>
  )
}

const capabilities = [
  {
    icon: ArrowDownUp,
    title: "10' Bed Length",
    description: "Form parts up to 10 feet in a single setup. No segmenting or re-positioning.",
    metrics: { max_length: "120 IN", tonnage: "150T", axes: "Y1/Y2, X, R, Z1/Z2" }
  },
  {
    icon: Triangle,
    title: "Complex Angles",
    description: "Acute angles, obtuse bends, channels, z-bends, and tapered forms.",
    metrics: { angles: "VARIABLE", springback: "COMPENSATED", tooling: "PUNCH & DIE" }
  },
  {
    icon: Move3d,
    title: "CNC Precision",
    description: "Computer-controlled back gauge for repeatable accuracy on every bend.",
    metrics: { backgauge: "4-AXIS CNC", repeatability: "±0.0004 IN", control: "DELEM DA-66T" }
  },
  {
    icon: Gauge,
    title: "Tight Tolerances",
    description: "Consistent bend angles within ±1°. Production parts that fit together right the first time.",
    metrics: { angle_tol: "±1°", linear_tol: "±0.010 IN", crowning: "CNC CONTROLLED" }
  },
]

const materials = [
  {
    title: "Aluminum",
    description: "0.040\" to 0.250\" - ideal for architectural and marine applications.",
    specs: ["0.040\" - 0.250\""],
    data: [
      { label: "ALLOY", value: "5052 / 6061" },
      { label: "YIELD STR", value: "33 KSI" },
      { label: "BEND RAD", value: "1T - 3T" },
    ]
  },
  {
    title: "Stainless Steel",
    description: "24 gauge to 10 gauge - cosmetic and structural grades.",
    specs: ["24GA - 10GA"],
    data: [
      { label: "ALLOY", value: "304 / 316" },
      { label: "FINISH", value: "2B / #4 / MILL" },
      { label: "YIELD STR", value: "40 KSI" },
    ]
  },
  {
    title: "Mild Steel",
    description: "24 gauge to 3/16\" - galvannealed, cold rolled, and hot rolled.",
    specs: ["24GA - 3/16\""],
    data: [
      { label: "TYPE", value: "CR / HR / GALV" },
      { label: "YIELD STR", value: "36 KSI" },
      { label: "BEND RAD", value: "1T" },
    ]
  },
]

const applications = [
  "Cabinets and enclosures",
  "Structural channels",
  "Architectural panels",
  "Marine components",
  "Truck beds and panels",
  "Stairs and railings",
  "Machine guards",
  "Custom brackets",
]

export default function PressBrakePage() {
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
          style={{ backgroundImage: "url('/images/cnc-press-brake-forming/squarespace-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#050505]/20" />
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
          className="relative z-10 flex justify-between items-start p-4 md:p-8 lg:p-12 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40"
        >
          <div className="space-y-1">
            <motion.p variants={fadeUp}>LOC: 50.8841° N, 119.3973° W</motion.p>
            <motion.p variants={fadeUp}>FACILITY: KELOWNA_BC_01</motion.p>
          </div>
          <div className="text-right space-y-1">
            <motion.p variants={fadeUp}>DIV: CNC</motion.p>
            <motion.p variants={fadeUp}>STATUS: OPERATIONAL</motion.p>
          </div>
        </motion.div>

        <div className="relative z-10 px-4 md:px-8 lg:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-[120rem]">
            <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.8] font-bold tracking-tighter uppercase flex flex-col gap-2 md:gap-0">
              <div className="overflow-hidden py-1">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="block text-white/20"
                >
                  CNC Press
                </motion.span>
              </div>
              <div className="overflow-hidden py-1">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block text-white"
                >
                  Brake Forming.
                </motion.span>
              </div>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-12 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide"
            >
              Accurate CNC press brake forming for complex bends, angles, and shapes 
              in sheet and plate metals. Our 10-foot CNC press brake delivers precise, 
              repeatable results.
            </motion.p>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-[#050505]/60 backdrop-blur-md"
        >
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Capacity</p>
            <p className="font-mono text-sm md:text-base tracking-widest">150 TON / 10 FT</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r-0 md:border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Tolerance</p>
            <p className="font-mono text-sm md:text-base tracking-widest">±1°</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Control</p>
            <p className="font-mono text-sm md:text-base tracking-widest text-white/80">CNC BACKGAUGE</p>
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

      {/*
        ========================================
        01.5. EDITORIAL SPREAD
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] pt-24 md:pt-40 pb-16 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-4 flex flex-col justify-between py-8">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-16 lg:mb-0"
              >
                [ In-House Execution ]
              </motion.div>
              <div className="max-w-md">
                <div className="overflow-hidden mb-8">
                  <motion.h2 
                    variants={revealMask} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[0.9]"
                  >
                    Scale &<br />Precision
                  </motion.h2>
                </div>
                <motion.p 
                  variants={fadeUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  className="text-black/60 text-lg leading-relaxed font-light"
                >
                  From heavy structural plates to cosmetic architectural skins, our forming bay handles physical stress so downstream assemblies drop together perfectly. Minimal adjustments. Maximum repeatability.
                </motion.p>
              </div>
            </div>
            
            <div className="lg:col-span-8 relative min-h-[500px] md:min-h-[70vh] w-full bg-black/5 border border-black/10 p-4 md:p-8">
              <Crosshair className="top-8 left-8 text-black/20 z-10 hidden md:block" />
              <Crosshair className="top-8 right-8 text-black/20 z-10 hidden md:block" />
              <Crosshair className="bottom-8 left-8 text-black/20 z-10 hidden md:block" />
              <Crosshair className="bottom-8 right-8 text-black/20 z-10 hidden md:block" />
              
              <div className="relative w-full h-full border border-black/10 overflow-hidden group">
                 <ParallaxImage 
                   src="/images/cnc-press-brake-forming/squarespace-03.jpg"
                   className="w-full h-full"
                 />
                 <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />
                 <p className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.2em] uppercase text-white drop-shadow-md z-10">
                    5TH_ELEMENT // OP_02
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        ========================================
        02. CAPABILITIES
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 relative">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16"
          >
            <div className="max-w-3xl overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">Press Brake Capabilities</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-black/60 font-light max-w-lg">Precision forming for production and one-off parts.</motion.p>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Specifications ]
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
                className="relative bg-[#f5f5f5] p-8 md:p-10 flex flex-col justify-between min-h-[420px] group overflow-hidden border border-transparent hover:border-black/10 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                
                <Crosshair className="top-4 left-4 text-black/0 group-hover:text-black/20 transition-colors duration-500 z-10" />
                <Crosshair className="bottom-4 right-4 text-black/0 group-hover:text-black/20 transition-colors duration-500 z-10" />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-4 border border-black/10 bg-transparent group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    <cap.icon className="size-6" />
                  </div>
                  <span className="font-mono text-sm tracking-widest text-black/30 group-hover:text-black/50 transition-colors">0{i + 1}</span>
                </div>
                
                <div className="relative z-10 mt-16">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{cap.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed mb-8 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">{cap.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 border-t border-black/10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    {Object.entries(cap.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-black/40 mb-1">{key.replace('_', ' ')}</p>
                        <p className="font-mono text-[10px] lg:text-[11px] tracking-widest text-black uppercase">{value}</p>
                      </div>
                    ))}
                  </div>
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
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16"
          >
            [ Materials & Applications ]
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {materials.map((mat, i) => (
              <motion.div 
                key={mat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-between min-h-[450px] group overflow-hidden border-b border-white/10"
              >
                <div className="absolute inset-0 bg-[#111] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                <DotPattern className="absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-15 transition-opacity duration-700 z-0 pointer-events-none" />
                
                <div className="relative z-10 flex justify-between items-start mb-16">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 border border-white/10 px-3 py-1 group-hover:border-white/30 transition-colors duration-500">
                    MAT_0{i + 1}
                  </div>
                  <ArrowDownRight className="size-5 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-500" />
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{mat.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-10 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">{mat.description}</p>
                  
                  <div className="space-y-4">
                    {mat.data.map((d, idx) => (
                      <div key={idx} className="flex justify-between items-end border-b border-white/10 pb-2 group-hover:border-white/30 transition-colors duration-500">
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">{d.label}</span>
                        <span className="font-mono text-xs tracking-widest uppercase text-white/80">{d.value}</span>
                      </div>
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
              className="relative bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-between min-h-[350px] group overflow-hidden border-b border-white/10 lg:col-span-3"
            >
              <div className="absolute inset-0 bg-[#080808] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              <Crosshair className="top-8 left-8 text-white/0 group-hover:text-white/20 transition-colors duration-500 z-10" />
              
              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 border border-white/10 px-3 py-1 group-hover:border-white/30 transition-colors duration-500">
                  APPLICATIONS
                </div>
                <Plus className="size-4 text-white/20 group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="lg:w-1/3">
                  <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Structural & Cosmetic</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Precision forming across a wide variety of industrial and architectural contexts.</p>
                </div>
                <div className="lg:w-2/3 flex flex-wrap gap-3 lg:justify-end">
                  {applications.map((app) => (
                    <span key={app} className="border border-white/10 text-white/70 px-4 py-3 font-mono text-[10px] tracking-widest uppercase group-hover:border-white/30 group-hover:text-white transition-colors duration-500 hover:!bg-white hover:!text-black cursor-crosshair">
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
          className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16"
        >
          <div className="max-w-4xl overflow-hidden">
            <motion.h2 variants={revealMask} className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Start <br/> Building.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              Get a quote for your press brake forming project today.
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
