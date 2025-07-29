"use client"

import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return { ref, controls }
}
