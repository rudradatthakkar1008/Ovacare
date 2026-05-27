import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Blob({ position, color, speed, distort, scale }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed * 2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.35}
      />
    </Sphere>
  );
}

export default function FloatingBlobs() {
  const blobs = useMemo(() => [
    { position: [-3, 1.5, -3], color: '#7c3aed', speed: 0.4, distort: 0.4, scale: 1.8 },
    { position: [3, -1, -4], color: '#a855f7', speed: 0.3, distort: 0.5, scale: 1.5 },
    { position: [0, 2, -5], color: '#f472b6', speed: 0.5, distort: 0.3, scale: 2.0 },
    { position: [-2, -2, -6], color: '#818cf8', speed: 0.35, distort: 0.45, scale: 1.3 },
    { position: [2.5, 1, -7], color: '#c084fc', speed: 0.45, distort: 0.35, scale: 1.6 },
  ], []);

  return (
    <group>
      {blobs.map((blob, i) => (
        <Blob key={i} {...blob} />
      ))}
    </group>
  );
}
