// pages/api/github.js
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Fetch GitHub repo data
    const response = await fetch(
      'https://api.github.com/repos/KAPKEPOT/CMG',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add GitHub token if you have one for higher rate limits
          // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }

    const data = await response.json()

    // Return only needed data
    res.status(200).json({
      stars: data.stargazers_count,
      forks: data.forks_count,
      issues: data.open_issues_count,
      watchers: data.subscribers_count,
      updated_at: data.updated_at,
      description: data.description,
      license: data.license?.name,
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    
    // Return fallback data
    res.status(200).json({
      stars: 2500,
      forks: 120,
      issues: 15,
      watchers: 300,
      updated_at: new Date().toISOString(),
      description: 'Self-hosted MT5 gateway - MetaAPI alternative',
      license: 'MIT',
      mock: true // Indicates this is mock data
    })
  }
}