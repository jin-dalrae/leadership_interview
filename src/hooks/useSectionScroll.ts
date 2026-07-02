import { useEffect, useState, type RefObject } from 'react'

export function useSectionScroll(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh
      const travelled = vh - rect.top
      const p = Math.min(1, Math.max(0, travelled / total))
      setProgress(p)
      setVisible(rect.bottom > 0 && rect.top < vh)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])

  return { progress, visible }
}