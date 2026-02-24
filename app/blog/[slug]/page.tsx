import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts"
import { BlogDetail } from "@/components/blog/blog-detail"

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

  return <BlogDetail post={post} />
}
