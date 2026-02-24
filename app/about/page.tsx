"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ArrowRight, Factory, Wine, Ship, Building2, HardHat, Utensils, Plus } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { testimonials } from "@/lib/data/testimonials"
import { manufacturingServices } from "@/lib/data/services"

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
    transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    className={`absolute size-4 pointer-events-none ${className}`}
  >
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
  </motion.div>
)

const industries = [
  {
    icon: Wine,
    title: "Wineries & Beverage",
    description: "Stainless steel railings, tanks, floor drains, and custom fixtures for food-safe environments.",
  },
  {
    icon: Factory,
    title: "Packing Facilities",
    description: "Industrial conveyor systems, structural platforms, and facility upgrades for fruit packing operations.",
  },
  {
    icon: Ship,
    title: "Marine",
    description: "Custom aluminum boats, dock systems, swim platforms, and marine hardware for freshwater and saltwater.",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Structural steel, aluminum stairs, railings, platforms, and architectural metalwork.",
  },
  {
    icon: HardHat,
    title: "Trades & Contractors",
    description: "Custom truck decks, headache racks, toolboxes, and specialty equipment for working trucks.",
  },
  {
    icon: Utensils,
    title: "Hospitality",
    description: "Outdoor furniture, fire pits, garbage receptacles, signage, and decorative metalwork.",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      {/* 
        ========================================
        01. THE HERO 
        ========================================
      */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-end overflow-hidden border-b border-white/10 pb-16 md:pb-24 pt-32">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.15 }} 
          transition={{ duration: 2 }}
        >
          <DotPattern className="mix-blend-screen" />
        </motion.div>
        
        {/* Precision Corners */}
        <Crosshair delay={0.1} className="top-8 left-8 text-white" />
        <Crosshair delay={0.2} className="top-8 right-8 text-white" />
        <Crosshair delay={0.3} className="bottom-8 left-8 text-white" />
        <Crosshair delay={0.4} className="bottom-8 right-8 text-white" />

        <div className="relative z-10 px-4 md:px-8 lg:px-12 mx-auto max-w-[100rem] w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8 md:mb-12"
          >
            <motion.p variants={fadeUp}>[ Our Story ]</motion.p>
          </motion.div>
          
          <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.85] font-bold tracking-tighter uppercase text-white">
            <div className="overflow-hidden py-1">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
                className="block"
              >
                Built <br/> <span className="text-white/20">Different.</span> <br/>
                Built To <span className="text-white/20">Last.</span>
              </motion.span>
            </div>
          </h1>
        </div>
      </section>

      {/* 
        ========================================
        02. PHILOSOPHY 
        ========================================
      */}
      <section className="bg-white text-black py-24 md:py-32">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start"
          >
            
            <motion.div variants={fadeUp} className="lg:col-span-5 font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              <p className="mb-4">// 5TH ELEMENT MFG.</p>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-black/10 pb-2"><span>ESTABLISHED</span> <span className="text-black font-bold">2015</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>LOCATION</span> <span className="text-black font-bold">KELOWNA, BC</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>CERTIFICATION</span> <span className="text-black font-bold">CWB DIV 2</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>SPECIALTIES</span> <span className="text-black font-bold">AL / SS / MS</span></li>
              </ul>
            </motion.div>

            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={revealMask} className="overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
                  Not Just a Job Shop.
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-black/60 font-light leading-relaxed max-w-2xl">
                5th Element Manufacturing is a full-service metal fabrication shop
                based in Kelowna, BC. We are not a shop that blindly pushes parts out the door.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-2xl">
                We are builders, problem-solvers, and craftsmen who take pride in
                every weld, every bend, and every finished product. Whether
                it is a one-off prototype or a production run of hundreds,
                we bring the same precision and care to every project.
              </motion.p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        03. INDUSTRIES (Interactive Table)
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 border-t border-black/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16"
          >
            <div className="max-w-3xl overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">Sectors</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-black/60 font-light max-w-lg">From wineries to watercraft, we fabricate for a wide range of commercial and industrial applications.</motion.p>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 06 Core Industries ]
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
                }}
              >
                <div className="group flex flex-col md:flex-row md:items-center py-10 border-b border-black/10 hover:border-black transition-colors duration-500 relative overflow-hidden">
                  {/* Subtle Background Hover */}
                  <div className="absolute inset-0 bg-black/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                  
                  {/* Number */}
                  <div className="relative z-10 w-full md:w-[15%] mb-4 md:mb-0">
                    <span className="font-mono text-sm tracking-widest text-black/30 group-hover:text-black transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="relative z-10 w-full md:w-[35%] mb-4 md:mb-0 flex items-center gap-6">
                    <ind.icon className="size-6 text-black/20 group-hover:text-black transition-colors duration-500" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {ind.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10 w-full md:w-[50%] mb-8 md:mb-0">
                    <p className="text-black/50 text-base leading-relaxed group-hover:text-black/80 transition-colors">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        04. MINIMALIST QUOTES
        ========================================
      */}
      <section className="bg-[#050505] text-[#ededed] py-32 border-y border-white/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-24"
          >
            [ Trusted By Industry ]
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {testimonials.slice(0, 2).map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-[#0a0a0a] p-12 md:p-20 flex flex-col justify-between min-h-[400px] relative overflow-hidden group"
              >
                {/* Hover shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <Plus className="size-4 text-white/20 mb-12 group-hover:rotate-90 transition-transform duration-700" />
                  <p className="text-2xl md:text-3xl font-light leading-snug tracking-tight mb-16 text-white/80">
                    "{t.quote}"
                  </p>
                </div>
                <div className="relative z-10 border-t border-white/10 pt-8 flex justify-between items-end">
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm mb-1">{t.author}</p>
                    <p className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">{t.role}</p>
                  </div>
                  <p className="font-mono text-[10px] text-white/60 tracking-[0.2em] uppercase border border-white/20 px-3 py-1">
                    {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        05. CAPABILITIES LIST
        ========================================
      */}
      <section className="bg-[#050505] text-[#ededed] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
          >
            <div className="overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">In-House<br/>Capabilities</motion.h2>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 text-right">
              <p>Everything under one roof.</p>
              <p>Maximum quality control.</p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {manufacturingServices.map((s, i) => (
              <motion.div 
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group border-t border-white/10 pt-8"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-6 block">
                  CAPABILITY // 0{i + 1}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-white/50 text-base leading-relaxed mb-8">{s.description}</p>
                <Link 
                  href={`/${s.slug}`} 
                  className="inline-flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white text-white/40 transition-colors"
                >
                  View Details <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        06. HEAVY CTA
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
              Send us your drawings, CAD files, or napkin sketches. We'll engineer it for reality.
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
            <a 
              href="tel:250-491-0299"
              className="relative overflow-hidden border border-black px-12 py-6 text-center group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">250-491-0299</span>
              <div className="absolute inset-0 bg-black scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
          </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
