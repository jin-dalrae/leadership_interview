export type SplitMode = 'chars' | 'words' | 'lines'

export function splitText(
  element: HTMLElement,
  mode: SplitMode = 'chars',
): HTMLElement[] {
  const text = element.textContent ?? ''
  element.textContent = ''
  element.setAttribute('aria-label', text)

  const wrap = (nodes: HTMLElement[]) => {
    element.append(...nodes)
    return nodes
  }

  if (mode === 'lines') {
    return wrap(
      text.split('\n').map((line) => {
        const lineEl = document.createElement('span')
        lineEl.className = 'motion-line'
        lineEl.style.display = 'block'
        lineEl.textContent = line
        return lineEl
      }),
    )
  }

  if (mode === 'words') {
    return wrap(
      text.split(/(\s+)/).map((part) => {
        const wordEl = document.createElement('span')
        wordEl.className = part.trim() ? 'motion-word' : 'motion-space'
        wordEl.style.display = 'inline-block'
        wordEl.textContent = part
        return wordEl
      }),
    )
  }

  return wrap(
    [...text].map((char) => {
      const charEl = document.createElement('span')
      charEl.className = 'motion-char'
      charEl.style.display = 'inline-block'
      charEl.textContent = char === ' ' ? '\u00a0' : char
      return charEl
    }),
  )
}

export function unsplitText(element: HTMLElement): void {
  const text = element.getAttribute('aria-label') ?? element.textContent ?? ''
  element.textContent = text
  element.removeAttribute('aria-label')
}