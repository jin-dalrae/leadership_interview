import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export function GlobalColorScroll() {
  const isDarkRef = useRef(false)

  useEffect(() => {
    const root = document.documentElement

    const bgTween = gsap.to(root, {
      '--bg': '#050505',
      '--surface': '#111111',
      '--glass': 'rgba(10, 10, 10, 0.42)',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const shouldBeDark = self.progress > 0.5
          if (shouldBeDark !== isDarkRef.current) {
            isDarkRef.current = shouldBeDark
            gsap.to(root, {
              '--text': shouldBeDark ? '#ffffff' : '#2a241c',
              '--muted': shouldBeDark ? '#a8a8a8' : '#7a7165',
              duration: 0.25,
              ease: 'none',
            })
          }
        },
      },
    })

    return () => {
      bgTween.kill()
    }
  }, [])

  return null
}
