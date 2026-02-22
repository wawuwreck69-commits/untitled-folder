"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDownRight, Ruler, Box, FileCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Crosshair } from "@/components/ui/crosshair"
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

const benefits = [
  {
    icon: Box,
    title: "3D Visualization",
    description: "See your project before fabrication. Realistic 3D models help identify issues and refine designs.",
  },
  {
    icon: Ruler,
    title: "Precise Specifications",
    description: "Fabrication-ready drawings with exact dimensions, tolerances, and material callouts.",
  },
  {
    icon: FileCheck,
    title: "Design Validation",
    description: "We verify fit, function, and manufacturability before any metal is cut.",
  },
  {
    icon: Sparkles,
    title: "Iterative Refinement",
    description: "Quick design iterations. Make changes on-screen, not in the shop.",
  },
]

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your requirements, constraints, and goals for the project.",
  },
  {
    step: "02",
    title: "Concept Development",
    description: "Initial sketches and concepts for review and feedback.",
  },
  {
    step: "03",
    title: "3D Modeling",
    description: "Detailed 3D model with all features, cutouts, and assemblies.",
  },
  {
    step: "04",
    title: "Production Drawings",
    description: "Fabrication-ready drawings for our shop floor.",
  },
]

export default function CADDesignPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end border-b border-white/10 pb-16 md:pb-24 pt-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/3d-cad-design/squarespace-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#050505]/45" />
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.15 }} 
          transition={{ duration: 2 }}
        >
          <DotPattern className="mix-blend-screen" />
        </motion.div>
        
        <CrosshairAnimated delay={0.1} className="top-8 left-8 text-white/40" />
        <CrosshairAnimated delay={0.2} className="top-8 right-8 text-white/40" />
        <CrosshairAnimated delay={0.3} className="bottom-8 left-8 text-white/40" />
        <CrosshairAnimated delay={0.4} className="bottom-8 right-8 text-white/40" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mb-12"
          >
            <motion.p variants={fadeUp} className="text-white/60 font-mono text-sm uppercase tracking-widest mb-6">
              Design Services
            </motion.p>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                variants={revealMask}
                className="text-[10vw] sm:text-[8vw] lg:text-[6vw] font-bold tracking-tighter uppercase text-white leading-[0.85]"
              >
                3D CAD Design <br />
                <span className="text-white/50">& Drafting</span>
              </motion.h1>
            </div>
            
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 text-lg text-white/70 max-w-4xl">
              <p>
                Professional 3D modeling and technical drafting for fabrication-ready designs. 
                From concept sketches to production drawings - we handle the engineering.
              </p>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center bg-white px-8 text-sm font-bold text-black uppercase tracking-widest hover:bg-white/90 w-max"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] text-[#050505] py-20 border-b border-black/10">
        <div className="container mx-auto px-6">
          <div className="relative min-h-[360px] md:min-h-[500px] border border-black/10 overflow-hidden">
            <Crosshair className="top-6 left-6 text-black/30" />
            <Crosshair className="bottom-6 right-6 text-black/30" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/3d-cad-design/squarespace-03.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute left-6 bottom-6 font-mono text-[10px] tracking-[0.2em] uppercase text-white/80">
              Project Snapshot
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 border-t border-black/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16 mb-16"
          >
            <div className="max-w-3xl overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-none">Why Design With Us</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-black/60 font-light max-w-lg">We don't just design - we engineer for fabrication.</motion.p>
            </div>
            <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40">
              [ 04 Benefits ]
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 bg-white border border-black/5 hover:border-black/20 transition-colors"
              >
                <benefit.icon className="size-10 text-black mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{benefit.title}</h3>
                <p className="text-black/60 font-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
          >
            <div className="overflow-hidden">
              <motion.h2 variants={revealMask} className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none text-white">Our Process</motion.h2>
            </div>
            <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              [ 04 Steps ]
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-colors"
              >
                <span className="font-mono text-5xl font-light text-white/20 group-hover:text-white transition-colors mb-6 block">
                  {p.step}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-white">{p.title}</h3>
                <p className="text-white/50 font-light">{p.description}</p>
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
          className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16"
        >
          <div className="max-w-4xl overflow-hidden">
            <motion.h2 variants={revealMask} className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Start <br/> Building.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              Let's turn your ideas into fabrication-ready designs.
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
