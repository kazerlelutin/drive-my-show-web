import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function items(_req: VercelRequest, _res: VercelResponse) {
  return 'ok'
}
