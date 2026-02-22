import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { galleryItems } from "@/lib/data/gallery"
import { SectionHeading } from "@/components/section-heading"

export function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Project Gallery"
          subtitle="Real builds. Real installs. Real materials."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-muted"
            >
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-xs font-mono">Gallery Image</span>
                <span className="text-[10px] text-muted-foreground/60">
                  {item.title}
                </span>
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/project-gallery">
              Browse Full Gallery
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
