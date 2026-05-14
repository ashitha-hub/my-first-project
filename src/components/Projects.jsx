import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Tourism Management System',
    description: 'A comprehensive web application for managing tourism operations, including user registration, booking management, and an administrative dashboard.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container" style={{ padding: '6rem 0' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="text-gradient">Featured Projects</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{project.title}</h3>
            <p style={{ fontSize: '1.1rem', flex: 1, color: 'var(--color-text-light)' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {project.tech.map((tech) => (
                <span key={tech} className="neumorph-inset" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem', borderRadius: '20px', color: 'var(--color-accent)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
