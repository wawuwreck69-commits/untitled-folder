"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const projectTypes = [
  "3D CAD Design",
  "CNC Router Processing",
  "CNC Press Brake Forming",
  "Welding & Fabrication / Repair",
  "Truck Decks & Accessories",
  "Structures, Stairs & Railings",
  "Marine / Boats",
  "Architectural & Outdoor Products",
  "Other",
]

const timelines = [
  "ASAP / Rush",
  "Within 2 weeks",
  "Within 1 month",
  "Within 3 months",
  "Flexible / No rush",
]

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure / Need a quote",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <Send className="size-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Quote Request Sent</h2>
        <p className="max-w-sm text-sm text-white/50">
          Thank you for your inquiry. We typically respond within 24 hours
          during business days. If your project is urgent, call us at{" "}
          <a
            href="tel:250-491-0299"
            className="font-medium text-white hover:underline"
          >
            250-491-0299
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="border-white/20 text-white hover:bg-white/10 hover:text-white">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-white">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-white">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-white">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="250-555-0199"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className="text-white">Company</Label>
          <Input
            id="company"
            placeholder="Your company (optional)"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label className="text-white">
            Project Type <span className="text-red-500">*</span>
          </Label>
          <Select required>
            <SelectTrigger className="bg-white/5 border-white/10 text-white w-full">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type} className="focus:bg-white/10 focus:text-white">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-white">Timeline</Label>
          <Select>
            <SelectTrigger className="bg-white/5 border-white/10 text-white w-full">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              {timelines.map((t) => (
                <SelectItem key={t} value={t} className="focus:bg-white/10 focus:text-white">
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-white">Budget Range (Optional)</Label>
        <Select>
          <SelectTrigger className="bg-white/5 border-white/10 text-white w-full">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
            {budgetRanges.map((b) => (
              <SelectItem key={b} value={b} className="focus:bg-white/10 focus:text-white">
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-white">
          Project Details / Specs{" "}
          <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Describe your project. Include dimensions, materials, quantities, and any special requirements. You can also email CAD files or photos to info@5thelementmfg.com."
          rows={6}
          required
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="bg-white text-black hover:bg-white/90">
        <Send className="size-4" />
        Submit Quote Request
      </Button>

      <p className="text-xs text-white/40">
        By submitting this form, you agree to our{" "}
        <a
          href="/privacy-policy"
          className="text-white hover:underline"
        >
          Privacy Policy
        </a>
        . We will never share your information with third parties.
      </p>
    </form>
  )
}
