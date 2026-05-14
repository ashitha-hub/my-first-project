import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '32px', height: '32px',
        borderRadius: '50%', border: '2px solid var(--color-accent)',
        pointerEvents: 'none', zIndex: 9999, 
        backgroundColor: 'rgba(178, 141, 255, 0.2)',
        backdropFilter: 'blur(2px)'
      }}
    />
  );
};

export default CustomCursor;
