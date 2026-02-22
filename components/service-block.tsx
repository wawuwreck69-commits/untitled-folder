import Link from "next/link"
import { ArrowRight, ArrowDownUp, PenTool, Cpu, Flame, Ship, Truck, Building2, Anchor, Landmark } from "lucide-react"
import { cn } from "@/lib/utils"

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

interface ServiceBlockProps {
  slug: string
  title: string
  description: string
  icon: string
  index: number
  className?: string
}

export function ServiceBlock({ slug, title, description, icon, index, className }: ServiceBlockProps) {
  const Icon = iconMap[icon] || PenTool

  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border border-border bg-card p-8 transition-all hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex size-12 items-center justify-center border border-border bg-muted/50 transition-colors group-hover:border-primary-foreground/30 group-hover:bg-primary-foreground/10 text-foreground group-hover:text-primary-foreground">
            <Icon className="size-5" />
          </div>
          <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/60">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-foreground">
        <span>View Capabilities</span>
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
