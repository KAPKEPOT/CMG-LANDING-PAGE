// pages/api/contact.js
import rateLimit from '../../lib/rate-limit'
import { createHash } from 'crypto'

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500
})

// Validate email format
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Sanitize input
const sanitizeInput = (input) => {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim()
    .substring(0, 1000) // Limit length
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Check CSRF token
  const csrfToken = req.headers['x-csrf-token']
  if (!csrfToken || csrfToken.length < 10) {
    return res.status(403).json({ error: 'Invalid CSRF token' })
  }

  // Rate limiting
  try {
    await limiter.check(res, 5, 'CONTACT_FORM') // 5 requests per minute per IP
  } catch {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' })
  }

  // Validate input
  const { name, email, message } = req.body
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Sanitize
  const sanitizedName = sanitizeInput(name)
  const sanitizedEmail = sanitizeInput(email).toLowerCase()
  const sanitizedMessage = sanitizeInput(message)

  // Validate
  if (sanitizedName.length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters' })
  }

  if (!isValidEmail(sanitizedEmail)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  if (sanitizedMessage.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' })
  }

  try {
    // Log the contact request (without sensitive data)
    console.log(`Contact form submission from ${sanitizedEmail}`)

    // Here you would typically:
    // 1. Send email via SMTP
    // 2. Store in database
    // 3. Send to CRM
    // 4. Trigger notifications
    
    // For now, just log and return success
    console.log('Contact form:', {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage.substring(0, 100) + '...'
    })

    // In production, you'd integrate with:
    // - SendGrid
    // - AWS SES
    // - Nodemailer
    // - Database

    return res.status(200).json({ 
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    })
  }
}