import React, { useState } from 'react';
import BackgroundWatercolor from './components/BackgroundWatercolor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <CustomCursor />
      <BackgroundWatercolor />
      <Navbar />
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme} 
        style={{ 
          position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 100,
          padding: '0.5rem 1rem', cursor: 'pointer', border: 'none', color: 'var(--color-text)'
        }}
        className="glass font-accent"
      >
        <span style={{ fontSize: '1.2rem' }}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </span>
      </button>

      <main className="container relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}

export default App;
