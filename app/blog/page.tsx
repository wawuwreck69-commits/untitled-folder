import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/data/blog-posts"

export default function BlogPage() {
  return (
    <main className="bg-[#050505] text-[#ededed] selection:bg-white selection:text-black">
      <section className="border-b border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-8">[ Technical Journal ]</p>
          <h1 className="text-[11vw] md:text-[7vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
            Fabrication
            <br />
            Notes
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            Build reports, process learnings, and fabrication-first standards from active projects.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[100rem] px-8 md:px-12">
          <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-[#0a0a0a] group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col md:flex-row md:items-start justify-between gap-8 p-8 md:p-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
                >
                  <div className="md:w-[65%]">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-4">
                      <span>{post.category}</span>
                      <span className="text-white/20">/</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6 group-hover:translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {post.title}
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed font-light max-w-3xl">{post.excerpt}</p>
                  </div>
                  <div className="md:w-[20%] flex md:justify-end items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                    <span>{post.date}</span>
                    <span className="size-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform duration-500" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
