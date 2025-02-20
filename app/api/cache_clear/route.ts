import type { NextRequest } from 'next/server'
import { clearCache } from '@t3headless/next-typo3'

export async function POST(request: NextRequest) {
  return await clearCache(request)
}
