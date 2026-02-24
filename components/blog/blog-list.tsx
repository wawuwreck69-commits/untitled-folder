"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BlogPost } from "@/lib/data/blog-posts"
import { Crosshair } from "@/components/ui/crosshair"
import { DotPattern } from "@/components/ui/dot-pattern"

const smoothTransition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothTransition }
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black relative overflow-hidden">
      <DotPattern className="mix-blend-screen opacity-15" />
      
      <section className="relative border-b border-white/10 py-32 md:py-48">
        <Crosshair className="top-8 left-8 text-white/20" />
        <Crosshair className="top-8 right-8 text-white/20" />
        <Crosshair className="bottom-8 left-8 text-white/20" />
        <Crosshair className="bottom-8 right-8 text-white/20" />
        
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8"
          >
            [ Technical Journal ]
          </motion.p>
          
          <h1 className="text-[11vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8 flex flex-col">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={smoothTransition}
                className="block"
              >
                Fabrication
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ ...smoothTransition, delay: 0.1 }}
                className="block"
              >
                Notes
              </motion.span>
            </div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Build reports, process learnings, and fabrication-first standards from active projects.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="mx-auto max-w-[100rem] px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-px bg-white/10 border border-white/10"
          >
            {posts.map((post) => (
              <motion.article key={post.slug} variants={itemVariants} className="bg-[#0a0a0a] group relative">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative flex flex-col md:flex-row md:items-start justify-between gap-8 p-8 md:p-14 border-b border-white/10 overflow-hidden"
                >
                  {/* Hover background layer */}
                  <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                  
                  <div className="md:w-[65%] relative z-10">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-4">
                      <span>{post.category}</span>
                      <span className="text-white/20">/</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6 group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {post.title}
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed font-light max-w-3xl group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="md:w-[20%] flex md:justify-end items-center gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 relative z-10">
                    <span className="group-hover:translate-x-[-10px] transition-transform duration-500">{post.date}</span>
                    <span className="size-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-500 overflow-hidden relative">
                       <ArrowRight className="size-4 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] absolute" />
                       <ArrowRight className="size-4 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] absolute" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
