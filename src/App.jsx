import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;