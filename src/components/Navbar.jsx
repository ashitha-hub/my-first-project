import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 100, padding: '0.8rem 2.5rem', display: 'flex', gap: '2.5rem',
        borderRadius: '50px'
      }}
      className="glass"
    >
      {['Home', 'About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          style={{ 
            fontSize: '1.1rem', fontWeight: '500', transition: 'all 0.3s',
            color: 'var(--color-text)'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = 'var(--color-accent)';
            e.target.style.textShadow = '0 0 8px var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'var(--color-text)';
            e.target.style.textShadow = 'none';
          }}
        >
          {item}
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
