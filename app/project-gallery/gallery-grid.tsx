"use client"

import { useState } from "react"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { galleryItems, galleryCategories } from "@/lib/data/gallery"

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null)

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="flex flex-col gap-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-muted text-left transition-all hover:ring-2 hover:ring-primary/50"
            onClick={() => setSelectedItem(item)}
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
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-16 text-center">
          <p className="text-lg font-medium text-foreground">
            No projects in this category yet.
          </p>
          <p className="text-sm text-muted-foreground">
            Check back soon for more project photos.
          </p>
        </div>
      )}

      {/* Lightbox */}
      <Dialog
        open={!!selectedItem}
        onOpenChange={() => setSelectedItem(null)}
      >
        <DialogContent className="max-w-3xl bg-card">
          {selectedItem && (
            <>
              <DialogTitle className="text-foreground">{selectedItem.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedItem.description}
              </DialogDescription>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <span className="text-sm font-mono">
                    {selectedItem.title}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {selectedItem.alt}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
