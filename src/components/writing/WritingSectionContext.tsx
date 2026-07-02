import { createContext, useContext, type ReactNode, type RefObject } from 'react'

interface WritingSectionContextValue {
  sectionRef: RefObject<HTMLElement | null>
  progress: number
}

export const WritingSectionContext = createContext<WritingSectionContextValue | null>(null)

export function WritingSectionProvider({
  sectionRef,
  progress,
  children,
}: WritingSectionContextValue & { children: ReactNode }) {
  return (
    <WritingSectionContext.Provider value={{ sectionRef, progress }}>
      {children}
    </WritingSectionContext.Provider>
  )
}

export function useWritingSection() {
  return useContext(WritingSectionContext)
}