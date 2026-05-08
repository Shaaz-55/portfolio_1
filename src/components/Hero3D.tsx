import { Canvas } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function ComplexShape() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
      // Gently follow pointer
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 1.5, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 1.5, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh scale={[1.2, 1.2, 1.2]}>
          <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
          <meshStandardMaterial 
             color="#ffffff"
             roughness={0}
             metalness={1}
          />
        </mesh>
      </Float>
    </group>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-full cursor-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        {/* Colorful dynamic lighting reflecting off the metal */}
        <directionalLight position={[10, 10, 5]} intensity={3} color="#00e5ff" />
        <directionalLight position={[-10, -10, -5]} intensity={3} color="#ff0055" />
        
        <ComplexShape />
        
        <Sparkles count={400} scale={20} size={2} speed={0.4} color="#00e5ff" opacity={0.6} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
