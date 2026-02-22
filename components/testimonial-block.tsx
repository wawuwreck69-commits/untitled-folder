import { Quote } from "lucide-react"
import type { Testimonial } from "@/lib/data/testimonials"

interface TestimonialBlockProps {
  testimonial: Testimonial
  variant?: "card" | "inline"
}

export function TestimonialBlock({
  testimonial,
  variant = "card",
}: TestimonialBlockProps) {
  if (variant === "inline") {
    return (
      <div className="flex flex-col gap-4 border-l-2 border-primary pl-6 py-2">
        <Quote className="size-6 text-primary/50" />
        <blockquote className="text-base text-foreground/90 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
      <Quote className="size-6 text-primary/50" />
      <blockquote className="text-base text-card-foreground/90 leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-auto border-t border-border pt-4">
        <p className="text-sm font-semibold text-card-foreground">
          {testimonial.author}
        </p>
        <p className="text-xs text-muted-foreground">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  )
}
