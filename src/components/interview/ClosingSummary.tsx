import { CLOSING_SUMMARY } from '../../content/jason-interview'

export function ClosingSummary() {
  return (
    <section id={CLOSING_SUMMARY.id} className="closing-summary">
      <header className="act__header">
        <p className="act__label">{CLOSING_SUMMARY.label}</p>
        <h2 className="act__title">{CLOSING_SUMMARY.title}</h2>
      </header>
      {CLOSING_SUMMARY.paragraphs.map((p) => (
        <p key={p.slice(0, 24)} className="closing-summary__p">
          {p}
        </p>
      ))}
      <p className="closing-summary__signoff">{CLOSING_SUMMARY.signoff}</p>
    </section>
  )
}