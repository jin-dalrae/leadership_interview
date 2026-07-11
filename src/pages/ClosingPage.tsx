import { ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'

export function ClosingPage() {
  return (
    <ShaderPage
      id="closing"
      shaderId="ink-bleed"
      mode="layered"
      height="70vh"
      shaderOpacity={1}
      contentClassName="closing-page"
    >
      <Writing as="p" variant="eyebrow" motion="scramble-decode" scroll="skew">
        Final thought
      </Writing>
      <Writing
        as="h2"
        variant="heading"
        motion="split-reveal"
        scroll="rotate"
        scrollOptions={{ rotate: [-3, 4] }}
      >
        Leadership is a design practice
      </Writing>
      <Writing as="p" variant="body" motion="blur-in" scroll="drift">
        The best design leaders don&apos;t just critique screens — they redesign how their
        organization pays attention.
      </Writing>
      <a className="page-cta" href={`${import.meta.env.BASE_URL}catalog#hero`}>
        Back to top
      </a>
    </ShaderPage>
  )
}