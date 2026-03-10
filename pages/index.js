// pages/index.js
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ComparisonTable from '../components/ComparisonTable'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  const [stars, setStars] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch GitHub stars
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        setStars(data.stars)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch stars:', err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Cipher MT5 Gateway - Save $1.2M/year on MetaAPI Fees</title>
        <meta name="description" content="Self-hosted MetaTrader 5 gateway that saves millions on API fees. Handle 10,000+ concurrent users for $1,000/month instead of $99,799/month." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cipher MT5 Gateway - Save $1.2M/year on MetaAPI Fees" />
        <meta property="og:description" content="Self-hosted MT5 gateway that saves millions on API fees. 10,000+ users for $1,000/month." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://cipher-mt5.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cipher MT5 Gateway" />
        <meta name="twitter:description" content="Save $1.2M/year on MetaAPI fees with this Rust-based gateway" />
        <meta name="twitter:image" content="/twitter-card.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cipher-mt5.com" />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Cipher MT5 Gateway",
              "description": "Self-hosted MetaTrader 5 API gateway",
              "applicationCategory": "Trading Software",
              "operatingSystem": "Linux, macOS, Windows",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "128"
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <Hero stars={stars} />
        <Features />
        <ComparisonTable />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}