// lib/rate-limit.js
const rateLimit = (options) => {
  const tokenCache = new Map()
  
  return {
    check: (res, limit, token) => {
      return new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0, Date.now()]
        const currentTime = Date.now()
        const windowMs = options.interval || 60000
        
        if (currentTime - tokenCount[1] > windowMs) {
          tokenCount[0] = 0
          tokenCount[1] = currentTime
        }
        
        tokenCount[0]++
        
        if (tokenCount[0] > limit) {
          res.setHeader('X-RateLimit-Limit', limit)
          res.setHeader('X-RateLimit-Remaining', 0)
          res.setHeader('X-RateLimit-Reset', tokenCount[1] + windowMs)
          reject()
        } else {
          tokenCache.set(token, tokenCount)
          res.setHeader('X-RateLimit-Limit', limit)
          res.setHeader('X-RateLimit-Remaining', limit - tokenCount[0])
          res.setHeader('X-RateLimit-Reset', tokenCount[1] + windowMs)
          resolve()
        }
      })
    }
  }
}

export default rateLimit