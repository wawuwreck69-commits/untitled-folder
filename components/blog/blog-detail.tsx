"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import { BlogPost } from "@/lib/data/blog-posts"
import { Crosshair } from "@/components/ui/crosshair"

const smoothTransition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
}

const fastTransition = {
  duration: 0.6,
  ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number]
}

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: smoothTransition }
}

export function BlogDetail({ post }: { post: BlogPost }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="bg-[#f2f2f2] text-[#050505] selection:bg-black selection:text-white relative min-h-screen">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-50 origin-left"
        style={{ scaleX }}
      />

      <section className="relative border-b border-black/10 py-24 md:py-32 overflow-hidden">
        <Crosshair className="top-8 left-8 text-black/20" />
        <Crosshair className="top-8 right-8 text-black/20" />
        <Crosshair className="bottom-8 left-8 text-black/20" />
        <Crosshair className="bottom-8 right-8 text-black/20" />

        <div className="mx-auto max-w-[70rem] px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={fastTransition}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors mb-16"
            >
              <ArrowLeft className="size-3 group-hover:-translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              Back to Journal
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8 flex flex-wrap items-center gap-4"
          >
            <span className="text-black px-2 py-1 border border-black/10">{post.category}</span>
            <span className="text-black/20">/</span>
            <span>{post.readTime}</span>
            <span className="text-black/20">/</span>
            <span>{post.date}</span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] max-w-5xl flex flex-col">
            <div className="overflow-hidden py-2">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ ...smoothTransition, delay: 0.2 }}
                className="block"
              >
                {post.title}
              </motion.span>
            </div>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-[70rem] px-4 md:px-8 lg:px-12">
          <motion.article
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="relative bg-white border border-black/10 p-8 md:p-16 shadow-sm"
          >
            <Crosshair className="top-0 left-0 text-black/20 -translate-x-1/2 -translate-y-1/2" />
            <Crosshair className="top-0 right-0 text-black/20 translate-x-1/2 -translate-y-1/2" />
            <Crosshair className="bottom-0 left-0 text-black/20 -translate-x-1/2 translate-y-1/2" />
            <Crosshair className="bottom-0 right-0 text-black/20 translate-x-1/2 translate-y-1/2" />

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-black font-light leading-relaxed mb-12 border-l-2 border-black/20 pl-6"
            >
              {post.excerpt}
            </motion.p>
            
            <div className="space-y-8">
              {post.body.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-lg md:text-xl text-black/65 leading-relaxed font-light"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  )
}
