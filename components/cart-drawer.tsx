"use client"

import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col bg-card text-card-foreground">
        <SheetHeader>
          <SheetTitle className="text-foreground">Your Cart</SheetTitle>
          <SheetDescription>
            {items.length === 0
              ? "Your cart is empty."
              : `${items.length} item${items.length > 1 ? "s" : ""} in your cart.`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground text-sm">
              Nothing in here yet.
            </p>
            <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
              <Link href="/shop">Browse Shop</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.product.slug}
                    className="flex gap-4 border-b border-border pb-4 last:border-0"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                      <span className="text-xs text-muted-foreground font-mono">
                        IMG
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="text-sm font-medium leading-tight text-foreground">
                        {item.product.name}
                      </p>
                      <p className="text-sm text-primary font-mono">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon-sm"
                          onClick={() =>
                            updateQuantity(
                              item.product.slug,
                              item.quantity - 1
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-mono text-foreground">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon-sm"
                          onClick={() =>
                            updateQuantity(
                              item.product.slug,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => removeItem(item.product.slug)}
                          className="ml-auto text-muted-foreground hover:text-destructive"
                          aria-label="Remove item"
                        >
                          <Trash2 className="size-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col gap-3 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-semibold font-mono text-foreground">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping calculated at checkout.
              </p>
              <Button className="w-full" disabled>
                Checkout Coming Soon
              </Button>
              <Button
                variant="outline"
                className="w-full"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact-us">Request a Custom Quote</Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
