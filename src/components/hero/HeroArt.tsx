import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import heroArt from '../../assets/interview/jason-hero-art.png'

const SHAPES = [
  {
    id: 'beam-top',
    clipPath: 'polygon(6% 14%, 88% 8%, 88% 26%, 6% 38%)',
    floatY: 18,
    floatRotateY: 6,
    floatRotateX: -3,
    duration: 4.5,
  },
  {
    id: 'block-left',
    clipPath: 'polygon(4% 46%, 30% 44%, 32% 64%, 6% 66%)',
    floatY: 14,
    floatRotateY: -5,
    floatRotateX: 4,
    duration: 3.8,
  },
  {
    id: 'block-center',
    clipPath: 'polygon(36% 42%, 68% 40%, 68% 58%, 36% 60%)',
    floatY: 20,
    floatRotateY: 4,
    floatRotateX: -5,
    duration: 5.2,
  },
  {
    id: 'block-right',
    clipPath: 'polygon(78% 36%, 96% 34%, 96% 56%, 78% 58%)',
    floatY: 16,
    floatRotateY: -6,
    floatRotateX: 3,
    duration: 4.1,
  },
  {
    id: 'bar-bottom',
    clipPath: 'polygon(26% 82%, 98% 80%, 98% 92%, 26% 94%)',
    floatY: 12,
    floatRotateY: 3,
    floatRotateX: -2,
    duration: 4.8,
  },
]

export function HeroArt() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const tweens = SHAPES.map((shape, i) => {
      const el = container.querySelector<HTMLDivElement>(`[data-shape="${shape.id}"]`)
      if (!el) return null
      return gsap.to(el, {
        y: -shape.floatY,
        rotateY: shape.floatRotateY,
        rotateX: shape.floatRotateX,
        duration: shape.duration,
        delay: i * 0.3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })

    return () => {
      tweens.forEach((t) => t?.kill())
    }
  }, [])

  return (
    <div className="hero-art" ref={containerRef} style={{ perspective: '1200px' }}>
      <div className="hero-art__base" style={{ backgroundImage: `url(${heroArt})` }} />
      {SHAPES.map((shape) => (
        <div
          key={shape.id}
          data-shape={shape.id}
          className="hero-art__shape"
          style={{ backgroundImage: `url(${heroArt})`, clipPath: shape.clipPath }}
        />
      ))}
    </div>
  )
}
