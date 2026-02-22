import { Send, CheckCircle2, Hammer, Truck } from "lucide-react"

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Send Specs",
    description:
      "Email your drawings, CAD files, photos, or even a napkin sketch. We work with what you have.",
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "Confirm",
    description:
      "We review your project, provide a detailed quote, and confirm materials, timeline, and pricing.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Fabricate",
    description:
      "Your project goes into production. CNC cutting, forming, welding, finishing - all in-house.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Deliver / Install",
    description:
      "We ship across North America or deliver and install locally in the Okanagan.",
  },
]

export function ProcessBlock() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.step} className="group relative flex flex-col gap-3">
          {/* Connector line (hidden on last item) */}
          {index < steps.length - 1 && (
            <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
          )}
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <step.icon className="size-5" />
            </div>
            <span className="text-2xl font-bold text-border font-mono">
              {step.step}
            </span>
          </div>
          <h3 className="text-base font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  )
}
