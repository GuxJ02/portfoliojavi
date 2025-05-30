// /api/get-ip.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from 'redis'

// Reutiliza la misma instancia entre invocaciones
let client: ReturnType<typeof createClient>

function getRedisClient() {
  if (!client) {
    client = createClient({ url: process.env.BDIPS_REDIS_URL })
    client.on('error', (err) => console.error('Redis Client Error', err))
    client.connect().catch(console.error)
  }
  return client
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1) Extrae la IP real
  const forwarded = req.headers['x-forwarded-for']
  const ip =
    typeof forwarded === 'string'
      ? forwarded.split(',')[0]
      : req.socket.remoteAddress

  // 2) Guarda en la lista "ips"
  const redis = getRedisClient()
  await redis.lPush('ips', JSON.stringify({ ip, ts: Date.now() }))

  // 3) Responde OK
  res.status(200).json({ ok: true })
}
