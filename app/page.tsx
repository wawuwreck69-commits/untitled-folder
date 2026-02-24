"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowDownRight, Plus } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { blogPosts } from "@/lib/data/blog-posts"
import { manufacturingServices, productCategories } from "@/lib/data/services"
import { testimonials } from "@/lib/data/testimonials"

// ----------------------------------------------------------------------
// Animations & Utilities
// ----------------------------------------------------------------------

const smoothTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] as [number, number, number, number] }
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

// Helper for precision corner markers
const Crosshair = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
    animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] as [number, number, number, number] }}
    className={`absolute size-4 pointer-events-none ${className}`}
  >
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
  </motion.div>
)

const ParallaxImage = ({ index, title, image }: { index: number, title: string, image: string }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  
  return (
    <div ref={ref} className="w-full md:w-1/2 aspect-[4/5] bg-[#f5f5f5] relative overflow-hidden group">
      <Crosshair className="top-4 left-4 text-black/20 z-10" />
      <Crosshair className="bottom-4 right-4 text-black/20 z-10" />
      
      {/* Image with Parallax & Scale */}
      <motion.div 
        style={{ y, scale, backgroundImage: `url(${image})` }}
        className="absolute inset-[-15%] bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105" 
      >
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
      </motion.div>
      
      <div className="absolute top-8 left-8 overflow-hidden z-10">
        <motion.span 
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1 block"
        >
          FIG. 0{index + 1}
        </motion.span>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [blogImages, setBlogImages] = useState<string[]>([])

  useEffect(() => {
    let mounted = true

    const loadImages = async () => {
      try {
        const response = await fetch("/api/google-images?q=5th%20element%20manufacturing&limit=9")
        if (!response.ok) return
        const payload = await response.json()
        const urls = Array.isArray(payload?.images) ? payload.images.map((item: { url: string }) => item.url) : []
        if (mounted && urls.length > 0) {
          setBlogImages(urls)
        }
      } catch {
        // Keep section stable if image lookup fails.
      }
    }

    loadImages()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      
      {/* 
        ========================================
        01. THE HERO (Cinematic / Blueprint)
        ========================================
      */}
      <section className="relative min-h-[95vh] w-full flex flex-col justify-between overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/cnc-press-brake-forming/squarespace-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-transparent" />

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.15 }} 
          transition={{ duration: 3 }}
        >
          <DotPattern className="mix-blend-screen" />
        </motion.div>
        
        {/* Precision Corners */}
        <Crosshair delay={0.1} className="top-8 left-8 text-white" />
        <Crosshair delay={0.2} className="top-8 right-8 text-white" />
        <Crosshair delay={0.3} className="bottom-8 left-8 text-white" />
        <Crosshair delay={0.4} className="bottom-8 right-8 text-white" />

        {/* Top Header Data */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex justify-between items-start p-4 md:p-8 lg:p-12 font-mono text-[10px] tracking-[0.25em] uppercase text-white"
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

        {/* Center Massive Typography */}
        <div className="relative z-10 px-4 md:px-8 lg:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-[120rem]">
            <h1 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] leading-[0.8] font-bold tracking-tighter uppercase flex flex-col gap-2 md:gap-0">
              <div className="overflow-hidden py-2">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
                  className="block text-white transition-colors duration-1000 hover:text-white cursor-default"
                >
                  Precision.
                </motion.span>
              </div>
              <div className="overflow-hidden py-2">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
                  className="block text-white cursor-default"
                >
                  Fabrication.
                </motion.span>
              </div>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-8 max-w-xl text-lg md:text-xl text-white leading-relaxed font-light tracking-wide"
            >
              We engineer solutions for environments that demand perfection. 
              CWB-certified welding, multi-axis CNC routing, and heavy-gauge forming.
            </motion.p>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-[#050505]/60 backdrop-blur-md"
        >
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white mb-3">Tolerances</p>
            <p className="font-mono text-sm md:text-base tracking-widest">±0.005 INCH</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r-0 md:border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white mb-3">Forming Cap</p>
            <p className="font-mono text-sm md:text-base tracking-widest">150 TON / 10 FT</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white mb-3">Materials</p>
            <p className="font-mono text-sm md:text-base tracking-widest text-white">AL / SS / MS</p>
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
        02. SERVICES (The Elegant Interactive Table)
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
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">
                The Shop Floor
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-black/60 font-light max-w-lg">
                Every process controlled in-house. A streamlined workflow from raw material to finished product.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Core Capabilities ]
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            {manufacturingServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
                }}
              >
                <Link 
                  href={`/${s.slug}`} 
                  className="group flex flex-col md:flex-row md:items-center py-10 border-b border-black/10 hover:border-black transition-colors duration-500 relative overflow-hidden"
                >
                  {/* Subtle Background Hover */}
                  <div className="absolute inset-0 bg-black/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                  
                  {/* Number */}
                  <div className="relative z-10 w-full md:w-[15%] mb-4 md:mb-0">
                    <span className="font-mono text-sm tracking-widest text-black/30 group-hover:text-black transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="relative z-10 w-full md:w-[35%] mb-4 md:mb-0">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {s.shortTitle}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10 w-full md:w-[35%] mb-8 md:mb-0 pr-8">
                    <p className="text-black/50 text-base leading-relaxed group-hover:text-black/80 transition-colors">
                      {s.description}
                    </p>
                  </div>
                  
                  {/* Action */}
                  <div className="relative z-10 w-full md:w-[15%] flex justify-end items-center opacity-50 md:opacity-0 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase mr-4 font-bold">View Specs</span>
                    <div className="size-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black transition-colors">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================
        03. MATERIALS (Massive Spec Typography)
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
            [ Raw Materials ]
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            
            {/* AL */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[500px] group hover:bg-[#111] transition-colors duration-700"
            >
              <div className="flex justify-between items-start mb-16 overflow-hidden">
                <motion.h3 
                  className="text-8xl md:text-9xl font-light tracking-tighter text-white/10 group-hover:text-white group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  Al
                </motion.h3>
                <span className="font-mono text-sm tracking-widest text-white/40">13</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Aluminum</h4>
                <div className="space-y-4 font-mono text-xs tracking-widest uppercase text-white/40">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Grades</span> <span className="text-white/80">5052 / 6061 / 5083</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Thickness</span> <span className="text-white/80">0.040" — 1.00"</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Profile</span> <span className="text-white/80 text-right">Marine Grade<br/>Corrosion Resist</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SS */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[500px] group hover:bg-[#111] transition-colors duration-700"
            >
              <div className="flex justify-between items-start mb-16 overflow-hidden">
                <motion.h3 
                  className="text-8xl md:text-9xl font-light tracking-tighter text-white/10 group-hover:text-white group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  Ss
                </motion.h3>
                <span className="font-mono text-sm tracking-widest text-white/40">—</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Stainless</h4>
                <div className="space-y-4 font-mono text-xs tracking-widest uppercase text-white/40">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Grades</span> <span className="text-white/80">304 / 316L</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Thickness</span> <span className="text-white/80">24GA — 0.50"</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Profile</span> <span className="text-white/80 text-right">Food Safe<br/>Maximum Durability</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MS */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[500px] group hover:bg-[#111] transition-colors duration-700"
            >
              <div className="flex justify-between items-start mb-16 overflow-hidden">
                <motion.h3 
                  className="text-8xl md:text-9xl font-light tracking-tighter text-white/10 group-hover:text-white group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  Ms
                </motion.h3>
                <span className="font-mono text-sm tracking-widest text-white/40">—</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Mild Steel</h4>
                <div className="space-y-4 font-mono text-xs tracking-widest uppercase text-white/40">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Types</span> <span className="text-white/80">HR / CR / GALV</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Thickness</span> <span className="text-white/80">24GA — 1.00"</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Profile</span> <span className="text-white/80 text-right">Structural<br/>High Yield Strength</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        04. PRODUCTS (Editorial Spread)
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-32"
          >
            <div className="overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
                Engineered<br/>Products
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 text-right">
              <p>Built for abuse.</p>
              <p>Designed for reality.</p>
            </motion.div>
          </motion.div>

          <div className="space-y-32 md:space-y-48">
            {productCategories.slice(0, 3).map((product, index) => (
              <div key={product.slug} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}>
                
                <ParallaxImage index={index} title={product.shortTitle} image={product.image} />
                
                {/* Text Area - Editorial Alignment */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase mb-8">
                    // CATEGORY: {product.shortTitle}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">{product.title}</h3>
                  <p className="text-xl text-black/60 mb-12 leading-relaxed max-w-md font-light">{product.description}</p>
                  
                  <Link 
                    href={`/${product.slug}`} 
                    className="inline-flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-widest group border-b border-black pb-4 w-max hover:pr-4 transition-all duration-500"
                  >
                    Explore Product Series 
                    <div className="size-6 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black transition-colors">
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 md:mt-48 flex justify-center border-t border-black/10 pt-16"
          >
            <Link 
              href="/shop"
              className="relative overflow-hidden font-mono text-sm tracking-[0.2em] uppercase border border-black px-12 py-6 group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Full Catalog</span>
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        05. MINIMALIST QUOTES (The Proof)
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
        06. BLOG (Field Notes)
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-14 mb-16"
          >
            <div className="max-w-3xl">
              <div className="overflow-hidden">
                <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">
                  Shop Floor<br />Journal
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-xl text-black/60 font-light max-w-xl leading-relaxed">
                Technical notes from active builds, process improvements, and fabrication-first design decisions.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ Knowledge Base ]
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {blogPosts.map((post, index) => {
              const imageUrl = blogImages.length > 0 ? blogImages[index % blogImages.length] : ""

              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="bg-white min-h-[480px] group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <Link href={`/blog/${post.slug}`} className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12">
                    <div className="space-y-8">
                      <div className="relative aspect-[16/10] border border-black/10 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : { background: "linear-gradient(135deg, #dddddd 0%, #f7f7f7 100%)" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                        <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] uppercase bg-black text-white px-2.5 py-1">
                          Img 0{index + 1}
                        </span>
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 flex items-center justify-between border-b border-black/10 pb-4">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-[0.95] group-hover:translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {post.title}
                      </h3>
                      <p className="text-black/60 text-lg leading-relaxed font-light">{post.excerpt}</p>
                    </div>
                    <div className="pt-10 mt-10 border-t border-black/10 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">{post.date}</span>
                      <div className="inline-flex items-center gap-4 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                        <span>Read Brief</span>
                        <div className="size-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black transition-colors">
                          <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/blog"
              className="relative overflow-hidden font-mono text-sm tracking-[0.2em] uppercase border border-black px-10 py-5 group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">View All Notes</span>
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        07. HEAVY CTA
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
            <motion.h2 
              variants={revealMask}
              className="text-[10vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8"
            >
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
