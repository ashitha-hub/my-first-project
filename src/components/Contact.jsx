import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ padding: '6rem 0', paddingBottom: '10rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass text-center"
        style={{ padding: '4rem 2rem', maxWidth: '700px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--color-text-light)' }}>
          Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="neumorph-inset"
            style={{ padding: '1.2rem', fontSize: '1.1rem', color: 'var(--color-text)', outline: 'none', border: 'none', background: 'transparent' }}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="neumorph-inset"
            style={{ padding: '1.2rem', fontSize: '1.1rem', color: 'var(--color-text)', outline: 'none', border: 'none', background: 'transparent' }}
          />
          <textarea 
            placeholder="Your Message" 
            rows="5"
            className="neumorph-inset"
            style={{ padding: '1.2rem', fontSize: '1.1rem', color: 'var(--color-text)', outline: 'none', border: 'none', resize: 'vertical', background: 'transparent' }}
          />
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="neumorph font-accent"
            type="button"
            style={{ 
              padding: '1.2rem', fontSize: '1.8rem', cursor: 'pointer', 
              color: 'var(--color-primary)', fontWeight: 'bold'
            }}
          >
            Send Message ✨
          </motion.button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
            <GithubIcon />
          </a>
          <a href="#" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
            <LinkedinIcon />
          </a>
          <a href="mailto:ashithaacharya854@gmail.com" title="ashithaacharya854@gmail.com" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
            <MailIcon />
          </a>
          <a href="tel:+919902746407" title="+919902746407" style={{ color: 'var(--color-text)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
