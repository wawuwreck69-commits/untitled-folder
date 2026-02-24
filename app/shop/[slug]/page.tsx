"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowDownRight, Clock, Truck, ShieldCheck, HelpCircle, Plus, Minus } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getProduct } from "@/lib/data/products"
import { AddToCartButton } from "./add-to-cart-button"
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

export default function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      
      {/*
        ========================================
        01. BREADCRUMB & HERO
        ========================================
      */}
      <section className="relative border-b border-white/10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2 }}>
          <DotPattern className="opacity-10 mix-blend-screen" />
        </motion.div>
        
        <Crosshair className="top-8 left-8 text-white" delay={0} />
        <Crosshair className="top-8 right-8 text-white" delay={0.1} />
        <Crosshair className="bottom-8 left-8 text-white" delay={0.2} />
        <Crosshair className="bottom-8 right-8 text-white" delay={0.3} />

        <div className="relative z-10 px-4 md:px-8 lg:px-12 pt-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            <ArrowLeft className="size-3.5" />
            Back to Catalog
          </Link>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            
            <div className="flex aspect-square items-center justify-center bg-[#0a0a0a] border border-white/10 relative">
              <Crosshair className="top-4 left-4 text-white/20" delay={0.4} />
              <Crosshair className="bottom-4 right-4 text-white/20" delay={0.5} />
              <div className="flex flex-col items-center gap-3 text-white/20">
                <div className="flex h-16 w-16 items-center justify-center border border-white/20">
                  <span className="text-2xl font-mono text-white/60">5E</span>
                </div>
                <span className="text-sm font-mono text-white/40">Product Image</span>
              </div>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col justify-center">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-6">
                // {product.category.toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
                {product.name}
              </h1>
              <p className="text-3xl font-mono tracking-widest text-white/80 mb-8">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-lg text-white/50 leading-relaxed font-light tracking-wide mb-12 max-w-lg">
                {product.longDescription}
              </p>

              <AddToCartButton product={product} />

              <div className="flex flex-col gap-4 border-t border-white/10 pt-8 mt-8">
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-white/40" />
                  <div>
                    <p className="text-sm font-mono tracking-[0.2em] uppercase text-white/60 mb-1">Lead Time</p>
                    <p className="text-sm text-white/40">{product.leadTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="mt-0.5 size-5 shrink-0 text-white/40" />
                  <div>
                    <p className="text-sm font-mono tracking-[0.2em] uppercase text-white/60 mb-1">Shipping</p>
                    <p className="text-sm text-white/40">{product.shippingNote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-white/40" />
                  <div>
                    <p className="text-sm font-mono tracking-[0.2em] uppercase text-white/60 mb-1">Returns & Warranty</p>
                    <p className="text-sm text-white/40">{product.returnsPolicy}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/*
        ========================================
        02. SPECS, FEATURES, USE CASES
        ========================================
      */}
      <section className="bg-[#f2f2f2] text-[#050505] py-32 md:py-48 border-b border-black/10">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-px bg-black/10 border border-black/10">
            
            <motion.div variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0 }} className="bg-[#f5f5f5] p-10 md:p-16 min-h-[300px]">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-8">
                [ Specifications ]
              </div>
              <ul className="flex flex-col gap-3">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-black/60 border-b border-black/10 pb-3 last:border-0">
                    <Minus className="size-3 mt-1 shrink-0 text-black/30" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-[#f5f5f5] p-10 md:p-16 min-h-[300px]">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-8">
                [ Features ]
              </div>
              <ul className="flex flex-col gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-black/60">
                    <Plus className="size-3 mt-1 shrink-0 text-black/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-[#f5f5f5] p-10 md:p-16 min-h-[300px] lg:col-span-2">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-8">
                [ Use Cases ]
              </div>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((useCase, i) => (
                  <span key={i} className="bg-black text-white px-4 py-2 font-mono text-xs tracking-widest uppercase">
                    {useCase}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/*
        ========================================
        03. FAQ
        ========================================
      */}
      {product.faq.length > 0 && (
        <section className="bg-[#050505] py-32 md:py-48 border-b border-white/10">
          <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-16">
                [ Frequently Asked ]
              </motion.div>
              <div className="grid gap-px bg-white/10 border border-white/10">
                {product.faq.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-[#0a0a0a] p-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={`faq-${i}`} className="border-white/10">
                        <AccordionTrigger className="font-mono text-sm tracking-widest uppercase text-white/80 hover:text-white hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/50 leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/*
        ========================================
        04. CTA
        ========================================
      */}
      <section className="bg-white text-black py-32 md:py-48 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-16">
          <div className="max-w-4xl">
            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
              Need <br/> Custom?
            </h2>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-lg">
              We can modify any product to your exact specifications. Contact us for a custom quote.
            </p>
          </div>
          
          <div className="flex flex-col w-full md:w-auto gap-4 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            <Link 
              href="/contact-us"
              className="relative overflow-hidden bg-black text-white px-12 py-6 text-center flex items-center justify-between min-w-[300px] group"
            >
              <span className="relative z-10 flex items-center justify-between w-full">
                Request Custom Quote
                <ArrowDownRight className="size-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-neutral-800 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
