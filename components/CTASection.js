// components/CTASection.js
import { Github, Rocket, Star, ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Here you would send to your API
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4">
        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Start Saving{' '}
          <span className="text-yellow-300">Millions</span>
          <br />
          Today
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join 10,000+ traders who've ditched MetaAPI for our self-hosted solution
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://github.com/yourusername/cipher-mt5-gateway"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-2xl"
          >
            <Github className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform" />
            Star on GitHub
            <Star className="h-4 w-4 ml-2 text-yellow-500 fill-yellow-500" />
          </a>
          <a 
            href="/docs"
            className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
          >
            <Rocket className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform" />
            Read Documentation
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Newsletter signup */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>

        {subscribed && (
          <div className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-300 animate-pulse">
            ✅ Thanks! Check your email for confirmation.
          </div>
        )}

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-70">
          <span className="text-sm font-semibold tracking-wider">TRUSTED BY</span>
          <span className="text-lg font-bold">🚀 10,000+ TRADERS</span>
          <span className="text-lg font-bold">⚡ 50M+ ORDERS</span>
          <span className="text-lg font-bold">🏦 100+ BROKERS</span>
        </div>

        {/* Quick deploy */}
        <div className="mt-8 p-4 bg-black bg-opacity-30 rounded-lg inline-block">
          <code className="text-sm text-green-300">
            docker run -d -p 8080:8080 cipher-mt5-gateway:latest
          </code>
        </div>

        <p className="mt-4 text-sm opacity-75">
          ⚡ 5-minute deployment • Open source • MIT licensed • No credit card required
        </p>
      </div>
    </section>
  )
}