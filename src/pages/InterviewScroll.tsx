import { PageStack } from '../components/r3f'
import { ChapterPage } from './ChapterPage'
import { ClosingPage } from './ClosingPage'
import { HeroPage } from './HeroPage'
import { PrinciplesPage } from './PrinciplesPage'
import { QuotePage } from './QuotePage'

export function InterviewScroll() {
  return (
    <PageStack className="interview-scroll">
      <HeroPage />

      <QuotePage
        index={1}
        shaderId="ripple-distortion"
        quote="You can't outsource judgment to a framework. You have to build the muscle on the team."
        attribution="On design maturity"
      />

      <ChapterPage
        index={1}
        chapter="Chapter 01"
        title="When the brief is really a bet"
        shaderId="paper-texture"
        body="Every ambitious product is a hypothesis about what customers will forgive and what they won't. Design leadership starts by making that bet legible — who's it for, what are we risking, and what would make us wrong?"
      />

      <ChapterPage
        index={2}
        chapter="Chapter 02"
        title="Influence without authority"
        shaderId="film-grain"
        darkShader
        body="The hardest problems sit between functions, not inside a Figma file. The craft is choreography: framing choices, sequencing dissent, and leaving enough space for others to feel ownership."
      />

      <PrinciplesPage />

      <QuotePage
        index={2}
        shaderId="swirl-distortion"
        quote="Clarity is a kindness. Ambiguity is a tax everyone pays later."
        attribution="On communication"
      />

      <ClosingPage />
    </PageStack>
  )
}