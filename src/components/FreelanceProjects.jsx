import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const FreelanceProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Product Catalog Website',
      type: 'Freelance',
      period: 'July 2025 – Present',
      description: 'Built a dynamic product catalog platform with search and filtering features using React.',
      impact: 'Improved system accessibility and reduced manual catalog management by 70%, doubling client usage.',
      status: 'In Progress',
      skills: ['React', 'Search', 'Filtering', 'UI/UX'],
      metrics: ['70% efficiency gain', '2x user growth']
    },
    {
      id: 2,
      title: 'Horoscope Web App with Payment Gateway',
      type: 'Freelance',
      period: 'Recent Project',
      description: 'Developed a UI for client data form filling and integrated payment gateway.',
      impact: 'Streamlined user experience and enabled seamless payment processing for horoscope services.',
      status: 'Completed',
      skills: ['UI Design', 'Payment Integration', 'Form Handling', 'Web Development'],
      metrics: ['Seamless payment flow', 'Enhanced UX']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="freelance" className="py-12 md:py-20 bg-gradient-to-b from-black via-darker to-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaBriefcase className="text-2xl md:text-3xl text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Recent <span className="text-primary">Freelance</span> Projects
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Client projects delivered with excellence and measurable results
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-dark/60 backdrop-blur-md border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300 shadow-lg">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs md:text-sm font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                        {project.type}
                      </span>
                      <span className={`text-xs md:text-sm font-semibold px-3 py-1 rounded-full ${
                        project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-green-500/20 text-green-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <FaArrowRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-lg md:text-xl" />
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm md:text-base">
                  <FaCalendarAlt className="text-primary" />
                  <span>{project.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center"
                    >
                      <p className="text-accent font-semibold text-sm md:text-base">{metric}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm px-3 py-1 bg-secondary/20 text-secondary rounded-full hover:bg-secondary/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Looking for a skilled freelancer? Let's discuss your project!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Project
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceProjects;
