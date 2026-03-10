// components/ComparisonTable.js
import { useState } from 'react'
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState(null)
  const [activeTab, setActiveTab] = useState('cost')

  const costData = [
    { users: '1,000', metaapi: '$59,988', cipher: '$1,200', savings: '$58,788', savingPercent: '98%' },
    { users: '5,000', metaapi: '$299,988', cipher: '$3,600', savings: '$296,388', savingPercent: '99%' },
    { users: '10,000', metaapi: '$599,988', cipher: '$6,000', savings: '$593,988', savingPercent: '99%' },
    { users: '20,000', metaapi: '$1,197,588', cipher: '$12,000', savings: '$1,185,588', savingPercent: '99%' },
    { users: '50,000', metaapi: '$2,999,988', cipher: '$25,000', savings: '$2,974,988', savingPercent: '99%' },
  ]

  const featureComparison = [
    {
      category: "Pricing",
      features: [
        { name: "Cost per user/month", metaapi: "$5", cipher: "$0.05", cipher_better: true },
        { name: "Volume discounts", metaapi: "❌ No", cipher: "✅ Yes (scale up)" },
        { name: "Free tier", metaapi: "✅ 1 connection", cipher: "✅ Unlimited" },
        { name: "No surprise bills", metaapi: "❌", cipher: "✅ Fixed cost" },
      ]
    },
    {
      category: "Technical",
      features: [
        { name: "Latency", metaapi: "50-200ms", cipher: "5-10ms", cipher_better: true },
        { name: "Concurrent users", metaapi: "Limited by plan", cipher: "10,000+ per server" },
        { name: "WebSocket support", metaapi: "✅", cipher: "✅" },
        { name: "REST API", metaapi: "✅", cipher: "✅" },
        { name: "Rate limiting", metaapi: "✅ Strict", cipher: "✅ Configurable" },
        { name: "Multiple TPs", metaapi: "✅", cipher: "✅ Unlimited" },
      ]
    },
    {
      category: "Security",
      features: [
        { name: "JWT authentication", metaapi: "✅", cipher: "✅" },
        { name: "API keys", metaapi: "✅", cipher: "✅" },
        { name: "AES-256 encryption", metaapi: "❌", cipher: "✅" },
        { name: "Self-hosted", metaapi: "❌ Cloud only", cipher: "✅ Your servers" },
        { name: "Data sovereignty", metaapi: "❌ Their servers", cipher: "✅ Your control" },
      ]
    },
    {
      category: "Features",
      features: [
        { name: "Multiple accounts", metaapi: "Pay per account", cipher: "✅ Unlimited" },
        { name: "Historical data", metaapi: "✅ Limited", cipher: "✅ Full access" },
        { name: "Real-time quotes", metaapi: "✅", cipher: "✅" },
        { name: "Order modification", metaapi: "✅", cipher: "✅" },
        { name: "Position management", metaapi: "✅", cipher: "✅" },
        { name: "Account information", metaapi: "✅", cipher: "✅" },
      ]
    },
    {
      category: "Operations",
      features: [
        { name: "Prometheus metrics", metaapi: "❌", cipher: "✅ Built-in" },
        { name: "Grafana dashboards", metaapi: "❌", cipher: "✅ Included" },
        { name: "Docker support", metaapi: "❌", cipher: "✅" },
        { name: "Kubernetes ready", metaapi: "❌", cipher: "✅ Helm charts" },
        { name: "Load balancing", metaapi: "❌", cipher: "✅ HAProxy configs" },
        { name: "Auto-scaling", metaapi: "✅", cipher: "✅ You control it" },
      ]
    },
    {
      category: "Support",
      features: [
        { name: "Open source", metaapi: "❌ Proprietary", cipher: "✅ MIT License" },
        { name: "Community support", metaapi: "❌", cipher: "✅ Discord" },
        { name: "Documentation", metaapi: "✅", cipher: "✅ Comprehensive" },
        { name: "Custom features", metaapi: "❌", cipher: "✅ You build it" },
        { name: "Bug fixes", metaapi: "Wait for them", cipher: "✅ Immediate" },
      ]
    }
  ]

  return (
    <section id="comparison" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
              The Math is Clear
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Why pay $5 per user when you can host it yourself for pennies?
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-1 rounded-xl inline-flex flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('cost')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'cost' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Cost Comparison
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'features' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Feature Comparison
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'roi' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              ROI Calculator
            </button>
          </div>
        </div>

        {/* Cost Comparison Table */}
        {activeTab === 'cost' && (
          <div className="bg-gray-900 rounded-2xl p-6 md:p-8 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Users</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">MetaAPI.cloud (Yearly)</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Cipher MT5 (Yearly)</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Your Savings</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Save %</th>
                </tr>
              </thead>
              <tbody>
                {costData.map((row, i) => (
                  <tr 
                    key={i} 
                    className="border-b border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                  >
                    <td className="py-4 px-4 font-bold">{row.users}</td>
                    <td className="py-4 px-4 text-red-400 font-mono">{row.metaapi}</td>
                    <td className="py-4 px-4 text-green-400 font-mono">{row.cipher}</td>
                    <td className="py-4 px-4 text-yellow-400 font-bold">{row.savings}</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-500 bg-opacity-20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {row.savingPercent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {expandedRow !== null && (
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl animate-pulse-slow">
                <p className="text-white font-semibold">
                  💡 With {costData[expandedRow].users} users, you save {costData[expandedRow].savings} per year!
                  That's a new Tesla Model S every year 🚗
                </p>
              </div>
            )}
          </div>
        )}

        {/* Feature Comparison Table */}
        {activeTab === 'features' && (
          <div className="space-y-8">
            {featureComparison.map((category, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">{category.category}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-4 text-gray-400 font-medium">Feature</th>
                        <th className="text-left py-4 text-gray-400 font-medium">MetaAPI.cloud</th>
                        <th className="text-left py-4 text-gray-400 font-medium">Cipher MT5</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, i) => (
                        <tr key={i} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="py-4 font-medium">{feature.name}</td>
                          <td className="py-4">
                            {typeof feature.metaapi === 'string' && feature.metaapi.startsWith('✅') ? (
                              <span className="text-green-400">{feature.metaapi}</span>
                            ) : typeof feature.metaapi === 'string' && feature.metaapi.startsWith('❌') ? (
                              <span className="text-red-400">{feature.metaapi}</span>
                            ) : (
                              <span className={feature.metaapi === '✅' ? 'text-green-400' : 'text-red-400'}>
                                {feature.metaapi === '✅' ? <Check className="inline h-5 w-5" /> : 
                                 feature.metaapi === '❌' ? <X className="inline h-5 w-5" /> : feature.metaapi}
                              </span>
                            )}
                          </td>
                          <td className="py-4">
                            {typeof feature.cipher === 'string' && feature.cipher.startsWith('✅') ? (
                              <span className="text-green-400 font-semibold">{feature.cipher}</span>
                            ) : typeof feature.cipher === 'string' && feature.cipher.startsWith('❌') ? (
                              <span className="text-red-400">{feature.cipher}</span>
                            ) : (
                              <span className={feature.cipher_better ? 'text-green-400 font-semibold' : ''}>
                                {feature.cipher}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ROI Calculator */}
        {activeTab === 'roi' && (
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Calculate Your Savings</h3>
            
            <div className="max-w-md mx-auto">
              <label className="block text-gray-400 mb-2">Number of Users:</label>
              <input 
                type="range" 
                min="100" 
                max="50000" 
                step="100"
                className="w-full mb-4"
                onChange={(e) => {
                  const users = parseInt(e.target.value)
                  const metaapiCost = users * 5 * 12
                  const cipherCost = Math.ceil(users * 0.05 * 12)
                  const savings = metaapiCost - cipherCost
                  
                  document.getElementById('roi-display').innerHTML = `
                    <div class="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                      <div class="text-2xl font-bold mb-2">${users.toLocaleString()} Users</div>
                      <div class="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <div class="text-sm opacity-75">MetaAPI.cloud</div>
                          <div class="text-xl font-bold text-red-300">$${metaapiCost.toLocaleString()}/year</div>
                        </div>
                        <div>
                          <div class="text-sm opacity-75">Cipher MT5</div>
                          <div class="text-xl font-bold text-green-300">$${cipherCost.toLocaleString()}/year</div>
                        </div>
                      </div>
                      <div class="mt-4 pt-4 border-t border-white border-opacity-30">
                        <div class="text-sm opacity-75">You Save</div>
                        <div class="text-3xl font-bold text-yellow-300">$${savings.toLocaleString()}/year</div>
                      </div>
                    </div>
                  `
                }}
              />
              <div id="roi-display">
                <div class="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <div class="text-2xl font-bold mb-2">10,000 Users</div>
                  <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div class="text-sm opacity-75">MetaAPI.cloud</div>
                      <div class="text-xl font-bold text-red-300">$600,000/year</div>
                    </div>
                    <div>
                      <div class="text-sm opacity-75">Cipher MT5</div>
                      <div class="text-xl font-bold text-green-300">$6,000/year</div>
                    </div>
                  </div>
                  <div class="mt-4 pt-4 border-t border-white border-opacity-30">
                    <div class="text-sm opacity-75">You Save</div>
                    <div class="text-3xl font-bold text-yellow-300">$594,000/year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/yourusername/cipher-mt5-gateway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
          >
            Start Saving Today →
          </a>
        </div>
      </div>
    </section>
  )
}