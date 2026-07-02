import { useEffect, useRef, type ReactNode, type RefObject } from 'react'
import { getMotion } from '../../motions/registry'

interface AnimatedContentProps {
  motionId: string
  sectionRef: RefObject<HTMLElement | null>
  className?: string
  children: ReactNode
}

export function AnimatedContent({
  motionId,
  sectionRef,
  className,
  children,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const trigger = sectionRef.current
    if (!el || !trigger) return

    const motion = getMotion(motionId)
    if (!motion) return

    const result = motion.run(el, {
      scrollTrigger: {
        trigger,
        start: 'top 75%',
        toggleActions: 'play none none reset',
      },
    })

    return () => {
      if (typeof result === 'function') result()
      else result?.kill?.()
    }
  }, [motionId, sectionRef])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}