import { useRef } from 'react'
import { WritingSectionProvider } from '../writing/WritingSectionContext'
import { useSectionScroll } from '../../hooks/useSectionScroll'
import { AnimatedContent } from './AnimatedContent'
import { PageCanvas } from './PageCanvas'
import { ShaderPageScene } from './ShaderPageScene'
import type { ShaderPageProps } from './types'

export function ShaderPage({
  shaderId,
  children,
  mode = 'layered',
  height = '100vh',
  minHeight,
  className,
  contentClassName,
  align = 'center',
  motionId,
  shaderOpacity = 1,
  darkShader = false,
  id,
}: ShaderPageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { progress, visible } = useSectionScroll(sectionRef)

  const isImmersive = mode === 'immersive'
  const alignClass = `shader-page--align-${align}`

  const wrappedChildren = (
    <WritingSectionProvider sectionRef={sectionRef} progress={progress}>
      {children}
    </WritingSectionProvider>
  )

  return (
    <section
      ref={sectionRef}
      id={id}
      className={[
        'shader-page',
        `shader-page--${mode}`,
        alignClass,
        darkShader && 'shader-page--dark-shader',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ height, minHeight: minHeight ?? height }}
    >
      <PageCanvas active={visible} className="shader-page__canvas">
        <ShaderPageScene
          shaderId={shaderId}
          scrollProgress={progress}
          shaderOpacity={shaderOpacity}
          paused={!visible}
          immersive={isImmersive}
          content={isImmersive ? wrappedChildren : undefined}
          contentClassName={contentClassName}
        />
      </PageCanvas>

      {!isImmersive &&
        (motionId ? (
          <AnimatedContent
            motionId={motionId}
            sectionRef={sectionRef}
            className={['shader-page__content', contentClassName].filter(Boolean).join(' ')}
          >
            {wrappedChildren}
          </AnimatedContent>
        ) : (
          <div className={['shader-page__content', contentClassName].filter(Boolean).join(' ')}>
            {wrappedChildren}
          </div>
        ))}
    </section>
  )
}