import { useEffect, useRef } from 'react'
import type { MotionDefinition } from '../../motions/types'
import { ShaderPreview } from '../shaders/ShaderPreview'

interface MotionCardProps {
  motion: MotionDefinition
  onReplay: () => void
  replayKey: number
}

export function MotionCard({ motion, onReplay, replayKey }: MotionCardProps) {
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = previewRef.current
    if (!el || motion.category === 'shader') return

    el.innerHTML = ''
    const demo = document.createElement('div')
    demo.className = 'motion-card__demo-inner'

    if (motion.category === 'text') {
      demo.textContent = 'Design Leadership'
    } else if (motion.category === 'stagger') {
      for (let i = 0; i < 4; i++) {
        const item = document.createElement('span')
        item.className = 'motion-card__stagger-item'
        item.textContent = String(i + 1)
        demo.appendChild(item)
      }
    } else if (motion.category === 'ambient' && motion.id === 'floating-orbs') {
      for (let i = 0; i < 3; i++) {
        const orb = document.createElement('span')
        orb.className = 'motion-card__orb'
        demo.appendChild(orb)
      }
    } else if (motion.category === 'ambient' && motion.id === 'line-draw') {
      demo.innerHTML = `<svg viewBox="0 0 100 40" width="100%" height="40"><path d="M5,20 Q30,5 50,20 T95,20" fill="none" stroke="currentColor" stroke-width="2"/></svg>`
    } else if (motion.category === 'ambient' && motion.id === 'morph-blob') {
      demo.innerHTML = `<svg viewBox="0 0 100 100" width="60" height="60"><path d="M50,20 Q80,0 100,50 Q120,100 50,100 Q-20,100 0,50 Q-20,0 50,20" fill="currentColor" opacity="0.6"/></svg>`
    } else if (motion.category === 'ambient' && motion.id === 'grain-overlay') {
      const canvas = document.createElement('canvas')
      canvas.className = 'motion-card__grain'
      demo.appendChild(canvas)
    } else if (motion.category === 'ambient' && motion.id === 'noise-field') {
      const canvas = document.createElement('canvas')
      canvas.className = 'motion-card__noise'
      demo.appendChild(canvas)
    } else if (motion.category === 'scroll' && motion.id === 'horizontal-scroll') {
      for (let i = 0; i < 3; i++) {
        const panel = document.createElement('div')
        panel.className = 'motion-card__panel'
        panel.textContent = `Panel ${i + 1}`
        demo.appendChild(panel)
      }
    } else if (motion.category === 'interactive') {
      demo.textContent = 'Hover me'
      demo.classList.add('motion-card__interactive')
    } else {
      demo.textContent = motion.name
    }

    el.appendChild(demo)

    const result = motion.run(
      motion.category === 'stagger' ||
        motion.id === 'floating-orbs' ||
        motion.id === 'horizontal-scroll'
        ? demo
        : (demo.querySelector('canvas') as HTMLElement) ??
            (demo.querySelector('path') as unknown as HTMLElement) ??
            (demo.querySelector('svg') as unknown as HTMLElement) ??
            demo,
      motion.category === 'scroll'
        ? { scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reset' } }
        : undefined,
    )

    return () => {
      if (typeof result === 'function') result()
      else result?.kill?.()
    }
  }, [motion, replayKey])

  return (
    <article className="motion-card">
      <div className="motion-card__preview" ref={previewRef}>
        {motion.category === 'shader' && (
          <ShaderPreview shaderId={motion.id} className="motion-card__shader" />
        )}
      </div>
      <div className="motion-card__meta">
        <span className="motion-card__category">{motion.category}</span>
        <h3 className="motion-card__name">{motion.name}</h3>
        <p className="motion-card__desc">{motion.description}</p>
        <div className="motion-card__tags">
          {motion.tags.map((tag) => (
            <span key={tag} className="motion-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <button type="button" className="motion-card__replay" onClick={onReplay}>
          Replay
        </button>
      </div>
    </article>
  )
}