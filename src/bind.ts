export default (ob: IntersectionObserver, element: HTMLElement, name: string) => {
  element.setAttribute('data-trigger-name', name)
  ob && ob.observe(element)
}
