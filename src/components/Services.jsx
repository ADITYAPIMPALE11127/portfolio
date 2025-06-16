import React from 'react';
import { motion } from 'framer-motion';
import { FaWandMagicSparkles, FaHandsHoldingCircle, FaFileWord, FaLightbulb } from 'react-icons/fa6';

const Services = () => {
  const services = [
    {
      icon: FaWandMagicSparkles,
      title: 'Web Designing',
      description: 'Creating beautiful and responsive web designs with modern UI/UX principles.',
      features: ['Responsive Design', 'Modern UI/UX', 'Cross-browser Compatibility']
    },
    {
      icon: FaHandsHoldingCircle,
      title: 'Website Hosting',
      description: 'Professional website hosting through GitHub Pages and cloud hosting solutions.',
      features: ['GitHub Pages', 'Cloud Hosting', 'Domain Setup']
    },
    {
      icon: FaFileWord,
      title: 'Technical Writing',
      description: 'Comprehensive documentation, technical articles, and blog writing services.',
      features: ['Project Documentation', 'Technical Articles', 'Blog Writing']
    },
    {
      icon: FaLightbulb,
      title: 'Providing Projects',
      description: 'Custom web development and programming projects tailored to your needs.',
      features: ['Web Development', 'Programming Solutions', 'Custom Projects']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">My </span>Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I offer a range of professional services to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-dark/50 p-8 rounded-xl backdrop-blur-sm border border-primary/20 card-hover group"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <service.icon className="text-5xl text-primary group-hover:text-accent transition-colors duration-300 animate-bounce-slow" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full text-center py-3 px-6 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </motion.a>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to start your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;