import { motion } from 'framer-motion';

export default function GlowButton({ children, variant = 'primary', onClick, className = '', ...props }) {
  if (variant === 'secondary') {
    return (
      <motion.button
        className={`btn-secondary ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      className={`btn-primary ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
