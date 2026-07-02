import { Html } from '@react-three/drei'
import type { ReactNode } from 'react'

interface HtmlContentProps {
  children: ReactNode
  className?: string
  center?: boolean
  transform?: boolean
  distanceFactor?: number
  zIndex?: number
}

export function HtmlContent({
  children,
  className,
  center = true,
  transform = false,
  distanceFactor = 8,
  zIndex = 1,
}: HtmlContentProps) {
  return (
    <Html
      center={center}
      transform={transform}
      distanceFactor={distanceFactor}
      zIndexRange={[zIndex, zIndex]}
      className={className}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="r3f-html-content">{children}</div>
    </Html>
  )
}