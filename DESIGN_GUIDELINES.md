# 5th Element Manufacturing - UI/UX & Motion Design Guidelines

This document outlines the core design philosophy, aesthetic principles, and animation standards established on the homepage. It serves as a blueprint for extending the application, ensuring that all new pages, components, and interactions feel harmonious, cinematic, and meticulously engineered.

## 1. Core Philosophy: "Cinematic Blueprint"
The aesthetic is driven by the concepts of **precision, industrial scale, and brutalist elegance**. It shouldn't feel like a standard SaaS website; it should feel like an operational terminal or an architectural blueprint brought to life. 

*   **Do not over-design:** Rely on stark contrast, structural borders, and negative space.
*   **Motion is intentional:** Animations should never feel bouncy or playful. They must feel mechanical, precise, and high-end.
*   **Data over decoration:** Use technical data (coordinates, tolerances, material grades) as structural UI elements.

---

## 2. Motion & Animation (Framer Motion)

All animations rely on specific mathematical easing curves to achieve a premium, "Apple-like" snap. Do not use default linear or ease-in-out curves.

### Standard Easing Curves
We export standard transition objects for consistency across all `framer-motion` components:

```typescript
// Premium, cinematic slide-ins (Slow, dramatic ease-out)
const smoothTransition = { 
  duration: 1, 
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
}

// Snappy, responsive micro-interactions (Hover states, small reveals)
const fastTransition = { 
  duration: 0.6, 
  ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] 
}
```

### Core Animation Patterns
1.  **The "Reveal Mask" (Text):** Massive typography should never just fade in. It should slide up from behind an invisible clipping mask.
    *   *Implementation:* Wrap the text in a `div` with `overflow-hidden`. Animate the child text from `y: "100%"` to `y: "0%"`.
2.  **Staggered Fade-Ups:** For lists, technical data, or grid items, use `staggerChildren: 0.1` and `delayChildren: 0.2` on the parent container, while children fade in and move from `y: 30` to `y: 0`.
3.  **Scroll Parallax:** Large editorial images should move at a slightly different speed than the scroll bar to create physical depth. Use `useScroll` and `useTransform` mapped from `[-15%, 15%]`.

---

## 3. Typography Hierarchy

We use a strict two-font system. 
*   **Sans-Serif (Inter):** For massive structural headers and readable body copy.
*   **Monospace (Geist Mono):** For all technical readouts, labels, and micro-copy.

### Scale Rules
*   **Hero Headers:** Outrageously large. Use viewport widths (e.g., `text-[10vw]`) with tightly squeezed line heights (`leading-[0.8]`) and tracking (`tracking-tighter`). **Always uppercase.**
*   **Section Headers:** `text-5xl` to `text-7xl`, bold, tight tracking, uppercase.
*   **Body Copy:** Elegant, light, and breathable. `text-lg` or `text-xl`, `font-light`, `text-black/60` or `text-white/50`, `leading-relaxed`.
*   **Technical / Micro-copy:** Tiny, widely tracked monospace. `font-mono text-[10px] tracking-[0.25em] uppercase`. Use this for labels, coordinates, and section tags (e.g., `[ 04 Core Capabilities ]`).

---

## 4. Interaction & Hover States

Hover states must feel tactile and mechanical.

### Links & Buttons
*   **Directional Fills:** Heavy CTAs should use an absolute background layer that scales in on the X-axis (`scale-x-0 origin-left group-hover:scale-x-100`).
*   **Icon Translations:** Arrow icons (`ArrowRight`, `ArrowDownRight`) should always translate slightly (`translate-x-1 translate-y-1`) on hover to indicate momentum.
*   **Enclosed Arrows:** In premium lists, wrap the arrow in a circular border (`size-8 rounded-full border border-black/20`).

### Interactive Lists (e.g., The Shop Floor)
*   Rows must have a bottom border (`border-b border-black/10`).
*   On hover:
    *   The primary text translates slightly to the right (`group-hover:translate-x-4`).
    *   An invisible background layer translates up from the bottom or fades in subtly (`bg-black/[0.02]`).
    *   The action arrow fades from `opacity-0` and slides in from `-translate-x-8`.

---

## 5. Signature UI Elements

To maintain the blueprint aesthetic, re-use these specific elements across new pages:

### The "Crosshair" (Precision Corners)
Used to anchor large sections or images, giving them a drafted/schematic feel.
```tsx
const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute size-4 pointer-events-none ${className}`}>
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2" />
    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current -translate-x-1/2" />
  </div>
)
```
*Usage:* Place these absolutely at `top-8 left-8`, `bottom-8 right-8`, etc., over images or dark hero sections.

### Hairline Borders
The layout relies on 1px borders to create a grid/blueprint structure.
*   Dark mode: `border-white/10`
*   Light mode: `border-black/10`
*   Avoid standard shadows (`shadow-md`). Rely on borders to separate content.

### The Dot Pattern
Use `<DotPattern className="mix-blend-screen opacity-15" />` in dark sections to add a subtle technical texture to the background.

---

## 6. Color Strategy & Contrast

*   **True Black / True White:** Use `#050505` for dark sections and `#ffffff` (or `#f2f2f2` for slight offsets) for light sections.
*   **Opacity is Key:** Instead of picking gray hex codes, use black or white with opacity modifiers (`text-white/40`, `text-white/80`, `bg-black/5`). This ensures perfect blending when placed over images or dot patterns.
*   **Selection Color:** Set global text selection to inverted colors (`selection:bg-white selection:text-black` in dark mode).

---

## 7. Developer Implementation Checklist

When building a new section or page, verify against this checklist:

- [ ] Does the section rely on 1px opacity borders (`border-black/10` or `border-white/10`) to separate content instead of box-shadows?
- [ ] Are all small labels and technical data using `font-mono uppercase tracking-[0.2em]`?
- [ ] Are massive headers wrapped in an `overflow-hidden` container and animated using the `revealMask` variant?
- [ ] Do all interactive elements (rows, cards, buttons) have a `.group` class with child elements responding to the hover state?
- [ ] Are animations utilizing the `ease-[cubic-bezier(0.16,1,0.3,1)]` custom curve rather than standard tailwind eases?
- [ ] Does the hierarchy clearly alternate between heavy, bold uppercase display text and highly legible, low-opacity light body copy?