// src/types/meshline.d.ts
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any; // Replace `any` with specific props if known
      meshLineMaterial: any; // Replace `any` with specific props if known
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any; // Replace `any` with specific props if known
    meshLineMaterial: any; // Replace `any` with specific props if known
  }
}