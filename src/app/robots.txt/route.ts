export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const host = request.headers.get("host") || "www.exonova-biotech.com"

  const isAuDomain = host.includes(".com.au")
  const sitemapUrl = isAuDomain
    ? `https://${host}/sitemap-au.xml`
    : `https://${host}/sitemap-global.xml`

  const robots = `
    User-agent: *
    Allow: /

    Sitemap: ${sitemapUrl}
    
    User-agent: Googlebot
    Crawl-delay: 1

    User-agent: Bingbot
    Crawl-delay: 1
  `

  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
