import type { T3CeTextProps } from '@t3headless/next-typo3'
import { getT3Components } from '@t3headless/next-typo3'

export default function T3CeText({ bodytext, ...props }: T3CeTextProps) {
  const T3CeHeader = getT3Components().T3CeHeader
  const T3HtmlParser = getT3Components().T3HtmlParser

  return (
    <div className="t3-ce-text custom-class-name">
      <T3CeHeader {...props} />
      This is custom T3CeText component:
      {' '}
      {bodytext && <T3HtmlParser content={bodytext} />}
    </div>
  )
}
