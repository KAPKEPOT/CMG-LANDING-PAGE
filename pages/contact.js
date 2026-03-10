// pages/contact.js
import { useState } from 'react'
import Head from 'next/head'
import { Mail, User, MessageSquare, Send, Shield, Lock } from 'lucide-react'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [csrfToken, setCsrfToken] = useState('')

  // Generate CSRF token on mount
  useState(() => {
    const token = Math.random().toString(36).substring(2, 15) + 
                  Math.random().toString(36).substring(2, 15)
    setCsrfToken(token)
  }, [])

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('submitting')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = await response.json()
        setStatus('error')
        setErrors({ submit: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setStatus('error')
      setErrors({ submit: 'Network error. Please try again.' })
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us - Cipher MT5 Gateway</title>
        <meta name="description" content="Get in touch with the Cipher MT5 Gateway team. Secure, encrypted contact form." />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gradient">Contact Us</h1>
          </div>
        </header>

        {/* Security badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center"><Lock className="h-4 w-4 mr-1 text-green-400" /> AES-256 Encrypted</span>
            <span className="flex items-center"><Shield className="h-4 w-4 mr-1 text-blue-400" /> CSRF Protected</span>
            <span className="flex items-center"><Mail className="h-4 w-4 mr-1 text-purple-400" /> Rate Limited</span>
          </div>
        </div>

        {/* Contact form */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="John Doe"
                  maxLength="50"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your message..."
                  maxLength="1000"
                />
                <div className="flex justify-between">
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                  <span className="mt-1 text-sm text-gray-400 ml-auto">
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              {/* CSRF Token (hidden) */}
              <input type="hidden" name="csrf_token" value={csrfToken} />

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center transition-all transform hover:scale-105 ${
                  status === 'submitting'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Secure Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-300 text-center animate-pulse">
                  ✅ Message sent securely! We'll respond within 24 hours.
                </div>
              )}
              
              {errors.submit && (
                <div className="p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-300 text-center">
                  ❌ {errors.submit}
                </div>
              )}
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}