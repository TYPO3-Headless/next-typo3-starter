import { registerT3Components } from '@t3headless/next-typo3'
import { getT3RootLayout } from '@t3headless/next-typo3/ssr'

import { Open_Sans } from 'next/font/google'
import t3components from './components'
import './globals.css'

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

registerT3Components(t3components)

const T3RootLayout = getT3RootLayout({ className: openSans.className })
function RootLayout({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <T3RootLayout {...props}>
      {children}
    </T3RootLayout>
  )
}
export default RootLayout
