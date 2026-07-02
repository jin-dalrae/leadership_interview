# Leadership Interview — Motion System

Scroll-driven motion toolkit for the [leadership interview](https://github.com/jin-dalrae/leadership_interview) editorial page.

**74 motions** across 7 categories, including **12 GLSL shaders**.

## Quick start

```bash
npm install
npm run dev
```

## Motion categories

| Category | Count | Use for |
|----------|-------|---------|
| Text | 12 | Headlines, pull quotes, chapter titles |
| Scroll | 12 | Parallax, pin sections, horizontal galleries |
| Entrance | 12 | Section reveals, image entrances |
| Stagger | 10 | Lists, principle cards, photo grids |
| Interactive | 8 | Magnetic CTAs, tilt cards, cursor effects |
| Ambient | 8 | Grain, blobs, spotlights, background life |
| Shader | 12 | Full-screen GLSL backgrounds & transitions |

## Usage

```tsx
import { useMotion } from './hooks/useMotion'

function Hero() {
  const ref = useMotion('split-reveal', {
    scrollTrigger: { trigger: '.hero', start: 'top 80%' },
  })
  return <h1 ref={ref}>Design Leadership</h1>
}
```

```tsx
import { getMotion } from './motions'

const motion = getMotion('fade-up')
motion?.run(element, { duration: 1 })
```

```tsx
import { ShaderPreview } from './components/shaders/ShaderPreview'

<ShaderPreview shaderId="aurora" />
```

## Stack

- **GSAP** + ScrollTrigger — scroll-linked animation
- **Lenis** — smooth scroll
- **Three.js** / React Three Fiber — GLSL shader rendering
- **Vite** + vite-plugin-glsl — shader imports

## R3F page components

Each interview section is a `ShaderPage` — a React Three Fiber canvas (shader background) plus HTML content.

```tsx
import { ShaderPage } from './components/r3f'

<ShaderPage
  shaderId="aurora"
  mode="immersive"   // content inside Canvas via drei <Html>
  height="100vh"
>
  <h1>Design Leadership</h1>
</ShaderPage>

<ShaderPage
  shaderId="paper-texture"
  mode="layered"     // shader behind scrollable DOM (better for long copy)
  motionId="fade-up"
  minHeight="100vh"
>
  <p>Chapter body…</p>
</ShaderPage>
```

Pre-built pages: `HeroPage`, `QuotePage`, `ChapterPage`, `PrinciplesPage`, `ClosingPage` — composed in `InterviewScroll`.

## Project structure

```
src/
  components/r3f/   # ShaderPage, PageCanvas, HtmlContent
  pages/            # Interview page components
  motions/          # 62 DOM-based motion primitives
  shaders/          # 12 GLSL fragment shaders
  hooks/            # useMotion, useLenis, useSectionScroll
```