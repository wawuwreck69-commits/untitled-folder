import Link from "next/link"
import { ArrowRight, PenTool, Cpu, ArrowDownUp, Flame, Ship, Truck, Building2, Anchor, Landmark } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool,
  Cpu,
  ArrowDownUp,
  Flame,
  Ship,
  Truck,
  Building2,
  Anchor,
  Landmark,
}

interface ServiceCardProps {
  slug: string
  title: string
  description: string
  icon: string
}

export function ServiceCard({ slug, title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] || PenTool

  return (
    <Link
      href={`/${slug}`}
      className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-accent"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
