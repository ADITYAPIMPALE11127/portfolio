import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaReact, FaPython, FaGit, FaGithub, FaFileAlt, FaGlobe } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'Core Java (Basic)', icon: FaJava, color: '#f89820' },
        { name: 'JavaScript (Basic)', icon: FaJs, color: '#f7e02a' },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', icon: FaReact, color: '#61DBFB' },
        { name: 'React Native', icon: FaReact, color: '#61DBFB' },
        { name: 'Flask', icon: FaPython, color: '#306998' },
        { name: 'Axios', icon: FaGlobe, color: '#50d3bb' },
        { name: 'React Native Paper', icon: FaReact, color: '#61DBFB' },
      ]
    },
    {
      category: 'Miscellaneous',
      items: [
        { name: 'Git', icon: FaGit, color: '#F1502F' },
        { name: 'GitHub', icon: FaGithub, color: '#31ef14' },
        { name: 'MS Office', icon: FaFileAlt, color: '#fd5353' },
      ]
    }
  ];

  const experience = [
    { role: 'Frontend Developer Intern', company: 'Anveshak Technologies', period: 'August 2024' },
    { role: 'React Native Developer', company: 'BlueCollarLog', period: 'Feb 2024 - May 2024' },
    { role: 'Big Data Intern', company: 'Cyber Secured India', period: 'Feb 2023 - Mar 2023' },
    { role: 'Project Intern', company: 'Awadh', period: 'Jun 2022 - Aug 2022' },
    { role: 'Web Developer', company: 'Teachnook', period: 'Apr 2022 - May 2022' },
    { role: 'Content Writer', company: 'Aashman Foundation, Punjab', period: 'Feb 2022 - Apr 2022' },
  ];

  const education = [
    { degree: 'COMPUTER ENGINEERING', institution: 'Savitribai Phule Pune University' },
    { degree: '12th SCIENCE (HSC)', institution: 'S.B.Patil College of Science and Commerce, Ravet' },
    { degree: '10th GRADE (SSC)', institution: 'St. Ursula High School, Akurdi-35' },
  ];

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <section id="about" className="py-10 md:py-20 bg-gradient-to-b from-black to-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
              <span className="text-primary">A</span>bout Me
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed mb-6 md:mb-8 text-gray-300 text-center max-w-4xl mx-auto px-2">
              I am a Computer Engineering graduate from Savitribai Phule Pune University (SPPU), 
              driven by a deep passion for technology and innovation. Throughout my academic journey, 
              I explored various aspects of programming, web development, and software engineering. 
              I actively seek opportunities for growth, taking on internships and real-world projects 
              in Big Data, web development, and technical writing. My relentless drive and technical 
              expertise equip me to make a significant impact in the field of computer engineering.
            </p>

            {/* Tabs - Now scrollable on mobile */}
            <div className="flex overflow-x-auto pb-2 mb-6 md:mb-8 hide-scrollbar">
              <div className="flex space-x-2 px-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-dark text-gray-300 hover:bg-primary/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-dark/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm"
            >
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  {skills.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg sm:text-xl font-bold text-secondary mb-3 sm:mb-4">{category.category}:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {category.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-3 p-3 bg-black/30 rounded-lg"
                          >
                            <skill.icon 
                              className="text-xl sm:text-2xl animate-bounce-slow" 
                              style={{ color: skill.color }} 
                            />
                            <span className="text-white text-sm sm:text-base">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-3">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 sm:p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-white text-sm sm:text-base">{exp.role}</h4>
                      <p className="text-primary text-xs sm:text-sm">{exp.company}</p>
                      <p className="text-secondary text-xs">{exp.period}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 sm:p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-white text-sm sm:text-base">{edu.degree}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{edu.institution}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default About;