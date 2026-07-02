import groupPhoto from '../assets/interview/Image_20260618_162424_880.jpeg'
import soloPhoto from '../assets/interview/Image_20260618_162424_586.jpeg'
import { useEffect } from 'react'
import { ClosingSummary } from '../components/interview/ClosingSummary'
import { ConversationAct } from '../components/interview/Conversation'
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
      <ScrollProgress />

      <nav className="interview-nav" aria-label="Interview sections">
        <a href="/" className="interview-nav__home">
          {INTERVIEW_META.subject}
        </a>
        {NAV.map((item) => (
          <a key={item.id} href={`/#${item.id}`} className="interview-nav__link">
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
          shaderOpacity={1}
          contentClassName="interview-hero-layered"
        >
          <div className="r3f-html-content hero-page">
            <Writing playOnMount as="p" variant="eyebrow" motion="char-stagger">
              Leadership Interview
            </Writing>
            <Writing
              playOnMount
              as="h1"
              variant="title"
              motion="split-reveal"
              scroll="rotate"
              scrollOptions={{ rotate: [-2, 3] }}
            >
              {INTERVIEW_META.subject}
            </Writing>
            <Writing playOnMount as="p" variant="lede" motion="blur-in" scroll="drift">
              Interviewers: {INTERVIEW_META.interviewers.join(' · ')} — {INTERVIEW_META.date}
            </Writing>
            <Writing
              playOnMount
              as="p"
              variant="body"
              motion="line-reveal"
              className="interview-hero__note"
            >
              Motion, shaders, and writing that moves — flanking a conversation we didn&apos;t want
              to over-edit.
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