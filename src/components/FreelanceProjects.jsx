// FreelanceProjects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { freelanceProjects } from '../data/freelanceProjects';

const FreelanceProjects = () => {
  return (
    <section id="freelance" className="py-20 bg-gradient-to-b from-black via-darker to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-primary">Freelance</span> Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Client projects delivered with excellence and measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelanceProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark/50 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm border border-primary/20 card-hover group relative"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={`/images/S${project.id}.png`} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {project.type}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    project.status === 'In Progress'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-green-500/20 text-green-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <span className="text-primary">📅</span> {project.period}
                </p>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.shortDesc || project.description.substring(0, 80) + '...'}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {/* {project.skills.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                      +{project.skills.length - 3}
                    </span>
                  )} */}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
            
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{background:'red'}}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <FaExternalLinkAlt />
                      Live 
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects / CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready to bring your idea to life?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Now
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceProjects;