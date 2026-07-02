import { ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'

interface ChapterPageProps {
  chapter: string
  title: string
  body: string
  shaderId?: string
  darkShader?: boolean
  index?: number
}

export function ChapterPage({
  chapter,
  title,
  body,
  shaderId = 'paper-texture',
  darkShader = false,
  index = 1,
}: ChapterPageProps) {
  return (
    <ShaderPage
      id={`chapter-${index}`}
      shaderId={shaderId}
      mode="layered"
      height="auto"
      minHeight="100vh"
      align="start"
      shaderOpacity={1}
      darkShader={darkShader}
      contentClassName="chapter-page"
    >
      <Writing as="p" variant="eyebrow" motion="word-stagger" scroll="drift">
        {chapter}
      </Writing>
      <Writing
        as="h2"
        variant="heading"
        motion="rotate-in-chars"
        scroll="tilt"
        scrollOptions={{ rotateX: [6, -4], y: [28, -18] }}
      >
        {title}
      </Writing>
      <Writing as="p" variant="body" motion="line-reveal" scroll="rise">
        {body}
      </Writing>
    </ShaderPage>
  )
}