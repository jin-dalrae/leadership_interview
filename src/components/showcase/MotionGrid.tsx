import { useMemo, useState } from 'react'
import { motionCategories, motionCount, motionRegistry } from '../../motions/registry'
import type { MotionCategory } from '../../motions/types'
import { MotionCard } from './MotionCard'

interface MotionGridProps {
  showHeader?: boolean
}

export function MotionGrid({ showHeader = true }: MotionGridProps) {
  const [filter, setFilter] = useState<MotionCategory | 'all'>('all')
  const [search, setSearch] = useState('')
  const [replayKeys, setReplayKeys] = useState<Record<string, number>>({})

  const filtered = useMemo(() => {
    return motionRegistry.filter((m) => {
      const matchesCategory = filter === 'all' || m.category === filter
      const q = search.toLowerCase()
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.tags.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [filter, search])

  const replay = (id: string) => {
    setReplayKeys((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }

  return (
    <div className="motion-grid">
      {showHeader && (
        <header className="motion-grid__header">
          <p className="page-eyebrow">Motion Catalog</p>
          <h2 className="catalog-section__title">{motionCount} motions</h2>
          <p className="catalog-section__desc">
            GSAP primitives and GLSL shaders — filter, search, replay each one.
          </p>
          <div className="showcase__stats">
            {motionCategories.map((cat) => (
              <div key={cat.id} className="showcase__stat">
                <span className="showcase__stat-count">{cat.count}</span>
                <span className="showcase__stat-label">{cat.label}</span>
              </div>
            ))}
          </div>
        </header>
      )}

      <div className="showcase__controls">
        <input
          type="search"
          placeholder="Search motions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="showcase__search"
        />
        <div className="showcase__filters">
          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All ({motionCount})
          </button>
          {motionCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={filter === cat.id ? 'active' : ''}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      <div className="showcase__grid">
        {filtered.map((motion) => (
          <MotionCard
            key={motion.id}
            motion={motion}
            replayKey={replayKeys[motion.id] ?? 0}
            onReplay={() => replay(motion.id)}
          />
        ))}
      </div>
    </div>
  )
}