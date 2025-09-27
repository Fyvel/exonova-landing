type SEOProps = {
  googleVerification?: string
  bingVerification?: string
  gaId?: string
  isAuDomain: boolean
}

export function SEO({ googleVerification, bingVerification, gaId, isAuDomain }: SEOProps) {
  const canonicalUrl = isAuDomain
    ? "https://www.exonova.com.au"
    : "https://www.exonova-biotech.com"

  const currentDomain = isAuDomain
    ? "www.exonova.com.au"
    : "www.exonova-biotech.com"

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
                  linker: { domains: ['exonova.com.au', 'exonova-biotech.com'] },
                  custom_map: { 'custom_parameter_1': 'domain_type'}
                });
                gtag('event', 'page_view', {
                  domain_type: '${isAuDomain ? "australia" : "global"}'
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
            url: canonicalUrl,
            logo: {
              "@type": "ImageObject",
              url: `https://${currentDomain}/logo.png`,
              width: 112,
              height: 112,
            },
            sameAs: [
              "https://www.linkedin.com/company/exonova-biotech",
            ],
            foundingDate: "2025",
            areaServed: "Australia",
            medicalSpecialty: ["Gynecology", "Reproductive Health", "Medical Technology"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Contact",
              email: "fanny.blaudez@exonova.com.au",
              areaServed: isAuDomain ? "AU" : "Global",
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
            "url": canonicalUrl,
            "mainEntity": [
              {
                "@type": "WebPageElement",
                "name": "Problem",
                "url": `https://${currentDomain}/#problem`,
                "description": "Current endometriosis diagnosis methods are invasive, costly, and unreliable",
              },
              {
                "@type": "WebPageElement",
                "name": "Solution",
                "url": `https://${currentDomain}/#solution`,
                "description": "Non-invasive blood-based tests for endometriosis diagnosis",
              },
              {
                "@type": "WebPageElement",
                "name": "Impact",
                "url": `https://${currentDomain}/#impact`,
                "description": "Empowering women and healthcare professionals with fast, accurate diagnostic solutions",
              },
              {
                "@type": "WebPageElement",
                "name": "Roadmap",
                "url": `https://${currentDomain}/#roadmap`,
                "description": "Our development timeline and milestones",
              },
              {
                "@type": "WebPageElement",
                "name": "Contact",
                "url": `https://${currentDomain}/#contact`,
                "description": "Get in touch with EXONOVA Biotech",
              },
            ],
          }),
        }}
      />
    </>
  )
}
