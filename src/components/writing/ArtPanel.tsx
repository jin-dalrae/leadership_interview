import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import type { WorkCell } from '../interview/ArtDecor'

interface ArtPanelProps {
  photo?: string
  photoAlt?: string
  cell?: WorkCell
  rotate?: number
}

export function ArtPanel({ photo, photoAlt, cell, rotate = 0 }: ArtPanelProps) {
  const elRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
      },
    })

    tl
      .fromTo(
        el,
        { y: -100, opacity: 0, scale: 0.92, rotateY: -10, rotateX: 6, z: -80 },
        { y: 0, opacity: 1, scale: 1, rotateY: rotate, rotateX: 0, z: 0, duration: 1, ease: 'power2.out' },
      )
      .to(el, { y: 80, rotateY: rotate + 6, rotateX: -3, z: 20, duration: 1, ease: 'sine.inOut' })
      .to(el, { y: 160, rotateY: rotate - 4, rotateX: 3, z: -20, duration: 1, ease: 'sine.inOut' })
      .to(el, { y: 260, opacity: 0, scale: 0.92, rotateY: rotate - 12, rotateX: -6, z: -80, duration: 1, ease: 'power2.in' })

    return () => {
      tl.kill()
    }
  }, [rotate, photo, cell])

  return (
    <div className="art-panel">
      <div className="art-panel__photo" style={{ perspective: '900px' }}>
        {photo ? (
          <img
            ref={elRef as React.Ref<HTMLImageElement>}
            src={photo}
            alt={photoAlt}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
          />
        ) : cell ? (
          <div
            ref={elRef as React.Ref<HTMLDivElement>}
            className="art-panel__placeholder"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
          />
        ) : null}
      </div>
    </div>
  )
}
