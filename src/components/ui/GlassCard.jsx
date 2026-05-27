import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  glowColor = 'rgba(168,85,247,0.3)',
  hoverScale = 1.02,
  tilt = true,
  delay = 0,
  ...props
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      boxShadow: `0 8px 32px ${glowColor}, 0 0 60px rgba(168,85,247,0.05)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: 'none',
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass-card p-6 ${className}`}
      style={{
        ...tiltStyle,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
