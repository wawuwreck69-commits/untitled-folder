import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts"

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found | 5th Element Manufacturing",
    }
  }

  return {
    title: `${post.title} | 5th Element Manufacturing`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-[#f2f2f2] text-[#050505] selection:bg-black selection:text-white">
      <section className="border-b border-black/10 py-24 md:py-32">
        <div className="mx-auto max-w-[70rem] px-8 md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors mb-12"
          >
            <ArrowLeft className="size-3" />
            Back to Journal
          </Link>

          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8 flex items-center gap-4">
            <span>{post.category}</span>
            <span className="text-black/20">/</span>
            <span>{post.readTime}</span>
            <span className="text-black/20">/</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] max-w-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[70rem] px-8 md:px-12">
          <article className="bg-white border border-black/10 p-8 md:p-14">
            <p className="text-2xl text-black/70 font-light leading-relaxed mb-10">{post.excerpt}</p>
            <div className="space-y-8">
              {post.body.map((paragraph) => (
                <p key={paragraph} className="text-lg md:text-xl text-black/65 leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
