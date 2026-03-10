// pages/security.js
import Head from 'next/head'
import { Shield, Lock, Key, Eye, Server, Github } from 'lucide-react'
import Footer from '../components/Footer'

export default function Security() {
  const features = [
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "End-to-End Encryption",
      desc: "All sensitive data encrypted with AES-256 before storage"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "JWT Authentication",
      desc: "JSON Web Tokens with automatic expiration and refresh"
    },
    {
      icon: <Key className="h-8 w-8 text-yellow-400" />,
      title: "API Key Management",
      desc: "Securely generated API keys with scope-based permissions"
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-400" />,
      title: "Audit Logging",
      desc: "Complete audit trail of all security events"
    },
    {
      icon: <Server className="h-8 w-8 text-red-400" />,
      title: "Self-Hosted",
      desc: "Your data never leaves your infrastructure"
    },
    {
      icon: <Github className="h-8 w-8 text-gray-400" />,
      title: "Open Source",
      desc: "Fully auditable code with zero backdoors"
    }
  ]

  return (
    <>
      <Head>
        <title>Security - Cipher MT5 Gateway</title>
        <meta name="description" content="Security features and practices of Cipher MT5 Gateway. Bank-level encryption, JWT authentication, and more." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gradient">Security</h1>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bank-Level Security</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your trading infrastructure deserves the best protection. We've built security from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Security Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold">AES-256</div>
                <div className="text-sm text-gray-400">Encryption</div>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🔑</div>
                <div className="font-semibold">JWT</div>
                <div className="text-sm text-gray-400">Authentication</div>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-semibold">CSRF</div>
                <div className="text-sm text-gray-400">Protected</div>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold">GDPR</div>
                <div className="text-sm text-gray-400">Compliant</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}