// /app/not-found.tsx
'use client'
import { getT3Components } from '@t3headless/next-typo3'
import Link from 'next/link'

export default function NotFound() {
  const T3FlDefault = getT3Components().T3FlDefault
  return (
    <T3FlDefault>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </T3FlDefault>
  )
}
