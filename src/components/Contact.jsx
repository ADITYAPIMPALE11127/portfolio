import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaPhone, 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaDownload,
  FaEnvelope 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      const serviceID = 'service_67bf6uh';
      const templateID = 'template_br66n7k';  // Make sure this template has {{subject}} in EmailJS
      const publicKey = 'OKLZJTOP15-Ers8zN';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject || '(No subject)',  // Fallback if empty
        message: formData.message,
        to_email: 'adityaa12144@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 6000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 6000);
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-darker via-black to-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Drop me a message — I reply within 24 hours!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-5">
                <motion.div
                  whileHover={{ x: 12 }}
                  className="flex items-center gap-4 p-5 bg-dark/60 rounded-2xl backdrop-blur-md border border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FaEnvelope className="text-2xl text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:adityaa12144@gmail.com" className="text-white font-medium hover:text-primary transition-colors">
                      adityaa12144@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 12 }}
                  className="flex items-center gap-4 p-5 bg-dark/60 rounded-2xl backdrop-blur-md border border-primary/20"
                >
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <FaPhone className="text-2xl text-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+919607566258" className="text-white font-medium hover:text-accent transition-colors">
                      +91 96075 66258
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-5 text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -8 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <motion.a
              href="https://aditya-pimpale-resume.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg"
            >
              <FaDownload />
              Download My Resume
            </motion.a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-300 text-center font-medium"
              >
                Message sent successfully! I'll reply within 24 hours.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-300 text-center font-medium"
              >
                Failed to send. Please email me directly at adityaa12144@gmail.com
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-dark/70 border border-primary/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-dark/70 border border-primary/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>

              {/* NEW SUBJECT FIELD */}
              <input
                type="text"
                name="subject"
                placeholder="Subject (e.g. Website Development, App Idea, Collaboration)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-dark/70 border border-primary/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-5 py-4 bg-dark/70 border border-primary/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
              ></textarea>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-primary/60 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Or email me directly:{' '}
              <a href="mailto:adityaa12144@gmail.com" className="text-primary font-medium hover:underline">
                adityaa12144@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;