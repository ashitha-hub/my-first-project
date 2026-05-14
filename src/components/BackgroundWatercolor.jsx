import React from 'react';

const BackgroundWatercolor = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
      <div 
        style={{
          position: 'absolute',
          top: '-10%', left: '-10%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          filter: 'blur(80px)', opacity: 0.5, borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-20%', right: '-10%', width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)',
          filter: 'blur(100px)', opacity: 0.4, borderRadius: '50%',
          animation: 'float 15s ease-in-out infinite reverse'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '40%', left: '30%', width: '40vw', height: '40vw',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          filter: 'blur(90px)', opacity: 0.3, borderRadius: '50%',
          animation: 'float 18s ease-in-out infinite'
        }}
      />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundWatercolor;
