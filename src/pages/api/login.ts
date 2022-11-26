import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function items(req: VercelRequest, res: VercelResponse) {
  console.log(res, res)
  return 'ok'
}
