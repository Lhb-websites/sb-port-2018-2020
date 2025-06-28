import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Confidentiality from './components/Confidentiality';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <Confidentiality />
      <Contact />
    </div>
  );
}

export default App;