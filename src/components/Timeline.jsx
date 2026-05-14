import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2023 - Present',
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'Pursuing',
    description: 'Focusing on software development, web technologies, and database management systems.'
  },
  {
    year: '2023',
    title: 'Pre-University Education (PUC)',
    subtitle: 'Siddaganga PU College for women, Tumkur',
    description: 'Passed with 79.55%. College Level Champion in Throwball.'
  },
  {
    year: 'April 2019',
    title: 'SSLC',
    subtitle: 'Empress KPS, Tumkur',
    description: 'Passed with 89.45%. School Level Champion in KhoKho.'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="container" style={{ padding: '6rem 0' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="text-gradient">Experience & Education</span>
      </h2>
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '4px', background: 'var(--glass-border)', borderRadius: '2px' }} />
        
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ position: 'relative', paddingLeft: '60px', marginBottom: '3rem' }}
          >
            {/* Dot */}
            <div style={{
              position: 'absolute', left: '10px', top: '5px', width: '24px', height: '24px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              borderRadius: '50%', border: '4px solid var(--color-bg)', boxShadow: '0 0 10px var(--color-primary)'
            }} />
            
            <div className="glass" style={{ padding: '2rem' }}>
              <span className="font-accent" style={{ color: 'var(--color-accent)', fontSize: '1.4rem' }}>{item.year}</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem' }}>{item.title}</h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1rem', fontWeight: '500' }}>{item.subtitle}</h4>
              <p style={{ fontSize: '1.1rem' }}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
