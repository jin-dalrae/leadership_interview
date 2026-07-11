import groupPhoto from '../assets/interview/Image_20260618_162424_880.jpeg'
import soloPhoto from '../assets/interview/Image_20260618_162424_586.jpeg'
import { useEffect } from 'react'
import { HeroArt } from '../components/hero/HeroArt'
import { ClosingSummary } from '../components/interview/ClosingSummary'
import { ConversationAct } from '../components/interview/Conversation'
import { GlobalColorScroll } from '../components/interview/GlobalColorScroll'
import { PassageRow } from '../components/interview/PassageRow'
import { ScrollProgress } from '../components/interview/ScrollProgress'
import { PageStack, ShaderPage } from '../components/r3f'
import { Writing } from '../components/writing'
import { ACTS, CLOSING_SUMMARY, INTERVIEW_META } from '../content/jason-interview'
import { PASSAGES } from '../content/interview-motion'
import { useLenis } from '../hooks/useLenis'
import { getLenis } from '../lib/lenis'
import { ScrollTrigger } from '../lib/gsap'

const NAV = [
  ...ACTS.map((a) => ({ id: a.id, label: a.label })),
  { id: CLOSING_SUMMARY.id, label: CLOSING_SUMMARY.label },
]

const PHOTOS = { group: groupPhoto, solo: soloPhoto } as const

export function InterviewJason() {
  useLenis()

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()

    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const target = document.querySelector<HTMLElement>(hash)
      if (target) getLenis()?.scrollTo(target, { offset: -72 })
    }

    requestAnimationFrame(() => {
      refresh()
      scrollToHash()
    })

    const imgs = document.querySelectorAll<HTMLImageElement>('.art-panel__photo img')
    let pending = imgs.length

    Object.values(PHOTOS).forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = refresh
    })

    if (!pending) refresh()

    const onDone = () => {
      pending -= 1
      if (pending <= 0) refresh()
    }

    imgs.forEach((img) => {
      if (img.complete) onDone()
      else {
        img.addEventListener('load', onDone)
        img.addEventListener('error', onDone)
      }
    })

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('load', onDone)
        img.removeEventListener('error', onDone)
      })
    }
  }, [])

  return (
    <main className="interview">
      <GlobalColorScroll />
      <ScrollProgress />

      <nav className="interview-nav" aria-label="Interview sections">
        <a href={import.meta.env.BASE_URL} className="interview-nav__home">
          {INTERVIEW_META.subject}
        </a>
        {NAV.map((item) => (
          <a key={item.id} href={`${import.meta.env.BASE_URL}#${item.id}`} className="interview-nav__link">
            {item.label}
          </a>
        ))}
        <a
          href="https://www.instagram.com/jason_gouliard_art/"
          target="_blank"
          rel="noopener noreferrer"
          className="interview-nav__link interview-nav__muted"
        >
          @jason_gouliard_art
        </a>
      </nav>

      <PageStack>
        <ShaderPage
          id="top"
          shaderId="aurora"
          mode="layered"
          height="100vh"
          align="center"
          shaderOpacity={0}
          contentClassName="interview-hero-layered"
        >
          <HeroArt />
          <div className="r3f-html-content hero-page">
            <Writing playOnMount as="p" variant="eyebrow" motion="char-stagger" className="hero-eyebrow-large">
              Leadership Interview
            </Writing>
            <Writing playOnMount as="p" variant="eyebrow" motion="char-stagger">
              Interviewers: {INTERVIEW_META.interviewers.join(' & ')}
            </Writing>
            <Writing
              playOnMount
              as="h1"
              variant="title"
              motion="split-reveal"
              scroll="rotate"
              scrollOptions={{ rotate: [-25, 25] }}
              className="hero-title-font"
            >
              {INTERVIEW_META.subject}
            </Writing>
            <Writing playOnMount as="p" variant="lede" motion="blur-in" scroll="drift">
              Interviewers: {INTERVIEW_META.interviewers.join(' · ')} — {INTERVIEW_META.date}
            </Writing>
            <Writing
              playOnMount
              as="p"
              variant="lede"
              motion="line-reveal"
              className="interview-hero__note"
            >
              &ldquo;AI can be the hands. Curiosity, and the taste it feeds, is the direction. And the direction was always the part worth anything.&rdquo;
            </Writing>
          </div>
        </ShaderPage>

        <div className="interview-passages">
          {PASSAGES.map((passage) => {
            const act = ACTS.find((a) => a.id === passage.actId)
            if (!act) return null

            return (
              <PassageRow
                key={passage.actId}
                side={passage.side}
                cell={passage.cell}
                photo={passage.photo ? PHOTOS[passage.photo] : undefined}
                photoAlt={
                  passage.photo === 'group'
                    ? 'Jason Gouliard with Josh Yule and Rae Jin'
                    : passage.photo === 'solo'
                      ? 'Jason Gouliard'
                      : undefined
                }
                rotate={passage.artRotate}
                shaderId={passage.shaderId}
                shaderOpacity={passage.shaderOpacity}
                darkShader={passage.darkShader}
                minHeight={passage.minHeight}
              >
                <ConversationAct act={act} />
              </PassageRow>
            )
          })}

          <PassageRow
            side="left"
            photo={soloPhoto}
            photoAlt="Jason Gouliard"
            rotate={5}
            shaderId="ripple-distortion"
            shaderOpacity={0.16}
          >
            <ClosingSummary />
          </PassageRow>
        </div>
      </PageStack>
    </main>
  )
}