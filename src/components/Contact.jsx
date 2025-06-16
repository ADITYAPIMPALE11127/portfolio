import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formPayload = new FormData();
      formPayload.append('Name', formData.name);
      formPayload.append('Email', formData.email);
      formPayload.append('Message', formData.message);

      const response = await fetch('https://script.google.com/macros/s/AKfycby4ZGAQIH_At6R-84tXLZn623Hg9WV2NXLMcoUIt5N7sgd9c0jI1NHR8_vl81au1CNMzQ/exec', {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors' // Important for Google Apps Script
      });
      
      // With no-cors mode, we can't read the response, so we assume it worked
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100025292475880', color: '#1877F2' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/aditya-pimpale-40a09b214', color: '#0A66C2' },
    { icon: FaTwitter, url: 'https://twitter.com/AdityaPimpale8', color: '#1DA1F2' },
    { icon: FaGithub, url: 'https://github.com/ADITYAPIMPALE11127', color: '#333' },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-darker to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-3 md:space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-dark/50 rounded-lg backdrop-blur-sm"
                >
                  <FaPaperPlane className="text-xl md:text-2xl text-secondary" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">Email</p>
                    <a href="mailto:pimpaleaditya2@gmail.com" className="text-white hover:text-primary transition-colors text-sm md:text-base">
                      pimpaleaditya2@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-dark/50 rounded-lg backdrop-blur-sm"
                >
                  <FaPhone className="text-xl md:text-2xl text-secondary" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">Phone</p>
                    <a href="tel:9607566258" className="text-white hover:text-primary transition-colors text-sm md:text-base">
                      +91 9607566258
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Follow Me</h4>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-dark/50 rounded-full flex items-center justify-center text-lg md:text-xl hover:bg-primary/20 transition-colors duration-300"
                    style={{ color: social.color }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <motion.a
              href="/images/my-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
            >
              <FaDownload className="text-sm md:text-base" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 md:mb-6 p-3 md:p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-sm md:text-base"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 md:mb-6 p-3 md:p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-sm md:text-base"
              >
                Sorry, there was an error sending your message. Please try again.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark/50 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm md:text-base"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark/50 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm md:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark/50 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none text-sm md:text-base"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;