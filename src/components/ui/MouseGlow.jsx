import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 9998 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          left: pos.x - 200,
          top: pos.y - 200,
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(244,114,182,0.04) 40%, transparent 70%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}
