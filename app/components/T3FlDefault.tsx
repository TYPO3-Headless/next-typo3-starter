'use client'
import { T3Context } from '@t3headless/next-typo3'
import Link from 'next/link'
import { useContext } from 'react'

export default function T3FlDefault({ children }: { children: React.ReactNode }) {
  const context = useContext(T3Context)

  const menuItems = (context?.initialData?.navigation ?? []).map((item) => {
    return (
      <li
        key={item.title}
        className="t3-nav__link"
      >
        <Link href={item.link}>{item.title}</Link>
      </li>
    )
  })

  return (
    <>
      <nav className="flex justify-center gap-3 items-center h-8 border-orange-500 border-b">
        Custom
        <ul className="flex justify-center gap-3 items-center">
          { menuItems }
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
