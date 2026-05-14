import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center" style={{ minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: '4rem 2rem', maxWidth: '800px', width: '100%', position: 'relative' }}
      >
        {/* Profile Image */}
        <div style={{
          width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 2rem auto',
          boxShadow: 'var(--neumorph-shadow)', overflow: 'hidden', border: '4px solid var(--glass-border)'
        }}>
          <img src={profileImg} alt="Ashitha H M" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
          Hi, I'm <br/><span className="text-gradient font-accent" style={{ fontSize: '4.5rem' }}>Ashitha H M</span>
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', fontWeight: '500' }}>
          Creative BCA Student & Developer
        </h2>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          Bridging the gap between artistic design and modern technology. Creating immersive, elegant, and memorable digital experiences.
        </p>
        
        <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
          <motion.button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neumorph font-accent" 
            style={{ 
              padding: '0.8rem 2rem', fontSize: '1.5rem', cursor: 'pointer', 
              color: 'var(--color-text)', border: 'none', outline: 'none'
            }}
          >
            View Projects
          </motion.button>
          
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass font-accent" 
            style={{ 
              padding: '0.8rem 2rem', fontSize: '1.5rem', cursor: 'pointer', 
              color: 'var(--color-accent)', border: 'none', outline: 'none'
            }}
          >
            Contact Me
          </motion.button>

          <motion.a 
            href="/Ashitha_H_M_Resume.docx"
            download="Ashitha_H_M_Resume.docx"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neumorph font-accent" 
            style={{ 
              padding: '0.8rem 2rem', fontSize: '1.5rem', cursor: 'pointer', 
              color: 'var(--color-primary)', border: 'none', outline: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center'
            }}
          >
            Download Resume 📄
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
