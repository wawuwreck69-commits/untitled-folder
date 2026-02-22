export interface SearchImage {
  url: string
  title: string
  source: string
}

type GoogleImageItem = {
  title?: string
  link?: string
  snippet?: string
  displayLink?: string
  image?: {
    contextLink?: string
    width?: number
    height?: number
  }
}

const GOOGLE_CSE_ENDPOINT = "https://www.googleapis.com/customsearch/v1"
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

const toLowerText = (...parts: Array<string | undefined>) =>
  parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

const isLikelyLogo = (item: GoogleImageItem) => {
  const haystack = toLowerText(item.title, item.snippet, item.displayLink, item.image?.contextLink, item.link)
  const hasLogoKeyword = LOGO_TERMS.some((term) => haystack.includes(term))
  const isSmallGraphic = (item.image?.width ?? 0) > 0 && (item.image?.height ?? 0) > 0
    ? (item.image?.width ?? 0) <= 320 || (item.image?.height ?? 0) <= 220
    : false
  const isSvgLike = (item.link ?? "").toLowerCase().includes(".svg")

  return hasLogoKeyword || isSmallGraphic || isSvgLike
}

export async function fetchGoogleImages(query: string, limit = 9): Promise<SearchImage[]> {
  const apiKey = process.env.GOOGLE_CSE_API_KEY
  const cseId = process.env.GOOGLE_CSE_CX

  if (!apiKey || !cseId) {
    return []
  }

  const params = new URLSearchParams({
    key: apiKey,
    cx: cseId,
    q: query,
    searchType: "image",
    safe: "active",
    num: String(Math.min(Math.max(limit * 2, 6), 10)),
  })

  const response = await fetch(`${GOOGLE_CSE_ENDPOINT}?${params.toString()}`, {
    next: { revalidate: 60 * 60 * 12 },
  })

  if (!response.ok) {
    return []
  }

  const payload = (await response.json()) as { items?: GoogleImageItem[] }
  const filtered = (payload.items ?? []).filter((item) => {
    if (!item.link || !item.title) return false
    return !isLikelyLogo(item)
  })

  const seen = new Set<string>()
  const deduped = filtered.filter((item) => {
    const key = item.link ?? ""
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return deduped.slice(0, limit).map((item) => ({
    url: item.link as string,
    title: item.title as string,
    source: item.image?.contextLink ?? item.displayLink ?? "",
  }))
}

export const fallbackImages: SearchImage[] = [
  {
    url: "/images/about-shop.jpg",
    title: "5th Element shop floor",
    source: "local",
  },
  {
    url: "/images/hero-welding.jpg",
    title: "5th Element welding",
    source: "local",
  },
  {
    url: "/images/cnc-router.jpg",
    title: "5th Element CNC router",
    source: "local",
  },
  {
    url: "/images/press-brake.jpg",
    title: "5th Element press brake",
    source: "local",
  },
  {
    url: "/images/custom-boat.jpg",
    title: "5th Element marine fabrication",
    source: "local",
  },
  {
    url: "/images/truck-deck.jpg",
    title: "5th Element truck deck",
    source: "local",
  },
]
