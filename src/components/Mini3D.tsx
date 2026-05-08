import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Shape({ type, color }: { type: 'torus' | 'box' | 'sphere' | 'icosahedron', color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.4;
      ref.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float floatIntensity={3} speed={3} rotationIntensity={2}>
      <mesh ref={ref}>
        {type === 'torus' && <torusKnotGeometry args={[1, 0.3, 128, 16]} />}
        {type === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
        {type === 'sphere' && <sphereGeometry args={[1.2, 16, 16]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[1.5, 0]} />}
        <meshStandardMaterial color={color} wireframe wireframeLinewidth={2} transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

export function Mini3D({ type, color }: { type: 'torus' | 'box' | 'sphere' | 'icosahedron', color: string }) {
  return (
    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 select-none pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <Shape type={type} color={color} />
      </Canvas>
    </div>
  )
}
