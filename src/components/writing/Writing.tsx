import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { getMotion } from '../../motions/registry'
import { useWritingSection } from './WritingSectionContext'
import { useWritingScroll } from './useWritingScroll'
import type { WritingElement, WritingProps } from './types'

const VARIANT_CLASS: Record<string, string> = {
  eyebrow: 'page-eyebrow',
  title: 'page-title',
  heading: 'page-heading',
  lede: 'page-lede',
  body: 'page-body',
  quote: 'page-quote',
  cite: 'page-cite',
}

export function Writing({
  as: Tag = 'p',
  variant = 'body',
  motion,
  scroll = 'none',
  scrollOptions,
  float = false,
  playOnMount = false,
  className,
  children,
}: WritingProps) {
  const section = useWritingSection()
  const scrollRef = useWritingScroll(scroll, scrollOptions, section?.sectionRef)
  const entranceRef = useRef<HTMLElement>(null)
  const setRef = (node: HTMLElement | null) => {
    entranceRef.current = node
    if (scrollRef && 'current' in scrollRef) {
      ;(scrollRef as React.MutableRefObject<HTMLElement | null>).current = node
    }
  }

  useLayoutEffect(() => {
    const el = entranceRef.current
    if (!el || !motion) return

    const def = getMotion(motion)
    if (!def) return

    let kill: (() => void) | undefined

    const attach = () => {
      kill?.()
      const trigger = section?.sectionRef.current ?? el
      const result = def.run(el, {
        scrollTrigger: playOnMount
          ? undefined
          : {
              trigger,
              start: 'top 92%',
              toggleActions: 'play none none reset',
            },
      })
      if (typeof result === 'function') kill = result
      else kill = () => result?.kill?.()
    }

    attach()
    const frame =
      section && !section.sectionRef.current ? requestAnimationFrame(attach) : undefined

    return () => {
      if (frame) cancelAnimationFrame(frame)
      kill?.()
    }
  }, [motion, section, playOnMount])

  useEffect(() => {
    const el = entranceRef.current
    if (!el || !float) return

    const tween = gsap.to(el, {
      y: -6,
      rotate: 0.6,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      tween.kill()
    }
  }, [float])

  const variantClass = VARIANT_CLASS[variant] ?? ''
  const scrollClass = scroll !== 'none' ? `writing--scroll-${scroll}` : ''
  const floatClass = float ? 'writing--float' : ''

  const Component = Tag as WritingElement

  return (
    <Component
      ref={setRef as never}
      className={['writing', variantClass, scrollClass, floatClass, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Component>
  )
}