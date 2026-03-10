// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Self-hosted MT5 gateway that saves millions on MetaAPI fees. Handle 10,000+ concurrent users for $1,000/month instead of $99,799/month." />
        <meta name="keywords" content="MT5 gateway, MetaTrader 5 API, MetaAPI alternative, Rust trading API, Forex API, self-hosted MT5 bridge" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cipher MT5 Gateway - Save $1.2M/year on MetaAPI Fees" />
        <meta property="og:description" content="Self-hosted MT5 gateway that saves millions on API fees. 10,000+ users for $1,000/month." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://cipher-mt5.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cipher MT5 Gateway" />
        <meta name="twitter:description" content="Save $1.2M/year on MetaAPI fees with this Rust-based gateway" />
        <meta name="twitter:image" content="/twitter-card.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}