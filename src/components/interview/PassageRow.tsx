import type { ReactNode } from 'react'
import { ShaderPage } from '../r3f'
import { ArtPanel } from './ArtPanel'
import type { WorkCell } from './ArtDecor'

interface PassageRowProps {
  side: 'left' | 'right'
  children: ReactNode
  cell?: WorkCell
  photo?: string
  photoAlt?: string
  rotate?: number
  shaderId?: string
  shaderOpacity?: number
  darkShader?: boolean
  minHeight?: string | number
}

export function PassageRow({
  side,
  children,
  cell,
  photo,
  photoAlt,
  rotate,
  shaderId,
  shaderOpacity = 0.18,
  darkShader = false,
  minHeight,
}: PassageRowProps) {
  const row = (
    <div className="interview-shell">
      <div className={`passage-row passage-row--art-${side}`}>
        <ArtPanel
          side={side}
          cell={cell}
          photo={photo}
          photoAlt={photoAlt}
          rotate={rotate}
        />
        <div className="passage-row__text">{children}</div>
      </div>
    </div>
  )

  if (!shaderId) return row

  return (
    <ShaderPage
      shaderId={shaderId}
      mode="layered"
      height="auto"
      minHeight={minHeight}
      align="start"
      shaderOpacity={shaderOpacity}
      darkShader={darkShader}
      contentClassName="interview-section passage-row__shader-wrap"
    >
      {row}
    </ShaderPage>
  )
}