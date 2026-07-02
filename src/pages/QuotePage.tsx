import { ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'

interface QuotePageProps {
  quote: string
  attribution: string
  shaderId?: string
  index?: number
}

export function QuotePage({
  quote,
  attribution,
  shaderId = 'gradient-mesh',
  index = 2,
}: QuotePageProps) {
  return (
    <ShaderPage
      id={`quote-${index}`}
      shaderId={shaderId}
      mode="immersive"
      height="80vh"
      shaderOpacity={1}
      contentClassName="quote-page"
    >
      <Writing
        as="blockquote"
        variant="quote"
        motion="clip-reveal"
        scroll="rotate"
        scrollOptions={{ rotate: [-6, 8] }}
        float
      >
        {quote}
      </Writing>
      <Writing as="cite" variant="cite" motion="fade-up" scroll="skew">
        — {attribution}
      </Writing>
    </ShaderPage>
  )
}