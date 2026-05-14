import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C, C++, C#', level: 85 },
  { name: 'Java, Python', level: 80 },
  { name: 'Basic Computer & Tally', level: 90 },
  { name: 'MS Office Suite', level: 95 },
  { name: 'Windows 10/7', level: 90 },
  { name: 'Web Technologies (HTML/CSS)', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ padding: '6rem 0' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="text-gradient">My Skills</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="neumorph"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '600' }}>
              <span>{skill.name}</span>
              <span style={{ color: 'var(--color-accent)' }}>{skill.level}%</span>
            </div>
            <div className="neumorph-inset" style={{ width: '100%', height: '14px', borderRadius: '7px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                style={{ 
                  height: '100%', 
                  background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))', 
                  borderRadius: '7px' 
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
