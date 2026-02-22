import { Shield, Clock, Award, MapPin } from "lucide-react"

const trustItems = [
  {
    icon: Clock,
    label: "Since 2015",
    description: "Serving North America",
  },
  {
    icon: Shield,
    label: "CWB Certified",
    description: "Certified welding",
  },
  {
    icon: Award,
    label: "Precision CNC",
    description: "Router & press brake",
  },
  {
    icon: MapPin,
    label: "Kelowna, BC",
    description: "Local fabrication",
  },
]

export function TrustStrip() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {trustItems.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center"
        >
          <item.icon className="size-6 text-primary" />
          <p className="text-sm font-semibold text-foreground">{item.label}</p>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
