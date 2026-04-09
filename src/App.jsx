// App.js
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FreelanceProjects from './components/FreelanceProjects';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';


// Loading component for suspense
const LoadingSpinner = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
);

// Scroll to top wrapper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Component to handle hash scrolling
function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

// Component to handle page tracking (optional)
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page views (if you have analytics)
    console.log(`Page viewed: ${location.pathname}`);
    // You can add Google Analytics or other tracking here
  }, [location]);

  return null;
}

function App() {
  const [showParticles, setShowParticles] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setShowParticles(window.innerWidth > 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    
    // Simulate initial loading (optional)
    setTimeout(() => setIsLoading(false), 500);
    
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-300 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <HashScrollHandler />
      <PageTracker />
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Particle Background - only on desktop */}
        {showParticles && <ParticleBackground />}
        
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <FreelanceProjects />
                    <About />
                    <Projects />
                    <Services />
                    <Pricing />
                    <Contact />
                  </>
                } 
              />

              {/* 404 Route */}
              <Route 
                path="*" 
                element={
                  <div className="min-h-screen bg-black flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                      <h2 className="text-2xl text-white mb-4">Page Not Found</h2>
                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                      <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                        Go Back Home
                      </a>
                    </div>
                  </div>
                } 
              />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;