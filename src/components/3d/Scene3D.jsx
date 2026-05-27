import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingBlobs from './FloatingBlobs';
import ParticleField from './ParticleField';

export default function Scene3D({ children, className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#c084fc" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#f472b6" />
          <pointLight position={[0, 5, -10]} intensity={0.2} color="#60a5fa" />
          <FloatingBlobs />
          <ParticleField />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
