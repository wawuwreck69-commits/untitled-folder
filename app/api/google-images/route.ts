import { NextResponse } from "next/server"
import { fallbackImages, fetchGoogleImages } from "@/lib/google-images"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q") || "5th element manufacturing"
  const limitParam = Number(searchParams.get("limit") || "9")
  const limit = Number.isFinite(limitParam) ? Math.min(Math.max(limitParam, 1), 12) : 9

  try {
    const images = await fetchGoogleImages(query, limit)
    if (images.length > 0) {
      return NextResponse.json(
        { source: "google-cse", query, count: images.length, images },
        { headers: { "Cache-Control": "s-maxage=43200, stale-while-revalidate=86400" } },
      )
    }

    return NextResponse.json(
      { source: "fallback", query, count: Math.min(limit, fallbackImages.length), images: fallbackImages.slice(0, limit) },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } },
    )
  } catch {
    return NextResponse.json(
      { source: "fallback", query, count: Math.min(limit, fallbackImages.length), images: fallbackImages.slice(0, limit) },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } },
    )
  }
}
