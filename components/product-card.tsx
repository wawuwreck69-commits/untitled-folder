"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/data/products"

interface ProductCardProps {
  product: Product
}

const categoryLabels: Record<string, string> = {
  truck: "Truck",
  marine: "Marine",
  architectural: "Architectural",
  apparel: "Apparel",
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col overflow-hidden rounded-none border border-white/10 bg-white/5 transition-all hover:border-white/30">
      {/* Image placeholder */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative flex h-48 items-center justify-center bg-white/5 transition-colors group-hover:bg-white/10"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <ShoppingCart className="size-8 opacity-30" />
          <span className="text-xs font-mono">Product Image</span>
        </div>
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 text-[10px] bg-white/10 text-white border-0"
        >
          {categoryLabels[product.category] || product.category}
        </Badge>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="text-base font-semibold text-white transition-colors hover:text-white/80">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-lg font-bold text-white font-mono">
            ${product.price.toFixed(2)}
          </p>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
            className="bg-white text-black hover:bg-white/90"
          >
            <ShoppingCart className="size-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
