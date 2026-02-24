"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDownRight, Plus } from "lucide-react"
import { Crosshair } from "@/components/ui/crosshair"
import { DotPattern } from "@/components/ui/dot-pattern"
import { testimonials } from "@/lib/data/testimonials"
import { GalleryGrid } from "./gallery-grid"

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

const CrosshairAnimated = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
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

export default function GalleryPage() {
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
        <CrosshairAnimated delay={0.1} className="top-8 left-8 text-white" />
        <CrosshairAnimated delay={0.2} className="top-8 right-8 text-white" />
        <CrosshairAnimated delay={0.3} className="bottom-8 left-8 text-white" />
        <CrosshairAnimated delay={0.4} className="bottom-8 right-8 text-white" />

        <div className="relative z-10 px-4 md:px-8 lg:px-12 mx-auto max-w-[100rem] w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8 md:mb-12"
          >
            <motion.p variants={fadeUp}>[ Project Archive ]</motion.p>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              variants={revealMask}
              className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.85] font-bold tracking-tighter uppercase text-white"
            >
              Real <span className="text-white/20">Builds.</span> <br/>
              Real <span className="text-white/20">Materials.</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide"
          >
            Browse completed projects from our shop. Every piece is designed,
            fabricated, and finished in-house at our Kelowna facility.
          </motion.p>
        </div>
      </section>

      {/* 
        ========================================
        02. GALLERY GRID SECTION
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-16"
          >
            // VISUAL DOCUMENTATION
          </motion.div>
          <div className="bg-white">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* 
        ========================================
        03. MINIMALIST QUOTES
        ========================================
      */}
      <section className="bg-[#050505] text-[#ededed] py-32 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-24"
          >
            [ Field Tested ]
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
        04. HEAVY CTA
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-black py-32 md:py-48 relative overflow-hidden">
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
              Have a project in mind? Send us your specs and we'll show you what we can build.
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
