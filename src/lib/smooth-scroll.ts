export function smoothScrollTo(targetElement: HTMLElement, duration = 1000) {
  const startPosition = window.pageYOffset
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1) // Ensure progress doesn't exceed 1

    // Easing function (ease-out quad)
    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
    const easedProgress = easeInOutQuad(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
