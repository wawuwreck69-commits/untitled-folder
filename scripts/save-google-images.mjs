#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const LOGO_TERMS = [
  "logo",
  "brand",
  "branding",
  "brandmark",
  "icon",
  "emblem",
  "symbol",
  "favicon",
  "transparent",
  "vector",
  ".svg",
]

const GOOGLE_CSE_ENDPOINT = "https://www.googleapis.com/customsearch/v1"

const args = process.argv.slice(2)
const getArg = (name, fallback) => {
  const found = args.find((arg) => arg.startsWith(`${name}=`))
  if (!found) return fallback
  return found.slice(name.length + 1)
}

const query = getArg("--q", "5th element manufacturing")
const maxImages = Number(getArg("--limit", "9"))
const outputDir = getArg("--out", "public/images/blog-google")

const apiKey = process.env.GOOGLE_CSE_API_KEY
const cseId = process.env.GOOGLE_CSE_CX

if (!apiKey || !cseId) {
  console.error("Missing GOOGLE_CSE_API_KEY or GOOGLE_CSE_CX environment variables")
  process.exit(1)
}

const toLowerText = (...parts) =>
  parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

const isLikelyLogo = (item) => {
  const haystack = toLowerText(item.title, item.snippet, item.displayLink, item.image?.contextLink, item.link)
  const hasLogoKeyword = LOGO_TERMS.some((term) => haystack.includes(term))
  const width = item.image?.width ?? 0
  const height = item.image?.height ?? 0
  const isSmallGraphic = width > 0 && height > 0 ? width <= 320 || height <= 220 : false
  const isSvgLike = (item.link ?? "").toLowerCase().includes(".svg")
  return hasLogoKeyword || isSmallGraphic || isSvgLike
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

const params = new URLSearchParams({
  key: apiKey,
  cx: cseId,
  q: query,
  searchType: "image",
  safe: "active",
  num: "10",
})

const searchResponse = await fetch(`${GOOGLE_CSE_ENDPOINT}?${params.toString()}`)
if (!searchResponse.ok) {
  console.error("Google CSE request failed", searchResponse.status)
  process.exit(1)
}

const payload = await searchResponse.json()
const items = Array.isArray(payload.items) ? payload.items : []
const filtered = items.filter((item) => item?.link && !isLikelyLogo(item))

if (filtered.length === 0) {
  console.error("No non-logo images returned by search")
  process.exit(1)
}

await mkdir(outputDir, { recursive: true })

const manifest = []
let savedCount = 0

for (const item of filtered) {
  if (savedCount >= maxImages) break

  try {
    const imageResponse = await fetch(item.link)
    if (!imageResponse.ok) continue

    const contentType = imageResponse.headers.get("content-type") || ""
    if (!contentType.toLowerCase().startsWith("image/")) continue

    const buffer = Buffer.from(await imageResponse.arrayBuffer())
    if (buffer.length < 20_000) continue

    const ext = extensionFromUrl(item.link) || extensionFromContentType(contentType)
    const filename = `google-${String(savedCount + 1).padStart(2, "0")}.${ext}`
    const filePath = path.join(outputDir, filename)

    await writeFile(filePath, buffer)

    manifest.push({
      filename,
      path: `/${outputDir.replace(/^public\//, "")}/${filename}`,
      sourceUrl: item.link,
      title: item.title || "",
      sourcePage: item.image?.contextLink || item.displayLink || "",
      contentType,
      bytes: buffer.length,
    })

    savedCount += 1
  } catch {
    // Skip failed image downloads and continue.
  }
}

if (savedCount === 0) {
  console.error("No images were downloaded")
  process.exit(1)
}

const manifestPath = path.join(outputDir, "manifest.json")
await writeFile(manifestPath, JSON.stringify({ query, savedCount, images: manifest }, null, 2))

console.log(`Saved ${savedCount} images to ${outputDir}`)
console.log(`Manifest: ${manifestPath}`)
