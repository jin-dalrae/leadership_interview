import type { ReactNode } from 'react'

interface PageStackProps {
  children: ReactNode
  className?: string
}

export function PageStack({ children, className }: PageStackProps) {
  return <div className={['page-stack', className].filter(Boolean).join(' ')}>{children}</div>
}