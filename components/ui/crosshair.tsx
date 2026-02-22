import { cn } from "@/lib/utils"

export function Crosshair({ className }: { className?: string }) {
  return (
    <div className={cn("absolute size-4 pointer-events-none opacity-50", className)}>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
    </div>
  )
}
