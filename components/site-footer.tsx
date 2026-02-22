import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { manufacturingServices, productCategories } from "@/lib/data/services"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[100rem] px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-new2.svg"
                alt="5th Element Manufacturing logo"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Precision aluminum, stainless steel, and steel fabrication.
              CWB-certified welding. Serving North America since 2015.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/40 font-mono text-[10px] tracking-widest">
              <a
                href="https://maps.google.com/?q=1455+Dilworth+Dr,+Kelowna,+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/40" />
                <span>1455 Dilworth Dr, Kelowna, BC V1V 1R4</span>
              </a>
              <a
                href="tel:250-491-0299"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-white/40" />
                250-491-0299
              </a>
              <a
                href="mailto:info@5thelementmfg.com"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-white/40" />
                info@5thelementmfg.com
              </a>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-white/40" />
                <div>
                  <p>Mon - Fri: 7:00 AM - 4:00 PM</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white font-mono">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/shop", label: "Shop" },
                { href: "/project-gallery", label: "Project Gallery" },
                { href: "/contact-us", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 transition-colors hover:text-white font-mono text-[10px] tracking-widest uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white font-mono">
              Manufacturing Services
            </h3>
            <nav className="flex flex-col gap-2.5">
              {manufacturingServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="text-sm text-white/40 transition-colors hover:text-white font-mono text-[10px] tracking-widest uppercase"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white font-mono">
              Our Products
            </h3>
            <nav className="flex flex-col gap-2.5">
              {productCategories.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="text-sm text-white/40 transition-colors hover:text-white font-mono text-[10px] tracking-widest uppercase"
                >
                  {p.shortTitle}
                </Link>
              ))}
              <Link
                href="/shop"
                className="text-sm font-medium text-white transition-colors hover:text-white/80 font-mono text-[10px] tracking-widest uppercase"
              >
                Browse Shop
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between gap-2 px-8 py-5 sm:flex-row">
          <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} 5th Element Innovation & Manufacturing Ltd. All
            rights reserved.
          </p>
          <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
            Kelowna, BC &bull; Serving North America
          </p>
        </div>
      </div>
    </footer>
  )
}
