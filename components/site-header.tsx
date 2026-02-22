"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  ShoppingCart,
  Phone,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { manufacturingServices, productCategories } from "@/lib/data/services"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/project-gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact" },
]

function DesktopDropdown({
  label,
  items,
}: {
  label: string
  items: { slug: string; shortTitle: string }[]
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-xs font-medium text-white/50 transition-colors hover:text-white uppercase tracking-[0.2em]">
        {label}
        <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="min-w-56 rounded-none border border-white/10 bg-[#0a0a0a]/95 p-2 shadow-2xl backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="block rounded-none px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white hover:text-black"
            >
              {item.shortTitle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileAccordion({
  label,
  items,
  onClose,
}: {
  label: string
  items: { slug: string; shortTitle: string }[]
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-3 text-base font-medium text-white"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-2 pl-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="py-2 text-sm text-white/50 transition-colors hover:text-white"
              onClick={onClose}
            >
              {item.shortTitle}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { totalItems, setIsOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      {/* Top bar */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between px-8 py-1.5">
          <p className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase">
            Precision Metal Fabrication &bull; Kelowna, BC &bull; Serving North America
          </p>
          <a
            href="tel:250-491-0299"
            className="flex items-center gap-1.5 text-[10px] font-medium text-white/60 transition-colors hover:text-white font-mono tracking-widest"
          >
            <Phone className="size-3" />
            250-491-0299
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-4 px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <Image
            src="/logo-new2.svg"
            alt="5th Element Manufacturing logo"
            width={160}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex font-mono text-xs tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-white",
                pathname === link.href
                  ? "text-white"
                  : "text-white/50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <DesktopDropdown label="Services" items={manufacturingServices} />
          <DesktopDropdown label="Products" items={productCategories} />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:bg-white/10 size-10"
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-none bg-white text-[10px] font-bold text-black">
                {totalItems}
              </span>
            )}
          </Button>

          <Button asChild className="hidden md:inline-flex bg-white text-black hover:bg-white/90 font-mono text-xs tracking-[0.2em] uppercase px-6 py-5" size="default">
            <Link href="/contact-us">Request Quote</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 bg-[#050505] text-white border-r border-white/10"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3 text-white">
                  <Image
                    src="/logo-new2.svg"
                    alt="5th Element Manufacturing logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                  5th Element Mfg.
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col px-4 font-mono">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "border-b border-white/10 py-3 text-[10px] tracking-[0.2em] uppercase transition-colors hover:text-white",
                      pathname === link.href
                        ? "text-white"
                        : "text-white/50"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-b border-white/10">
                  <MobileAccordion
                    label="Services"
                    items={manufacturingServices}
                    onClose={() => setMobileOpen(false)}
                  />
                </div>
                <div className="border-b border-white/10">
                  <MobileAccordion
                    label="Products"
                    items={productCategories}
                    onClose={() => setMobileOpen(false)}
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild onClick={() => setMobileOpen(false)} className="bg-white text-black hover:bg-white/90">
                    <Link href="/contact-us">Request Quote</Link>
                  </Button>
                  <a
                    href="tel:250-491-0299"
                    className="flex items-center justify-center gap-2 text-[10px] text-white/40 font-mono tracking-widest"
                  >
                    <Phone className="size-4" />
                    250-491-0299
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
