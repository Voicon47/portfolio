"use client"

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame, ThreeEvent } from '@react-three/fiber'
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import type { RapierRigidBody, RigidBodyProps } from '@react-three/rapier'
import { Vector3 } from 'three'
import { GLTF } from 'three-stdlib'
import { motion } from "framer-motion"

extend({ MeshLineGeometry, MeshLineMaterial })
useGLTF.preload('/images/card.glb')
useTexture.preload('/images/band.png')

type GLTFResult = GLTF & {
  nodes: {
    card: THREE.Mesh
    clip: THREE.Mesh
    clamp: THREE.Mesh
  }
  materials: {
    base: THREE.MeshPhysicalMaterial
    metal: THREE.MeshStandardMaterial
  }
}

// Helper function to convert Rapier Vector to Three.js Vector3
const rapierToThreeVector = (v: { x: number; y: number; z: number }) => {
  return new Vector3(v.x, v.y, v.z)
}

export default function CardPortfolio() {
  return (
    <motion.div className='absolute inset-0 z-50'>
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
        <ambientLight intensity={Math.PI} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
      </Canvas>
    </motion.div>

  )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh>(null)
  const fixed = useRef<RapierRigidBody>(null)
  const j1 = useRef<RapierRigidBody>(null)
  const j2 = useRef<RapierRigidBody>(null)
  const j3 = useRef<RapierRigidBody>(null)
  const card = useRef<RapierRigidBody>(null)
  const [dragged, drag] = useState<false | THREE.Vector3>(false)
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
  const segmentProps: RigidBodyProps = {
    type: 'dynamic', // Explicitly type as RigidBodyTypeString
    canSleep: true,
    angularDamping: 2,
    linearDamping: 2,
    // Remove colliders prop since you're defining colliders manually
  };
  const { nodes, materials } = useGLTF('/images/card.glb') as unknown as GLTFResult
  const texture = useTexture('/images/band.png')
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed as React.RefObject<RapierRigidBody>, j1 as React.RefObject<RapierRigidBody>, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j1 as React.RefObject<RapierRigidBody>, j2 as React.RefObject<RapierRigidBody>, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j2 as React.RefObject<RapierRigidBody>, j3 as React.RefObject<RapierRigidBody>, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useSphericalJoint(j3 as React.RefObject<RapierRigidBody>, card as React.RefObject<RapierRigidBody>, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
        ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      // Convert Rapier vectors to Three.js vectors
      const j3Pos = rapierToThreeVector(j3.current.translation())
      const j2Pos = rapierToThreeVector(j2.current.translation())
      const j1Pos = rapierToThreeVector(j1.current.translation())
      const fixedPos = rapierToThreeVector(fixed.current.translation())

      curve.points[0].copy(j3Pos)
      curve.points[1].copy(j2Pos)
      curve.points[2].copy(j1Pos)
      curve.points[3].copy(fixedPos)

      if (band.current && band.current.geometry instanceof MeshLineGeometry) {
        band.current.geometry.setPoints(curve.getPoints(32))
        const angVel = rapierToThreeVector(card.current.angvel())
        const rotation = rapierToThreeVector(card.current.rotation())
        card.current.setAngvel({
          x: angVel.x,
          y: angVel.y - rotation.y * 0.25,
          z: angVel.z
        }, true)
      }
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" position={[2.5, 0, 0]} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              const target = e.target as HTMLElement | null;
              if (target) {
                target.releasePointerCapture(e.pointerId);
                drag(false);
              }
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              const target = e.target as HTMLElement | null;
              if (target) {
                target.setPointerCapture(e.pointerId);
                if (card.current) {
                  drag(new THREE.Vector3().copy(e.point).sub(vec.copy(rapierToThreeVector(card.current.translation()))));
                }
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
      </mesh>
    </>
  )
}