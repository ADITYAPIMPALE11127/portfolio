import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto px-0 sm:px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
            >
              Aditya Pimpale
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed text-gray-300"
            >
              A passionate computer engineering graduate with a flair for
              <span className="block sm:inline"> creating innovative web & software solutions.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <p className="text-secondary text-lg sm:text-xl font-semibold">
                | Web Development Enthusiast |
              </p>
              
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pimpaleaditya2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-6 py-3 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hire Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </motion.div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        .glow-button {
          background: linear-gradient(45deg, var(--primary), var(--accent));
          color: white;
          border-radius: 0.5rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }
        
        .glow-button:hover::before {
          left: 100%;
        }
        
        @media (max-width: 640px) {
          .glow-button {
            padding: 0.6rem 1.2rem;
            min-width: 110px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;