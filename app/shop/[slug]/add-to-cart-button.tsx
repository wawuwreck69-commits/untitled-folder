"use client"

import { useState } from "react"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/data/products"

export function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-md border border-border">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
          >
            <Minus className="size-3" />
          </Button>
          <span className="w-10 text-center text-sm font-mono text-foreground">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="size-3" />
          </Button>
        </div>
        <Button
          size="lg"
          className="flex-1"
          onClick={() => {
            addItem(product, quantity)
            setQuantity(1)
          }}
        >
          <ShoppingCart className="size-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
