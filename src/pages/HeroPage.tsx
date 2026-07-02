import { ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'

export function HeroPage() {
  return (
    <ShaderPage
      id="hero"
      shaderId="aurora"
      mode="immersive"
      contentClassName="hero-page"
      height="100vh"
    >
      <Writing as="p" variant="eyebrow" motion="char-stagger">
        Leadership Interview · 01
      </Writing>
      <Writing
        as="h1"
        variant="title"
        motion="split-reveal"
        scroll="tilt"
        scrollOptions={{ rotateX: [12, -8], y: [40, -30] }}
      >
        Design is how teams learn to see together
      </Writing>
      <Writing as="p" variant="lede" motion="blur-in" scroll="drift">
        A conversation on craft, influence, and building products that earn trust.
      </Writing>
    </ShaderPage>
  )
}