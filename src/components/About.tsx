import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Code, Trophy, Brain, Zap } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { name: 'Sports Analytics', icon: Trophy, color: 'from-orange-500 to-red-500' },
    { name: 'Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Full-Stack Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Computer Vision', icon: Zap, color: 'from-green-500 to-emerald-500' },
  ];


  return (
    <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Few Words <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate Computer Science Engineering student and full-stack developer with a deep fascination for 
            the intersection of technology and sports. My journey revolves around leveraging AI and machine learning 
            to revolutionize how we understand and enhance athletic performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center border border-primary-500/30"
                >
                  <Code className="w-8 h-8 text-primary-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Rahul DK</h3>
                  <p className="text-primary-400 font-medium">CSE Student & Full-Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Chennai, India</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <GraduationCap className="w-5 h-5 text-primary-400" />
                  <div className="flex flex-col">
                  <span className="text-gray-300">BS in Data Science - IIT Madras</span>
                  <span className="text-gray-300">B.Tech Computer Science Engineering - Vels University</span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">Expected Graduation: 2027</span>
                </motion.div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Core Philosophy</h4>
                <p className="text-gray-300 leading-relaxed">
                  "Technology should enhance human potential, not replace it. I believe in creating intelligent 
                  systems that empower athletes and sports enthusiasts to achieve their best performance through 
                  data-driven insights and AI-powered coaching."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${interest.color} p-0.5 rounded-xl`}>
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 h-full group-hover:bg-gray-800/90 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-2 bg-gradient-to-br ${interest.color} rounded-lg`}
                        >
                          <interest.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <h4 className="text-white font-semibold">{interest.name}</h4>
                      </div>
                      <div className={`h-1 bg-gradient-to-r ${interest.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 mt-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-primary-400 mb-1"
                  >
                    20+
                  </motion.div>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-secondary-400 mb-1"
                  >
                    4+
                  </motion.div>
                  <p className="text-gray-400 text-sm">Years Coding</p>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-accent-400 mb-1"
                  >
                    2+
                  </motion.div>
                  <p className="text-gray-400 text-sm">Hackathons Won</p>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-green-400 mb-1"
                  >
                    88%
                  </motion.div>
                  <p className="text-gray-400 text-sm">AI Model Accuracy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Let's Build the Future Together</h4>
            <p className="text-gray-300 mb-6">
              I'm always excited to collaborate on innovative projects that combine technology with real-world impact. 
              Whether it's sports analytics, AI research, or full-stack development - let's create something amazing!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;