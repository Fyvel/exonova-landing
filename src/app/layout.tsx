import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import "./parallax.css"
import { ClientProviders } from "@/components/ClientProviders"
import { PWA } from "@/components/PWA"

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "EXONOVA Biotech",
  description: "EXONOVA Biotech develops non-invasive blood-based tests for endometriosis diagnosis. Empowering women and healthcare professionals with fast, accurate, and insightful diagnostic solutions.",
  keywords: [
    "endometriosis diagnosis",
    "non-invasive blood test",
    "women's health",
    "biotech",
    "medical technology",
    "pelvic pain",
    "endometriosis biomarkers",
    "healthcare innovation",
    "diagnostic testing",
    "women's healthcare",
    "medical diagnostics",
    "reproductive health",
  ],
  authors: [{ name: "EXONOVA Biotech" }],
  creator: "EXONOVA Biotech",
  publisher: "EXONOVA Biotech",
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
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.exonova-biotech.com",
    siteName: "EXONOVA Biotech",
    title: "EXONOVA Biotech",
    description: "Non-invasive blood-based tests for endometriosis diagnosis. Empowering women and healthcare professionals with fast, accurate diagnostic solutions.",
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
    description: "Non-invasive blood-based tests for endometriosis diagnosis. Empowering women and healthcare professionals with fast, accurate diagnostic solutions.",
    images: ["/hero-banner.webp"],
    creator: "@exonova",
    site: "@exonova",
  },
  category: "Healthcare Technology",
  classification: "Medical Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
