// components/Footer.js
import { 
  Github, Twitter, Linkedin, Mail, Heart, 
  Rocket, Shield, Book, MessageCircle, FileText,
  Globe, Coffee, Award 
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/docs/api" },
        { name: "Changelog", href: "/docs/changelog" },
      ]
    },
    {
      title: "Community",
      links: [
        { name: "GitHub", href: "https://github.com/yourusername/cipher-mt5-gateway", external: true },
        { name: "Discord", href: "https://discord.gg/your-server", external: true },
        { name: "Twitter", href: "https://twitter.com/yourhandle", external: true },
        { name: "LinkedIn", href: "https://linkedin.com/company/yourcompany", external: true },
        { name: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/cipher-mt5", external: true },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Examples", href: "/examples" },
        { name: "FAQ", href: "/faq" },
        { name: "Support", href: "/support" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "License", href: "/license" },
      ]
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername/cipher-mt5-gateway", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/yourcompany", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@cipher-mt5.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Cipher MT5
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              The ultimate self-hosted MetaTrader 5 gateway. Save millions on API fees with Rust-powered performance.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            {/* GitHub stars badge */}
            <a 
              href="https://github.com/yourusername/cipher-mt5-gateway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              <span className="text-sm">Star on GitHub</span>
              <span className="ml-2 bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
                ★ 2.5k
              </span>
            </a>
          </div>

          {/* Link columns */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                      >
                        {link.name}
                        {link.external && (
                          <Globe className="h-3 w-3 ml-1 opacity-50" />
                        )}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, text: "Bank-Level Security" },
              { icon: Award, text: "MIT Licensed" },
              { icon: Coffee, text: "Built with Rust" },
              { icon: Heart, text: "Open Source Love" },
            ].map((badge, i) => {
              const Icon = badge.icon
              return (
                <div key={i} className="flex items-center justify-center space-x-2 text-gray-400">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{badge.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Cipher MT5 Gateway. 
            <span className="mx-2">•</span>
            Built with <Heart className="h-3 w-3 inline text-red-500" /> by KAPKEPOT
          </p>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/license" className="text-gray-400 hover:text-white transition-colors">
              License
            </Link>
            <a 
              href="https://status.cipher-mt5.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Status
            </a>
          </div>
        </div>

        {/* Star history */}
        <div className="mt-8 text-center">
          <a 
            href="https://star-history.com/#yourusername/cipher-mt5-gateway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="https://api.star-history.com/svg?repos=yourusername/cipher-mt5-gateway&type=Date"
              alt="Star History Chart"
              className="rounded-lg opacity-50 hover:opacity-100 transition-opacity max-w-full h-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}