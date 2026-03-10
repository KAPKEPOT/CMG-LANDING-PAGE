// components/Features.js
import { 
  Zap, Users, Globe, Shield, Server, TrendingUp, 
  DollarSign, Clock, Lock, BarChart, Cloud, Cpu 
} from 'lucide-react'
import { useState } from 'react'

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Lightning Fast",
      desc: "10ms latency - 20x faster than MetaAPI.cloud",
      stats: "10ms avg",
      color: "yellow"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Massive Scale",
      desc: "Handle 10,000+ concurrent users on a single server",
      stats: "10k+ users",
      color: "blue"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-400" />,
      title: "WebSocket + REST",
      desc: "Real-time data and traditional REST API",
      stats: "Full duplex",
      color: "green"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "Bank-Level Security",
      desc: "JWT, API keys, AES-256 encryption",
      stats: "Military grade",
      color: "purple"
    },
    {
      icon: <Server className="h-8 w-8 text-red-400" />,
      title: "Self-Hosted",
      desc: "Your data stays on your servers. Full control.",
      stats: "100% private",
      color: "red"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-pink-400" />,
      title: "Multiple TPs",
      desc: "Full support for multiple take profits",
      stats: "Unlimited TPs",
      color: "pink"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-400" />,
      title: "Cost Effective",
      desc: "$0.05 per user/month vs $5 on MetaAPI",
      stats: "100x cheaper",
      color: "emerald"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-400" />,
      title: "24/7 Uptime",
      desc: "Built for high availability with auto-failover",
      stats: "99.99% SLA",
      color: "orange"
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-400" />,
      title: "End-to-End Encryption",
      desc: "All traffic encrypted, passwords hashed",
      stats: "AES-256",
      color: "indigo"
    },
    {
      icon: <BarChart className="h-8 w-8 text-cyan-400" />,
      title: "Prometheus Metrics",
      desc: "Built-in monitoring with Grafana dashboards",
      stats: "Full observability",
      color: "cyan"
    },
    {
      icon: <Cloud className="h-8 w-8 text-sky-400" />,
      title: "Docker Ready",
      desc: "One-command deployment with Docker Compose",
      stats: "Containerized",
      color: "sky"
    },
    {
      icon: <Cpu className="h-8 w-8 text-violet-400" />,
      title: "Rust Powered",
      desc: "Memory-safe, thread-safe, and blazing fast",
      stats: "Zero-cost abstractions",
      color: "violet"
    }
  ]

  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Enterprise Features</span>
            <br />
            Open Source Price
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to replace MetaAPI.cloud, with the performance of Rust
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-gray-800 rounded-2xl p-8 h-full hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon */}
                <div className={`mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.desc}</p>

                {/* Stats badge */}
                <div className={`absolute top-4 right-4 bg-${feature.color}-500 bg-opacity-20 text-${feature.color}-400 px-3 py-1 rounded-full text-xs font-semibold`}>
                  {feature.stats}
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Performance",
              value: "10ms",
              description: "Average order latency",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              title: "Reliability",
              value: "99.99%",
              description: "Uptime SLA",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              title: "Scalability",
              value: "10k+",
              description: "Concurrent users",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`inline-block bg-gradient-to-r ${stat.gradient} p-8 rounded-2xl`}>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white text-opacity-90">{stat.title}</div>
                <div className="text-sm text-white text-opacity-75 mt-2">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}