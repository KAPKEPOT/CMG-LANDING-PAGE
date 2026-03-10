// components/Hero.js
import { Rocket, Zap, Github } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero({ stars }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-8 border border-gray-700">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
          <span className="text-sm text-gray-300">Live on GitHub</span>
          {stars > 0 && (
            <span className="ml-2 bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
              ★ {stars.toLocaleString()} stars
            </span>
          )}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient animate-gradient">
            Save $1.2M/year
          </span>
          <br />
          <span className="text-white">
            on MetaAPI Fees
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Self-hosted MT5 gateway that handles{' '}
          <span className="text-blue-400 font-semibold">10,000+ concurrent users</span>{' '}
          for <span className="text-green-400 font-bold">$1,000/month</span>{' '}
          instead of <span className="text-red-400 line-through">$99,799/month</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://github.com/yourusername/cipher-mt5-gateway"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
          >
            <Github className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform" />
            Star on GitHub
            {stars > 0 && (
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-lg text-sm">
                ★ {stars.toLocaleString()}
              </span>
            )}
          </a>
          <a 
            href="/docs"
            className="group bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center border border-gray-700"
          >
            <Zap className="h-6 w-6 mr-2 group-hover:text-yellow-400 transition-colors" />
            View Documentation
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10ms', label: 'Latency', color: 'blue' },
            { value: '50k/s', label: 'Messages', color: 'purple' },
            { value: '10k+', label: 'Concurrent Users', color: 'green' },
            { value: '100%', label: 'Open Source', color: 'pink' },
          ].map((stat, i) => (
            <div key={i} className={`text-center transform hover:scale-110 transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                 style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}