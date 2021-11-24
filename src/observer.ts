const defaultOptions: IntersectionObserverInit = {
  root: null, // document.body
  rootMargin: '0px',
  threshold: 0
}

export default function (
  cb: IntersectionObserverCallback,
  options: IntersectionObserverInit = defaultOptions
): IntersectionObserver {
  // Check if `IntersectionObserver` is available
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('IntersectionObserver is not supported in this browser')
    throw new Error('IntersectionObserver is not supported in this browser')
  }
  return new IntersectionObserver(cb, options)
}
