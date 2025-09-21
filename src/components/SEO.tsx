
type SEOProps = {
  googleVerification?: string
  bingVerification?: string
  gaId?: string
}
export function SEO({ googleVerification, bingVerification, gaId }: SEOProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2d314dff" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="referrer" content="origin-when-cross-origin" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="canonical" href="https://www.exonova-biotech.com" />


      {/* Search Engine Verification */}
      {googleVerification && (<meta name="google-site-verification" content={googleVerification} />)}
      {bingVerification && (<meta name="msvalidate.01" content={bingVerification} />)}

      {/* Google Analytics */}
      {gaId && (<>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
          }}
        />
      </>)}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "EXONOVA Biotech",
            description: "EXONOVA Biotech develops non-invasive blood-based tests for endometriosis diagnosis",
            url: "https://www.exonova-biotech.com",
            logo: {
              "@type": "ImageObject",
              url: "https://www.exonova-biotech.com/logo.png",
              width: 112,
              height: 112,
            },
            sameAs: [
              "https://www.linkedin.com/company/exonova-biotech",
            ],
            foundingDate: "2024",
            areaServed: "Australia",
            medicalSpecialty: ["Gynecology", "Reproductive Health", "Medical Technology"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "",
              contactType: "Contact",
              email: "fanny.blaudez@exonova.com.au",
              areaServed: "AU",
              availableLanguage: "English",
            },
          }),
        }}
      />

      {/* Search Result Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "EXONOVA Biotech - Endometriosis Diagnosis Innovation",
            "url": "https://www.exonova-biotech.com",
            "mainEntity": [
              {
                "@type": "WebPageElement",
                "name": "Problem",
                "url": "https://www.exonova-biotech.com/#problem",
                "description": "Current endometriosis diagnosis methods are invasive, costly, and unreliable",
              },
              {
                "@type": "WebPageElement",
                "name": "Solution",
                "url": "https://www.exonova-biotech.com/#solution",
                "description": "Non-invasive blood-based tests for endometriosis diagnosis",
              },
              {
                "@type": "WebPageElement",
                "name": "Impact",
                "url": "https://www.exonova-biotech.com/#impact",
                "description": "Empowering women and healthcare professionals with fast, accurate diagnostic solutions",
              },
              {
                "@type": "WebPageElement",
                "name": "Roadmap",
                "url": "https://www.exonova-biotech.com/#roadmap",
                "description": "Our development timeline and milestones",
              },
              {
                "@type": "WebPageElement",
                "name": "Contact",
                "url": "https://www.exonova-biotech.com/#contact",
                "description": "Get in touch with EXONOVA Biotech",
              },
            ],
          }),
        }}
      />
    </>
  )
}
