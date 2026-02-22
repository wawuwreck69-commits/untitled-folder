#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const args = process.argv.slice(2)
const getArg = (name, fallback) => {
  const found = args.find((arg) => arg.startsWith(`${name}=`))
  if (!found) return fallback
  return found.slice(name.length + 1)
}

const pageUrl = getArg("--url", "https://www.5thelementmfg.com/truck-enhancements")
const maxImages = Number(getArg("--limit", "9"))
const outputDir = getArg("--out", "public/images/blog-google")

const LOGO_TERMS = [
  "logo",
  "brand",
  "branding",
  "brandmark",
  "icon",
  "emblem",
  "symbol",
  "favicon",
  "mark",
  "wordmark",
]

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]

const toAbsoluteUrl = (raw, base) => {
  if (!raw) return ""
  try {
    return new URL(raw, base).toString()
  } catch {
    return ""
  }
}

const looksLikeImageUrl = (url) => {
  const lower = url.toLowerCase().split("?")[0]
  if (IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext))) return true
  return lower.includes("images.squarespace-cdn.com") || lower.includes("static1.squarespace.com")
}

const isLikelyLogoUrl = (url) => {
  const lower = url.toLowerCase()
  return LOGO_TERMS.some((term) => lower.includes(term))
}

const extractMatches = (content, regex) => {
  const results = []
  let match
  while ((match = regex.exec(content)) !== null) {
    if (match[1]) results.push(match[1])
  }
  return results
}

const extensionFromContentType = (contentType) => {
  const type = (contentType || "").toLowerCase()
  if (type.includes("image/jpeg")) return "jpg"
  if (type.includes("image/png")) return "png"
  if (type.includes("image/webp")) return "webp"
  if (type.includes("image/gif")) return "gif"
  if (type.includes("image/avif")) return "avif"
  return "jpg"
}

const extensionFromUrl = (url) => {
  const clean = url.split("?")[0].toLowerCase()
  const ext = clean.split(".").pop()
  if (["jpg", "jpeg", "png", "webp", "gif", "avif"].includes(ext)) {
    return ext === "jpeg" ? "jpg" : ext
  }
  return ""
}

const htmlResponse = await fetch(pageUrl, {
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; image-importer/1.0)",
  },
})

if (!htmlResponse.ok) {
  console.error("Failed to fetch page", htmlResponse.status)
  process.exit(1)
}

const html = await htmlResponse.text()

const srcUrls = extractMatches(html, /<img[^>]+src=["']([^"']+)["']/gi)
const srcsetAttrs = extractMatches(html, /<img[^>]+srcset=["']([^"']+)["']/gi)
const ogImageUrls = extractMatches(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/gi)
const dataImageUrls = extractMatches(html, /data-image=["']([^"']+)["']/gi)

const srcsetUrls = srcsetAttrs
  .flatMap((srcset) => srcset.split(",").map((part) => part.trim().split(" ")[0]).filter(Boolean))

const allCandidates = [...srcUrls, ...srcsetUrls, ...ogImageUrls, ...dataImageUrls]
  .map((url) => toAbsoluteUrl(url, pageUrl))
  .filter(Boolean)
  .filter(looksLikeImageUrl)
  .filter((url) => !isLikelyLogoUrl(url))

const uniqueUrls = [...new Set(allCandidates)]

if (uniqueUrls.length === 0) {
  console.error("No candidate non-logo images found on page")
  process.exit(1)
}

await mkdir(outputDir, { recursive: true })

const manifest = []
let savedCount = 0

for (const sourceUrl of uniqueUrls) {
  if (savedCount >= maxImages) break

  try {
    const imageResponse = await fetch(sourceUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; image-importer/1.0)",
        Referer: pageUrl,
      },
    })

    if (!imageResponse.ok) continue

    const contentType = imageResponse.headers.get("content-type") || ""
    if (!contentType.toLowerCase().startsWith("image/")) continue

    const buffer = Buffer.from(await imageResponse.arrayBuffer())
    if (buffer.length < 20_000) continue

    const ext = extensionFromUrl(sourceUrl) || extensionFromContentType(contentType)
    const filename = `squarespace-${String(savedCount + 1).padStart(2, "0")}.${ext}`
    const filePath = path.join(outputDir, filename)

    await writeFile(filePath, buffer)

    manifest.push({
      filename,
      path: `/${outputDir.replace(/^public\//, "")}/${filename}`,
      sourceUrl,
      sourcePage: pageUrl,
      contentType,
      bytes: buffer.length,
    })

    savedCount += 1
  } catch {
    // Skip failed downloads and continue.
  }
}

if (savedCount === 0) {
  console.error("No images were downloaded from candidates")
  process.exit(1)
}

const manifestPath = path.join(outputDir, "manifest.json")
await writeFile(manifestPath, JSON.stringify({ pageUrl, savedCount, images: manifest }, null, 2))

console.log(`Saved ${savedCount} images to ${outputDir}`)
console.log(`Manifest: ${manifestPath}`)
