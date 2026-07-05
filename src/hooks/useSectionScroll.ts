import { useEffect, useRef, useState, type RefObject } from 'react'
import { ScrollTrigger } from '../lib/gsap'

export function useSectionScroll(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [velocity, setVelocity] = useState(0)
  const trigger = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    trigger.current = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        setProgress(self.progress)
        setVisible(self.isActive)
        const v = self.getVelocity() / 2500
        setVelocity(Math.max(-1, Math.min(1, v)))
      },
      onEnter: () => setVisible(true),
      onLeave: () => setVisible(false),
      onEnterBack: () => setVisible(true),
      onLeaveBack: () => setVisible(false),
    })

    return () => {
      trigger.current?.kill()
    }
  }, [ref])

  return { progress, visible, velocity }
}