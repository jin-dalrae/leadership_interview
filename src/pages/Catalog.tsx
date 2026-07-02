import { MotionGrid } from '../components/showcase/MotionGrid'
import { PageStack, ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'
import { useLenis } from '../hooks/useLenis'
import { motionCount } from '../motions/registry'
import { shaderRegistry } from '../shaders/registry'
import { ChapterPage } from './ChapterPage'
import { ClosingPage } from './ClosingPage'
import { HeroPage } from './HeroPage'
import { PrinciplesPage } from './PrinciplesPage'
import { QuotePage } from './QuotePage'

const NAV = [
  { id: 'intro', label: 'Intro' },
  { id: 'pages', label: 'Pages' },
  { id: 'hero', label: 'Hero' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'chapters', label: 'Chapters' },
  { id: 'principles', label: 'Principles' },
  { id: 'closing', label: 'Closing' },
  { id: 'motions', label: 'Motions' },
]

export function Catalog() {
  useLenis()

  return (
    <main className="app catalog">
      <nav className="catalog-nav" aria-label="Catalog sections">
        <span className="catalog-nav__brand">Catalog</span>
        {NAV.map((item) => (
          <a key={item.id} href={`/catalog#${item.id}`} className="catalog-nav__link">
            {item.label}
          </a>
        ))}
      </nav>

      <PageStack>
        <ShaderPage
          id="intro"
          shaderId="gradient-mesh"
          mode="immersive"
          height="100vh"
          contentClassName="catalog-intro"
        >
          <Writing as="p" variant="eyebrow" motion="word-stagger">
            Leadership Interview · Full Catalog
          </Writing>
          <Writing
            as="h1"
            variant="title"
            motion="split-reveal"
            scroll="rotate"
            scrollOptions={{ rotate: [-2, 3] }}
          >
            One page. Shaders, pages, motions.
          </Writing>
          <Writing as="p" variant="lede" motion="blur-in" scroll="drift">
            Scroll through live R3F page components, then browse all {motionCount} motions
            and {shaderRegistry.length} GLSL shaders.
          </Writing>
          <div className="catalog-intro__stats">
            <div>
              <strong>7</strong>
              <span>page types</span>
            </div>
            <div>
              <strong>{motionCount}</strong>
              <span>motions</span>
            </div>
            <div>
              <strong>{shaderRegistry.length}</strong>
              <span>shaders</span>
            </div>
          </div>
          <a href="/catalog#pages" className="page-cta">
            Start scrolling
          </a>
        </ShaderPage>

        <section id="pages" className="catalog-divider">
          <p className="page-eyebrow">Section 01</p>
          <h2 className="catalog-section__title">R3F Page Components</h2>
          <p className="catalog-section__desc">
            Each block below is a reusable <code>ShaderPage</code> — GLSL background plus
            HTML content in layered or immersive mode.
          </p>
        </section>

        <div id="hero">
          <HeroPage />
        </div>

        <div id="quotes">
          <QuotePage
            index={1}
            shaderId="ripple-distortion"
            quote="You can't outsource judgment to a framework. You have to build the muscle on the team."
            attribution="On design maturity"
          />
        </div>

        <div id="chapters">
          <ChapterPage
            index={1}
            chapter="Chapter 01"
            title="When the brief is really a bet"
            shaderId="paper-texture"
            body="Every ambitious product is a hypothesis about what customers will forgive and what they won't. Design leadership starts by making that bet legible — who's it for, what are we risking, and what would make us wrong?"
          />

          <ChapterPage
            index={2}
            chapter="Chapter 02"
            title="Influence without authority"
            shaderId="film-grain"
            darkShader
            body="The hardest problems sit between functions, not inside a Figma file. The craft is choreography: framing choices, sequencing dissent, and leaving enough space for others to feel ownership."
          />
        </div>

        <div id="principles">
          <PrinciplesPage />
        </div>

        <QuotePage
          index={2}
          shaderId="swirl-distortion"
          quote="Clarity is a kindness. Ambiguity is a tax everyone pays later."
          attribution="On communication"
        />

        <div id="closing">
          <ClosingPage />
        </div>

        <section id="motions" className="catalog-motions">
          <MotionGrid />
        </section>
      </PageStack>
    </main>
  )
}