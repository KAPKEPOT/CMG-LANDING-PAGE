// pages/api/github.js
import { createHash } from 'crypto'

// Simple cache
const cache = new Map()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

// Validate GitHub token format
const validateGitHubToken = (token) => {
  return token && token.length > 20 && /^[a-zA-Z0-9_]+$/.test(token)
}

export default async function handler(req, res) {
  // Enable CORS with restrictions
  res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_APP_URL || '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    })
  }

  // Check cache first
  const cacheKey = 'github-stats'
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log('Serving from cache')
    return res.status(200).json({
      ...cached.data,
      cached: true,
      timestamp: cached.timestamp
    })
  }

  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Cipher-MT5-Landing-Page'
    }
    
    // Add GitHub token if available (for higher rate limits)
    const token = process.env.GITHUB_TOKEN
    if (token && validateGitHubToken(token)) {
      headers['Authorization'] = `token ${token}`
    }

    const repoName = process.env.NEXT_PUBLIC_GITHUB_REPO || 'KAPKEPOT/CMG'
    const response = await fetch(
      `https://api.github.com/repos/${repoName}`,
      { headers }
    )

    if (!response.ok) {
      // Handle different error types
      if (response.status === 404) {
        return res.status(404).json({ 
          error: 'Repository not found',
          code: 'REPO_NOT_FOUND'
        })
      }
      if (response.status === 403) {
        return res.status(403).json({ 
          error: 'Rate limit exceeded',
          code: 'RATE_LIMIT'
        })
      }
      throw new Error(`GitHub API responded with ${response.status}`)
    }

    const data = await response.json()

    // Sanitize and validate data
    const stats = {
      stars: Math.max(0, data.stargazers_count || 0),
      forks: Math.max(0, data.forks_count || 0),
      issues: Math.max(0, data.open_issues_count || 0),
      watchers: Math.max(0, data.subscribers_count || 0),
      updated_at: data.updated_at || new Date().toISOString(),
      description: data.description?.substring(0, 200) || 'Self-hosted MT5 gateway',
      license: data.license?.name || 'MIT',
    }

    // Update cache
    cache.set(cacheKey, {
      data: stats,
      timestamp: Date.now()
    })

    // Log for monitoring (without sensitive data)
    console.log(`GitHub stats fetched: ${stats.stars} stars`)

    res.status(200).json(stats)
    
  } catch (error) {
    console.error('GitHub API error:', error.message)
    
    // Return cached data if available (even if expired)
    const expiredCache = cache.get(cacheKey)
    if (expiredCache) {
      console.log('Serving expired cache due to error')
      return res.status(200).json({
        ...expiredCache.data,
        cached: true,
        stale: true,
        timestamp: expiredCache.timestamp
      })
    }
    
    // Fallback data
    res.status(200).json({
      stars: 2500,
      forks: 120,
      issues: 15,
      watchers: 300,
      updated_at: new Date().toISOString(),
      description: 'Self-hosted MT5 gateway - MetaAPI alternative',
      license: 'MIT',
      mock: true
    })
  }
}