import type { ReactNode } from 'react'
import { ShaderBackground } from './ShaderBackground'
import { HtmlContent } from './HtmlContent'

interface ShaderPageSceneProps {
  shaderId: string
  scrollProgress: number
  shaderOpacity?: number
  paused?: boolean
  immersive?: boolean
  content?: ReactNode
  contentClassName?: string
}

export function ShaderPageScene({
  shaderId,
  scrollProgress,
  shaderOpacity = 1,
  paused = false,
  immersive = false,
  content,
  contentClassName,
}: ShaderPageSceneProps) {
  return (
    <>
      <ShaderBackground
        shaderId={shaderId}
        scrollProgress={scrollProgress}
        opacity={shaderOpacity}
        paused={paused}
      />
      {immersive && content && (
        <HtmlContent className={contentClassName} transform distanceFactor={6}>
          {content}
        </HtmlContent>
      )}
    </>
  )
}