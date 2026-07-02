import { useEffect } from 'react'
import { destroyLenis, initLenis } from '../lib/lenis'

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return
    initLenis()
    return () => destroyLenis()
  }, [enabled])
}