import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "5th Element Manufacturing | Precision Metal Fabrication - Kelowna, BC",
  description:
    "Custom aluminum, stainless steel & steel fabrication. CWB-certified welding, CNC router & press brake processing. Truck decks, marine, architectural, and industrial fabrication. Serving North America since 2015.",
  keywords: [
    "metal fabrication",
    "aluminum fabrication",
    "stainless steel fabrication",
    "CNC router",
    "CNC press brake",
    "welding",
    "CWB certified",
    "Kelowna",
    "custom boats",
    "truck decks",
    "marine fabrication",
    "architectural metalwork",
  ],
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          <SiteHeader />
          <div className="min-h-screen">{children}</div>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
