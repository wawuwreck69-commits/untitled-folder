import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CtaStripProps {
  title?: string
  description?: string
}

export function CtaStrip({
  title = "Ready to Start Your Project?",
  description = "Send us your specs, drawings, or napkin sketches. We'll get you a quote within 24 hours.",
}: CtaStripProps) {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {title}
        </h2>
        <p className="max-w-xl text-base text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact-us">
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:250-491-0299">
              <Phone className="size-4" />
              250-491-0299
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          Mon - Fri: 7:00 AM - 4:00 PM PST
        </p>
      </div>
    </section>
  )
}
