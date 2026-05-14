import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="container" style={{ padding: '8rem 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass"
        style={{ padding: '4rem', margin: '0 auto', maxWidth: '1000px' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="text-gradient">About Me</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Hello! I'm <strong style={{ color: 'var(--color-accent)' }}>Ashitha H M</strong>. I am looking for a challenging career which demands the best of my professional abilities in terms of technical and analytical skills, and helps me in broadening and enhancing my current skills and knowledge.
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Currently, I'm pursuing my BCA and working on projects like the Tourism Management System to apply my learnings in real-world applications.
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              <strong>My Hobbies:</strong> Keeping informed by what’s happening in the country, painting, reading novels, listening to songs, and playing indoor and outdoor games.
            </p>
            <motion.a 
              href="/Ashitha_H_M_Resume.docx"
              download="Ashitha_H_M_Resume.docx"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neumorph font-accent" 
              style={{ 
                display: 'inline-block', padding: '0.8rem 2rem', fontSize: '1.2rem', 
                color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold'
              }}
            >
              Download Resume 📄
            </motion.a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: '250px', height: '250px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                boxShadow: 'var(--glass-shadow)',
                animation: 'morph 8s ease-in-out infinite',
                overflow: 'hidden', border: '6px solid var(--glass-border)'
              }}
            >
              <img src={profileImg} alt="Ashitha H M" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
        <style>{`
          @keyframes morph {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
            100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default About;
