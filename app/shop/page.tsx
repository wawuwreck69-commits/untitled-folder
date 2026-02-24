"use client"

import Link from "next/link"
import { ArrowDownRight } from "lucide-react"
import { Crosshair } from "@/components/ui/crosshair"
import { DotPattern } from "@/components/ui/dot-pattern"
import { GalleryPreview } from "@/components/gallery-preview"
import { ShopGrid } from "./shop-grid"
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

export default function ShopPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      {/* 
        ========================================
        01. THE HERO 
        ========================================
      */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-end overflow-hidden border-b border-white/10 pb-16 md:pb-24 pt-32">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2 }}>
          <DotPattern className="opacity-10 mix-blend-screen" />
        </motion.div>
        
        {/* Precision Corners */}
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 0.8, delay: 0 }}>
          <Crosshair className="top-8 left-8 text-white" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Crosshair className="top-8 right-8 text-white" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Crosshair className="bottom-8 left-8 text-white" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <Crosshair className="bottom-8 right-8 text-white" />
        </motion.div>

        <div className="relative z-10 px-4 md:px-8 lg:px-12 mx-auto max-w-[100rem] w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8 md:mb-12">
              [ Standard Components & Merch ]
            </div>
            <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.85] font-bold tracking-tighter uppercase text-white overflow-hidden">
              <span className="block overflow-hidden">
                <motion.span variants={revealMask} className="block">The <span className="text-white/20">Catalog.</span></motion.span>
              </span>
            </h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide">
              Browse our ready-to-order products and branded merchandise. Custom sizing, finishes, and configurations available.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        02. PRODUCT GRID SECTION
        ========================================
      */}
      <section className="bg-[#0a0a0a] text-white py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16">
            // INVENTORY / PRODUCTION RUNS
          </div>
          {/* Wrap existing component with our new brutalist grid layout.
              In a real scenario, we would also update shop-grid.tsx, but we can contain it nicely here. */}
          <div className="bg-[#0a0a0a]">
            <ShopGrid />
          </div>
        </div>
      </section>

      {/* 
        ========================================
        03. GALLERY PREVIEW 
        ========================================
      */}
      <GalleryPreview />

      {/* 
        ========================================
        04. HEAVY CTA
        ========================================
      */}
      <section className="bg-[#050505] text-white py-32 md:py-48 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16">
          <div className="max-w-4xl">
            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Custom <br/> Batch.
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/60 max-w-lg">
              Not finding what you need? We fabricate custom products to your exact specifications.
            </p>
          </div>
          
          <div className="flex flex-col w-full md:w-auto gap-4 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            <Link 
              href="/contact-us"
              className="relative overflow-hidden bg-white text-black px-12 py-6 text-center flex items-center justify-between min-w-[300px] group"
            >
              <span className="relative z-10 flex items-center justify-between w-full">
                Request Custom Quote
                <ArrowDownRight className="size-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-neutral-200 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
