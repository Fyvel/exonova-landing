import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import { headers } from "next/headers"
import "./globals.css"
import "./parallax.css"
import { ClientProviders } from "@/components/ClientProviders"
import { SEO } from "@/components/SEO"
import { PWA } from "@/components/PWA"

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
})

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") || "exonova-biotech.com"
  const isAuDomain = host.includes(".com.au")

  const canonicalUrl = isAuDomain
    ? "https://www.exonova.com.au"
    : "https://www.exonova-biotech.com"

  return {
    metadataBase: new URL(canonicalUrl),
    title: "EXONOVA Biotech",
    description:
      "EXONOVA Biotech develops non-invasive blood-based tests for endometriosis diagnosis. Empowering women and healthcare professionals with fast, accurate, and insightful diagnostic solutions.",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-AU": "https://www.exonova.com.au",
        "en": "https://www.exonova-biotech.com",
        "x-default": "https://www.exonova-biotech.com",
      },
    },
    openGraph: {
      type: "website",
      locale: isAuDomain ? "en_AU" : "en",
      url: canonicalUrl,
      siteName: "EXONOVA Biotech",
      title: "EXONOVA Biotech",
      description:
        "Non-invasive blood-based tests for endometriosis diagnosis. Empowering women and healthcare professionals with fast, accurate diagnostic solutions.",
      images: [
        {
          url: "/hero-banner.webp",
          width: 1200,
          height: 630,
          alt: "EXONOVA Biotech - Endometriosis Diagnosis Innovation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "EXONOVA Biotech",
      description:
        "Non-invasive blood-based tests for endometriosis diagnosis. Empowering women and healthcare professionals with fast, accurate diagnostic solutions.",
      images: ["/hero-banner.webp"],
      creator: "@exonova",
      site: "@exonova",
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const host = (await headers()).get("host") || "exonova-biotech.com"
  const isAuDomain = host.includes(".com.au")
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEO
          googleVerification={googleVerification}
          bingVerification={bingVerification}
          gaId={gaId}
          isAuDomain={isAuDomain}
        />
        <PWA />
      </head>
      <body className={`${notoSansJP.variable}`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
