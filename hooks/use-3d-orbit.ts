"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

export function use3DOrbit(radius = 3, speed = 0.01) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed
      groupRef.current.children.forEach((child, index) => {
        const angle = (index / groupRef.current!.children.length) * Math.PI * 2 + state.clock.elapsedTime * speed
        child.position.x = Math.cos(angle) * radius
        child.position.z = Math.sin(angle) * radius
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5
      })
    }
  })

  return groupRef
}
