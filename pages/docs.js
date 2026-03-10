// pages/docs.js
import Head from 'next/head'
import Link from 'next/link'
import { 
  Book, Code, Terminal, Globe, Shield, Zap,
  ChevronRight, Github, Download, Package,
  Rocket, Settings, Webhook, Database
} from 'lucide-react'
import Footer from '../components/Footer'

export default function Docs() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Rocket className="h-6 w-6 text-blue-400" />,
      links: [
        { title: "Quick Start Guide", href: "/docs/quickstart" },
        { title: "Installation", href: "/docs/installation" },
        { title: "Configuration", href: "/docs/configuration" },
        { title: "Authentication", href: "/docs/auth" },
        { title: "First Trade", href: "/docs/first-trade" },
      ]
    },
    {
      title: "API Reference",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      links: [
        { title: "REST API Overview", href: "/docs/rest" },
        { title: "WebSocket API", href: "/docs/websocket" },
        { title: "Account Endpoints", href: "/docs/endpoints/account" },
        { title: "Order Endpoints", href: "/docs/endpoints/orders" },
        { title: "Market Data", href: "/docs/endpoints/market" },
      ]
    },
    {
      title: "Guides",
      icon: <Book className="h-6 w-6 text-green-400" />,
      links: [
        { title: "Deploy with Docker", href: "/docs/guides/docker" },
        { title: "Kubernetes Setup", href: "/docs/guides/kubernetes" },
        { title: "Load Balancing", href: "/docs/guides/load-balancing" },
        { title: "Monitoring", href: "/docs/guides/monitoring" },
        { title: "Scaling", href: "/docs/guides/scaling" },
      ]
    },
    {
      title: "Examples",
      icon: <Terminal className="h-6 w-6 text-yellow-400" />,
      links: [
        { title: "Python Client", href: "/docs/examples/python" },
        { title: "Node.js Client", href: "/docs/examples/nodejs" },
        { title: "Go Client", href: "/docs/examples/go" },
        { title: "Rust Client", href: "/docs/examples/rust" },
        { title: "C# Client", href: "/docs/examples/csharp" },
      ]
    },
    {
      title: "Integrations",
      icon: <Globe className="h-6 w-6 text-pink-400" />,
      links: [
        { title: "Telegram Bot", href: "/docs/integrations/telegram" },
        { title: "Discord Bot", href: "/docs/integrations/discord" },
        { title: "Webhooks", href: "/docs/integrations/webhooks" },
        { title: "Grafana", href: "/docs/integrations/grafana" },
        { title: "Prometheus", href: "/docs/integrations/prometheus" },
      ]
    },
    {
      title: "Advanced",
      icon: <Settings className="h-6 w-6 text-orange-400" />,
      links: [
        { title: "Architecture", href: "/docs/advanced/architecture" },
        { title: "Security", href: "/docs/advanced/security" },
        { title: "Performance Tuning", href: "/docs/advanced/performance" },
        { title: "Custom Extensions", href: "/docs/advanced/extensions" },
        { title: "Contributing", href: "/docs/advanced/contributing" },
      ]
    }
  ]

  const quickLinks = [
    { icon: Download, text: "Installation", href: "/docs/installation", color: "blue" },
    { icon: Package, text: "Docker", href: "/docs/guides/docker", color: "cyan" },
    { icon: Code, text: "API Reference", href: "/docs/rest", color: "purple" },
    { icon: Github, text: "GitHub", href: "https://github.com/yourusername/cipher-mt5-gateway", color: "gray", external: true },
  ]

  return (
    <>
      <Head>
        <title>Documentation - Cipher MT5 Gateway</title>
        <meta name="description" content="Complete documentation for Cipher MT5 Gateway - installation, API reference, guides, and examples." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Rocket className="h-8 w-8 text-blue-500" />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Cipher MT5
                  </span>
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-white font-semibold">Documentation</span>
              </div>
              <a 
                href="https://github.com/yourusername/cipher-mt5-gateway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Documentation
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Everything you need to deploy and use Cipher MT5 Gateway
            </p>
          </div>
        </section>

        {/* Quick links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <a
                  key={i}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className={`bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-center transition-all transform hover:-translate-y-1 group`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-3 text-${link.color}-400 group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium">{link.text}</span>
                </a>
              )
            })}
          </div>
        </section>

        {/* Documentation grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-700 rounded-lg mr-3">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Code example */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Example</h2>
            <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-green-400">
{`// Connect to gateway
const client = new GatewayClient('http://localhost:8080')
await client.authenticate('your-api-key')

// Get account info
const account = await client.getAccountInfo()
console.log(account)

// Subscribe to real-time quotes
client.on('EURUSD', (quote) => {
  console.log(\`EURUSD: \${quote.bid}/\${quote.ask}\`)
})

// Place an order
const order = await client.placeOrder({
  symbol: 'EURUSD',
  side: 'buy',
  volume: 0.01,
  sl: 1.0950,
  tp: 1.1050
})`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Help section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-6 opacity-90">
              Join our community or open an issue on GitHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/your-server"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Discord
              </a>
              <a 
                href="https://github.com/yourusername/cipher-mt5-gateway/issues"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                GitHub Issues
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}