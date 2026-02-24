import type { Metadata } from "next"
import { blogPosts } from "@/lib/data/blog-posts"
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Technical Journal | 5th Element Manufacturing",
  description: "Build reports, process learnings, and fabrication-first standards from active projects.",
}

export default function BlogPage() {
  return <BlogList posts={blogPosts} />
}
