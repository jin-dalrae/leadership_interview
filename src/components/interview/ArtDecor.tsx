import { useEffect, useRef } from 'react'
import worksGrid from '../../assets/interview/jason-works-grid.png'
import { gsap, ScrollTrigger } from '../../lib/gsap'

export type WorkCell = { col: number; row: number }

type Layout = 'banner' | 'duo' | 'triptych' | 'feature' | 'photo' | 'collage'

interface ArtDecorProps {
  layout: Layout
  cells?: WorkCell[]
  photo?: string
  photoAlt?: string
  id?: string
  rotate?: number
}

function cellPosition(col: number, row: number) {
  return `${col * 50}% ${row * 100}%`
}

/** Source grid 818×728px → each cell 273×364px (portrait) */
export const WORK_CELL_ASPECT = 273 / 364

function workStyle(cell: WorkCell) {
  return {
    backgroundImage: `url(${worksGrid})`,
    backgroundSize: '300% 200%',
    backgroundPosition: cellPosition(cell.col, cell.row),
  }
}

export function ArtDecor({
  layout,
  cells = [],
  photo,
  photoAlt = '',
  id,
  rotate = 0,
}: ArtDecorProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const preload = new Image()
    preload.src = worksGrid
    preload.onload = () => ScrollTrigger.refresh()

    const ctx = gsap.context(() => {
      const pieces = root.querySelectorAll('.art-decor__piece')

      gsap.set(pieces, {
        opacity: 0,
        scale: 1.06,
        clipPath: 'inset(12% 8% 12% 8%)',
      })

      gsap.to(pieces, {
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      })

      pieces.forEach((piece, i) => {
        gsap.to(piece, {
          y: -30 - i * 8,
          rotate: rotate + (i % 2 === 0 ? -1.5 : 1.5),
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [rotate])

  return (
    <aside
      ref={ref}
      id={id}
      className={`art-decor art-decor--${layout}`}
      aria-hidden="true"
    >
      {layout === 'banner' && cells[0] && (
        <div className="art-decor__piece art-decor__work" style={workStyle(cells[0])} />
      )}

      {layout === 'duo' &&
        cells.map((cell, i) => (
          <div
            key={`${cell.col}-${cell.row}`}
            className={`art-decor__piece art-decor__work art-decor__work--${i}`}
            style={workStyle(cell)}
          />
        ))}

      {layout === 'triptych' &&
        cells.map((cell) => (
          <div
            key={`${cell.col}-${cell.row}`}
            className="art-decor__piece art-decor__work"
            style={workStyle(cell)}
          />
        ))}

      {layout === 'feature' && cells[0] && (
        <div className="art-decor__feature-wrap">
          <div className="art-decor__piece art-decor__work" style={workStyle(cells[0])} />
          <div className="art-decor__glow" />
        </div>
      )}

      {layout === 'photo' && photo && (
        <div className="art-decor__piece art-decor__photo">
          <img src={photo} alt={photoAlt} loading="lazy" />
        </div>
      )}

      {layout === 'collage' && (
        <div className="art-decor__collage">
          {photo && (
            <div className="art-decor__piece art-decor__photo art-decor__photo--float">
              <img src={photo} alt={photoAlt} loading="lazy" />
            </div>
          )}
          {cells[0] && (
            <div className="art-decor__piece art-decor__work art-decor__work--back" style={workStyle(cells[0])} />
          )}
        </div>
      )}
    </aside>
  )
}