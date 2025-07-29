"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { use3DOrbit } from "@/hooks/use-3d-orbit"
import { Suspense } from "react"

function TechOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function OrbitingTech() {
  const groupRef = use3DOrbit(4, 0.005)

  const techColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"]

  return (
    <group ref={groupRef}>
      {techColors.map((color, index) => (
        <TechOrb key={index} position={[0, 0, 0]} color={color} />
      ))}
    </group>
  )
}

export function OrbitScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitingTech />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
