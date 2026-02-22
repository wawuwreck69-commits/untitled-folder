"use client"

import Link from "next/link"
import { ArrowRight, ArrowDownRight, Truck, Box, Wrench, Shield } from "lucide-react"
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
    icon: Truck,
    title: "Aluminum Flatdecks",
    description: "Lightweight, corrosion-resistant aluminum decks. Custom sizes to fit your truck. Diamond plate or smooth finish.",
  },
  {
    icon: Shield,
    title: "Headache Racks",
    description: "Protect your cab and cargo. Heavy-duty aluminum construction. Options for tool holders, lights, and storage.",
  },
  {
    icon: Box,
    title: "Toolboxes",
    description: "Secure storage for tools and equipment. Weather-sealed, lockable. Custom sizes to fit your deck layout.",
  },
  {
    icon: Wrench,
    title: "Custom Accessories",
    description: "Dunnage racks, lumber racks, fuel tank holders, and more. If you can describe it, we can build it.",
  },
]

const features = [
  "Aluminum construction - no rust",
  "Custom sizes for any truck",
  "Diamond plate or smooth finish",
  "LED light integration",
  "Lockable storage",
  "Commercial and recreational",
]

const truckTypes = [
  "Ford F-250/350/450",
  "Chevrolet Silverado 2500/3500",
  "Ram 2500/3500",
  "GMC Sierra 2500/3500",
  "Toyota Tundra",
  "Nissan Titan",
  "Flatbeds and service bodies",
]

const truckGallery = [
  {
    src: "/images/truck-enhancements/squarespace-01.jpg",
    label: "Build_01",
    title: "Custom Flatdeck System",
  },
  {
    src: "/images/truck-enhancements/squarespace-06.jpg",
    label: "Build_02",
    title: "Canopy + Rack Package",
  },
  {
    src: "/images/truck-enhancements/squarespace-09.jpg",
    label: "Build_03",
    title: "Bedside Toolbox Layout",
  },
]

export default function TruckDecksPage() {
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
          style={{ backgroundImage: `url(${truckGallery[1].src})` }}
        />
        <div className="absolute inset-0 bg-[#050505]/45" />
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
            <p>DIV: PRODUCTS</p>
            <p>STATUS: OPERATIONAL</p>
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-[120rem]">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.8] font-bold tracking-tighter uppercase flex flex-col gap-2 md:gap-0 overflow-hidden">
                <span className="block overflow-hidden">
                  <motion.span variants={revealMask} className="block text-white/20">Truck Decks</motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={revealMask} className="block text-white">&amp; Accessories.</motion.span>
                </span>
              </h1>
              <motion.p variants={fadeUp} className="mt-12 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide">
                Custom aluminum flatdecks, headache racks, toolboxes, and accessories 
                for commercial and recreational trucks. Built in Kelowna for Okanagan conditions.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-[#050505]/80 backdrop-blur-md">
          <div className="p-6 md:p-8 border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Material</p>
            <p className="font-mono text-sm md:text-base tracking-widest">ALUMINUM</p>
          </div>
          <div className="p-6 md:p-8 border-r-0 md:border-r border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Finish</p>
            <p className="font-mono text-sm md:text-base tracking-widest">DIAMOND / SMOOTH</p>
          </div>
          <div className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Build</p>
            <p className="font-mono text-sm md:text-base tracking-widest text-white/80">CUSTOM</p>
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
        02. PRODUCTS
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 relative">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">Truck Products</h2>
              <p className="text-xl text-black/60 font-light max-w-lg">Custom-built aluminum accessories for work and recreation.</p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Catalog Items ]
            </div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {products.map((product, i) => (
              <motion.div key={product.title} variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#f5f5f5] p-8 md:p-12 flex flex-col justify-between min-h-[350px] group hover:bg-white transition-colors">
                <div className="flex justify-between items-start mb-10">
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
        03. GALLERY
        ========================================
      */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <div className="flex items-center justify-between border-b border-black/10 pb-8 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">Field Builds</h3>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">[ Truck Enhancements ]</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative bg-[#f8f8f8] min-h-[460px] overflow-hidden group"
            >
              <Crosshair className="top-4 left-4 text-black/30 z-20" />
              <Crosshair className="bottom-4 right-4 text-black/30 z-20" />
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                style={{ backgroundImage: `url(${truckGallery[0].src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-6 bottom-6 z-20 text-white">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2">{truckGallery[0].label}</p>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tight">{truckGallery[0].title}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-px bg-black/10">
              {truckGallery.slice(1).map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: (index + 1) * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="relative bg-[#f8f8f8] min-h-[228px] overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-6 bottom-6 z-20 text-white">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1">{image.label}</p>
                    <p className="text-lg md:text-xl font-bold uppercase tracking-tight">{image.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        ========================================
        04. FEATURES & TRUCK TYPES
        ========================================
      */}
      <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16">
            [ Why Aluminum & Compatibility ]
          </div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <motion.div variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0 }} className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[400px] group hover:bg-[#111] transition-colors">
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Why Aluminum?</h4>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span key={feature} className="bg-white text-black px-4 py-2 font-mono text-xs tracking-widest uppercase">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between min-h-[400px] group hover:bg-[#111] transition-colors">
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Truck Compatibility</h4>
                <div className="flex flex-wrap gap-2">
                  {truckTypes.map((truck) => (
                    <span key={truck} className="border border-white/20 px-4 py-2 font-mono text-xs tracking-widest uppercase text-white/60">
                      {truck}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*
        ========================================
        05. CTA
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="mx-auto max-w-[100rem] px-8 md:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16">
          <div className="max-w-4xl">
            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Build <br/> It Custom.
            </h2>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              Custom sizes and configurations available. Send us your truck details and we'll build it to fit.
            </p>
          </div>
          
          <div className="flex flex-col w-full md:w-auto gap-4 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            <Link 
              href="/shop"
              className="relative overflow-hidden bg-black text-white px-12 py-6 text-center flex items-center justify-between min-w-[300px] group"
            >
              <span className="relative z-10 flex items-center justify-between w-full">
                Browse Products
                <ArrowDownRight className="size-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-neutral-800 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
            <Link 
              href="/contact-us"
              className="border border-black px-12 py-6 text-center hover:bg-black/5 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
