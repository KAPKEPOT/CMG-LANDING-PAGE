// pages/pricing.js
import Head from 'next/head'
import Link from 'next/link'
import { 
  Check, X, Rocket, Users, Zap, Shield,
  TrendingUp, Clock, Server, Cloud,
  ArrowRight, HelpCircle, Star
} from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: "Self-Hosted",
      description: "Run on your own infrastructure",
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited connections", included: true },
        { name: "All features included", included: true },
        { name: "Full source code", included: true },
        { name: "MIT License", included: true },
        { name: "Community support", included: true },
        { name: "Docker images", included: true },
        { name: "Prometheus metrics", included: true },
        { name: "Grafana dashboards", included: true },
        { name: "Load balancing ready", included: true },
        { name: "Auto-scaling", included: true },
        { name: "Custom modifications", included: true },
      ],
      cta: "Deploy Now",
      href: "https://github.com/yourusername/cipher-mt5-gateway",
      popular: false,
      icon: Server
    },
    {
      name: "Cloud Hosted",
      description: "We host and manage for you",
      price: {
        monthly: 499,
        yearly: 4990
      },
      features: [
        { name: "Up to 1000 users", included: true },
        { name: "99.99% uptime SLA", included: true },
        { name: "24/7 support", included: true },
        { name: "Automatic backups", included: true },
        { name: "Managed updates", included: true },
        { name: "DDoS protection", included: true },
        { name: "Global CDN", included: true },
        { name: "Custom domain", included: true },
        { name: "SSL certificates", included: true },
        { name: "Advanced monitoring", included: true },
        { name: "Priority support", included: true },
        { name: "SLA guarantees", included: true },
      ],
      cta: "Contact Sales",
      href: "/contact",
      popular: true,
      icon: Cloud
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: {
        monthly: "Custom",
        yearly: "Custom"
      },
      features: [
        { name: "Unlimited users", included: true },
        { name: "Multi-region deployment", included: true },
        { name: "Dedicated support team", included: true },
        { name: "Custom SLAs", included: true },
        { name: "On-premise options", included: true },
        { name: "Security audits", included: true },
        { name: "Training sessions", included: true },
        { name: "Custom development", included: true },
        { name: "White-labeling", included: true },
        { name: "Source code escrow", included: true },
        { name: "Volume discounts", included: true },
        { name: "Dedicated account manager", included: true },
      ],
      cta: "Contact Us",
      href: "/contact",
      popular: false,
      icon: TrendingUp
    }
  ]

  const comparisonData = [
    { feature: "Max Users", self: "Unlimited", cloud: "1,000", enterprise: "Unlimited" },
    { feature: "Latency", self: "5-10ms", cloud: "50-100ms", enterprise: "5-10ms" },
    { feature: "Data Location", self: "Your servers", cloud: "Our servers", enterprise: "Your choice" },
    { feature: "Source Code", self: "✅ Full", cloud: "❌", enterprise: "✅ Optional" },
    { feature: "Custom Features", self: "✅ Build yourself", cloud: "❌", enterprise: "✅ We build" },
    { feature: "Support", self: "Community", cloud: "24/7 Priority", enterprise: "Dedicated" },
    { feature: "SLA", self: "Best effort", cloud: "99.99%", enterprise: "Custom" },
    { feature: "Setup Time", self: "1 hour", cloud: "Instant", enterprise: "1-2 weeks" },
  ]

  return (
    <>
      <Head>
        <title>Pricing - Cipher MT5 Gateway</title>
        <meta name="description" content="Choose the perfect plan for your trading operation. Self-hosted for free or let us manage it for you." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Rocket className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Cipher MT5
                </span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/docs" className="text-gray-300 hover:text-white">Docs</Link>
                <Link href="/pricing" className="text-white font-semibold">Pricing</Link>
                <a href="https://github.com/yourusername/cipher-mt5-gateway" className="text-gray-300 hover:text-white">GitHub</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Start for free with self-hosting, or let us handle the infrastructure
            </p>
          </div>
        </section>

        {/* Billing toggle */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-1 rounded-xl inline-flex">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  billing === 'monthly' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`px-6 py-2 rounded-lg font-semibold transition relative ${
                  billing === 'yearly' ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => {
              const Icon = plan.icon
              return (
                <div
                  key={idx}
                  className={`relative bg-gray-800 rounded-2xl p-8 transition-all transform hover:-translate-y-2 ${
                    plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''
                  }`}
                  onMouseEnter={() => setSelectedPlan(idx)}
                  onMouseLeave={() => setSelectedPlan(null)}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-3 ${
                      plan.popular ? 'bg-blue-600' : 'bg-gray-700'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                  </div>

                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {typeof plan.price[billing] === 'number' ? (
                      <>
                        <span className="text-4xl font-bold">
                          ${plan.price[billing]}
                        </span>
                        <span className="text-gray-400">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">{plan.price[billing]}</span>
                    )}
                  </div>

                  <a
                    href={plan.href}
                    target={plan.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors mb-8 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        )}
                        <span className="text-sm text-gray-300">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Comparison table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Plan Comparison</h2>
          <div className="bg-gray-800 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4">Feature</th>
                  <th className="text-left py-4">Self-Hosted</th>
                  <th className="text-left py-4">Cloud Hosted</th>
                  <th className="text-left py-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4">
                      {row.self === '✅ Full' ? (
                        <span className="text-green-400">{row.self}</span>
                      ) : row.self === '❌' ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : (
                        row.self
                      )}
                    </td>
                    <td className="py-4">
                      {row.cloud === '✅' ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : row.cloud === '❌' ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : (
                        row.cloud
                      )}
                    </td>
                    <td className="py-4">
                      {row.enterprise === '✅ Optional' ? (
                        <span className="text-yellow-400">{row.enterprise}</span>
                      ) : row.enterprise === '❌' ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Is self-hosting really free?",
                a: "Yes! The gateway is open source under MIT license. You can deploy it on your own servers completely free. You only pay for your infrastructure costs."
              },
              {
                q: "How many users can self-hosting handle?",
                a: "With proper infrastructure, self-hosting can handle 10,000+ concurrent users on a single server. Add load balancing for even more."
              },
              {
                q: "What's included in cloud hosting?",
                a: "Cloud hosting includes managed infrastructure, 24/7 support, automatic updates, backups, and an SLA. We handle everything."
              },
              {
                q: "Can I switch between plans?",
                a: "Absolutely! Start with self-hosting and upgrade to cloud hosting anytime. Or start with cloud and move to self-hosting if you prefer."
              },
              {
                q: "Do you offer discounts for volume?",
                a: "Yes! Contact us for custom pricing if you have more than 5,000 users or need enterprise features."
              },
              {
                q: "Is there a free trial for cloud?",
                a: "Yes! We offer a 14-day free trial for cloud hosting with full features. No credit card required."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-400 mr-2" />
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8 opacity-90">Deploy in 5 minutes or contact us for a custom solution</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/yourusername/cipher-mt5-gateway"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Deploy Now
              </a>
              <a 
                href="/contact"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
              >
                Contact Sales
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}