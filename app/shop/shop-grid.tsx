"use client"

import { useState } from "react"
import { products } from "@/lib/data/products"
import { ProductCard } from "@/components/product-card"

const categories = [
  { value: "all", label: "All" },
  { value: "truck", label: "Truck" },
  { value: "marine", label: "Marine" },
  { value: "architectural", label: "Architectural" },
  { value: "apparel", label: "Apparel" },
]

export function ShopGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col gap-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`rounded-none px-6 py-3 text-xs font-medium font-mono tracking-[0.2em] uppercase transition-colors ${
              activeCategory === cat.value
                ? "bg-white text-black"
                : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-16 text-center">
          <p className="text-lg font-medium text-white">
            No products in this category yet.
          </p>
          <p className="text-sm text-white/50">
            Contact us for custom fabrication in this category.
          </p>
        </div>
      )}
    </div>
  )
}
