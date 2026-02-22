"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, FileText, Ruler, Camera, MessageSquare, ArrowDownRight } from "lucide-react"
import { Crosshair } from "@/components/ui/crosshair"
import { DotPattern } from "@/components/ui/dot-pattern"
import { ContactForm } from "./contact-form"
import Link from "next/link"

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

const contactInfo = [
  {
    icon: MapPin,
    label: "Facility Location",
    value: "1455 Dilworth Dr, Kelowna, BC V1V 1R4",
    href: "https://maps.google.com/?q=1455+Dilworth+Dr,+Kelowna,+BC",
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: "250-491-0299",
    href: "tel:250-491-0299",
  },
  {
    icon: Mail,
    label: "Email Protocol",
    value: "info@5thelementmfg.com",
    href: "mailto:info@5thelementmfg.com",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "Mon - Fri: 7:00 AM - 4:00 PM PST",
    href: null,
  },
]

const quoteChecklist = [
  {
    icon: FileText,
    text: "CAD files, drawings, or sketches (.step, .dxf, .pdf)",
  },
  {
    icon: Ruler,
    text: "Dimensions and material specifications",
  },
  {
    icon: Camera,
    text: "Reference photos of existing parts or installations",
  },
  {
    icon: MessageSquare,
    text: "Project timeline and quantity requirements",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black min-h-screen flex flex-col">
      {/* 
        ========================================
        01. SPLIT SCREEN LAYOUT
        ========================================
      */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 mt-16 md:mt-24">
        
        {/* Left Side - Information */}
        <div className="relative p-8 md:p-16 lg:p-24 flex flex-col justify-between min-h-[50vh] bg-[#050505]">
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
            className="absolute bottom-8 left-8 size-4 pointer-events-none"
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-xl"
          >
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8 md:mb-12">
              [ Communication Channel ]
            </motion.div>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                variants={revealMask}
                className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.85] font-bold tracking-tighter uppercase text-white"
              >
                Initiate <br/>
                <span className="text-white/20">Project.</span>
              </motion.h1>
            </div>
            
            <motion.p variants={fadeUp} className="text-lg text-white/50 leading-relaxed font-light tracking-wide mb-16">
              Send specs, drawings, or even a photo of a napkin sketch. We review and typically respond with a detailed quote within 24 hours.
            </motion.p>

            {/* Contact Details Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {contactInfo.map((info) => (
                <div key={info.label} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <info.icon className="size-4 text-white/40 group-hover:text-white transition-colors" />
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/60 transition-colors">
                      {info.label}
                    </p>
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-base font-bold text-white/80 hover:text-white transition-colors block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-white/80">
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Requirements */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 mt-24 pt-12 border-t border-white/10"
          >
            <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-6">
              // REQUIRED FOR ACCURATE QUOTE
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quoteChecklist.map((item) => (
                <motion.div 
                  key={item.text} 
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 size-1.5 bg-white/40 block shrink-0" />
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - The Form */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative p-8 md:p-16 lg:p-24 bg-[#0a0a0a] text-white flex items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-8 right-8 size-4 pointer-events-none"
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 right-8 size-4 pointer-events-none"
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
          </motion.div>
          
          <div className="w-full max-w-xl">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-12 border-b border-white/10 pb-4">
              SECURE TRANSMISSION FORM
            </div>
            
            <div className="prose-invert">
              <ContactForm />
            </div>
            
            <div className="mt-12 font-mono text-[10px] text-white/40 uppercase tracking-widest text-center">
              All files are securely transmitted to our engineering team.
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
