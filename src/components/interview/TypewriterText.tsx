import { Fragment, useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

interface TypewriterTextProps {
  text: string
  className?: string
}

export function TypewriterText({ text, className }: TypewriterTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const chars = container.querySelectorAll<HTMLSpanElement>('.tw-char')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'top 30%',
        scrub: 0.4,
      },
    })

    tl.fromTo(
      chars,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.15, stagger: 0.03, ease: 'none' },
    )

    return () => {
      tl.kill()
    }
  }, [text])

  const words = text.split(' ')

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="tw-word" style={{ display: 'inline-block' }}>
            {word.split('').map((char, ci) => (
              <span key={ci} className="tw-char">
                {char}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </span>
  )
}
