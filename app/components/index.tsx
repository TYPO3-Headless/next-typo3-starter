import type { T3Components } from '@t3headless/next-typo3'
import { lazy } from 'react'

export default {
  T3FlDefault: lazy(() => import('./T3FlDefault')),
  T3CeText: lazy(() => import('./T3CeText')),
} as T3Components
