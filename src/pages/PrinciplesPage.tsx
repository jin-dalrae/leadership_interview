import { useEffect, useRef } from 'react'
import { getMotion } from '../motions/registry'
import { ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'

const PRINCIPLES = [
  { title: 'Start with tension', detail: 'Name the tradeoff before proposing the solution.' },
  { title: 'Design the decision', detail: 'Make the hard call visible, not just the UI around it.' },
  { title: 'Ship the story', detail: 'Alignment is a deliverable — not a meeting afterthought.' },
  { title: 'Protect the pause', detail: 'Teams need room to think, not just room to sprint.' },
]

export function PrinciplesPage() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const motion = getMotion('grid-stagger')
    const result = motion?.run(grid, {
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    })

    return () => {
      if (typeof result === 'function') result()
      else result?.kill?.()
    }
  }, [])

  return (
    <ShaderPage
      id="principles"
      shaderId="liquid-warp"
      mode="layered"
      minHeight="100vh"
      height="auto"
      align="start"
      shaderOpacity={1}
      darkShader
      contentClassName="principles-page"
    >
      <Writing as="p" variant="eyebrow" motion="char-stagger" scroll="drift">
        Principles
      </Writing>
      <Writing
        as="h2"
        variant="heading"
        motion="clip-reveal"
        scroll="tilt"
        scrollOptions={{ rotateX: [5, -3] }}
      >
        What she repeats to every team
      </Writing>
      <div className="principles-grid" ref={gridRef}>
        {PRINCIPLES.map((p, i) => (
          <article key={p.title} className="principle-card">
            <span className="principle-card__index">0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.detail}</p>
          </article>
        ))}
      </div>
    </ShaderPage>
  )
}