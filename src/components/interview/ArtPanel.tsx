import { useEffect, useRef } from 'react'
import worksGrid from '../../assets/interview/jason-works-grid.png'
import { gsap } from '../../lib/gsap'
import { getMotion } from '../../motions/registry'
import type { WorkCell } from './ArtDecor'

interface ArtPanelProps {
  cell?: WorkCell
  photo?: string
  photoAlt?: string
  side: 'left' | 'right'
  rotate?: number
}

function cellPosition(col: number, row: number) {
  return `${col * 50}% ${row * 100}%`
}

export function ArtPanel({ cell, photo, photoAlt = '', side, rotate = 0 }: ArtPanelProps) {
  const ref = useRef<HTMLElement>(null)
  const pieceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    const piece = pieceRef.current
    if (!root || !piece) return

    const ctx = gsap.context(() => {
      gsap.set(piece, {
        opacity: 0,
        scale: 0.92,
        clipPath: 'inset(8% 8% 8% 8%)',
      })

      gsap.to(piece, {
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(piece, {
        y: -22,
        rotate: rotate,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.85,
        },
      })
    }, root)

    const motion = getMotion('hover-lift')
    const cleanup =
      piece && motion
        ? motion.run(piece, { lift: -10 })
        : undefined

    return () => {
      ctx.revert()
      if (typeof cleanup === 'function') cleanup()
      else cleanup?.kill?.()
    }
  }, [rotate])

  const workStyle = cell
    ? {
        backgroundImage: `url(${worksGrid})`,
        backgroundSize: '300% 200%',
        backgroundPosition: cellPosition(cell.col, cell.row),
      }
    : undefined

  return (
    <aside ref={ref} className={`art-panel art-panel--${side}`}>
      {cell && (
        <div
          ref={pieceRef}
          className="art-panel__piece art-panel__work"
          style={workStyle}
          role="img"
        />
      )}
      {photo && (
        <div ref={pieceRef} className="art-panel__piece art-panel__photo">
          <img src={photo} alt={photoAlt} loading="lazy" />
        </div>
      )}
    </aside>
  )
}