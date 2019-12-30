import * as React from 'react'

const useLazyloadRef = (): [typeof lazyloadRef, boolean] => {
  const isClient = typeof window !== 'undefined'
  const [isLoaded, setIsLoaded] = React.useState(false)

  const observer = React.useRef(
    isClient
      ? new IntersectionObserver((entries, observer) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return
            if (
              target instanceof HTMLIFrameElement ||
              target instanceof HTMLImageElement ||
              target instanceof HTMLMediaElement
            ) {
              target.src = target.dataset.src || ''
            } else if (target instanceof HTMLElement) {
              const url = target.dataset.src || ''
              const img = new Image()
              img.src = url
              img.onload = () => {
                target.style.backgroundImage = `url(${url})`
                setIsLoaded(true)
              }
            }
            observer.unobserve(target)
          })
        })
      : null
  )

  const lazyloadRef = React.useCallback((node: HTMLElement | null) => {
    if (node === null || observer.current === null) return
    node.onload = () => {
      setIsLoaded(true)
    }
    observer.current.observe(node)
  }, [])

  return [lazyloadRef, isLoaded]
}

export default useLazyloadRef
