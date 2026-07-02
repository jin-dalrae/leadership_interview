import type { CSSProperties } from 'react'
import type { Act } from '../../content/jason-interview'

export function ConversationAct({ act }: { act: Act }) {
  return (
    <section id={act.id} className="act">
      <header className="act__header">
        <p className="act__label">{act.label}</p>
        <h2 className="act__title">{act.title}</h2>
      </header>
      <div className="act__dialogue">
        {act.turns.map((turn, i) => (
          <p
            key={`${act.id}-${i}`}
            className="turn"
            data-speaker={turn.speaker}
            style={{ '--turn-i': i } as CSSProperties}
          >
            <span className="turn__speaker">{turn.speaker}</span>
            <span className="turn__text">{turn.text}</span>
          </p>
        ))}
      </div>
    </section>
  )
}