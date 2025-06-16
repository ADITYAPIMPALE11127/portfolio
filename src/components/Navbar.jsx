import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Dev Shop', href: 'https://dev-e-commerce.vercel.app/', external: true, className: 'gradient-text' },
    { name: 'Linktree', href: 'https://linktr.ee/AdityaPimpale411', external: true, className: 'gradient-text-2' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Feedback', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <img
              src="/images/portfolio.png"
              alt="Logo"
              className="w-12 h-12 rounded-full animate-pulse-glow"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : ''}
                className={`relative text-white hover:text-primary transition-colors duration-300 font-medium ${item.className || ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="text-primary text-xl"
            >
              <FaPhone className="animate-bounce-slow" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-dark/95 rounded-lg p-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : ''}
                className={`block py-2 text-white hover:text-primary transition-colors duration-300 ${item.className || ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;