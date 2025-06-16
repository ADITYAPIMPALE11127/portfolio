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
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Conditional rendering of ParticleBackground for performance */}
      {typeof window !== 'undefined' && window.innerWidth > 768 && (
        <ParticleBackground />
      )}
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Mobile-specific styles */}
      <style jsx global>{`
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better tap highlights for mobile */
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Performance optimizations */
        @media (max-width: 768px) {
          .particles-container {
            display: none;
          }
        }
        
        /* Prevent horizontal overflow */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;