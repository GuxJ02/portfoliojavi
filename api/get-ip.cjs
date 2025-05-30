// api/get-ip.cjs
const { createClient } = require('redis')

/** Singleton para no reconectar en cada invocación */
let client

async function getRedisClient() {
  if (!client) {
    const url = process.env.BDIPS_REDIS_URL
    if (!url) throw new Error('Missing BDIPS_REDIS_URL env var')
    client = createClient({ url })
    client.on('error', err => console.error('Redis Client Error', err))
    await client.connect()
  }
  return client
}

module.exports = async function handler(req, res) {
  try {
    // 1) Extraer la IP real
    const forwarded = req.headers['x-forwarded-for']
    const ip = typeof forwarded === 'string'
      ? forwarded.split(',')[0]
      : req.socket.remoteAddress

    // 2) Guardar en Redis
    const redis = await getRedisClient()
    await redis.lPush('ips', JSON.stringify({ ip, ts: Date.now() }))

    // 3) Devolver OK
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Function error:', err)
    res.status(500).json({ ok: false, error: err.message })
  }
}
