import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import FloatingCube from './3D/FloatingCube';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <Float speed={1} rotationIntensity={1} floatIntensity={2}>
              <FloatingCube position={[-4, 2, -2]} />
            </Float>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
              <FloatingCube position={[4, -2, -3]} />
            </Float>
            <Float speed={0.8} rotationIntensity={0.8} floatIntensity={2.5}>
              <FloatingCube position={[-2, -1, -4]} />
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Hi, I'm </span>
                <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Rahul DK
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl text-gray-300 font-medium">
                Engineering Student & Full-Stack Developer
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Passionate about creating innovative solutions with cutting-edge technology. 
                Specializing in sports-tech, AI/ML, and building scalable web applications 
                that make a real-world impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore My Work</span>
                <ChevronDown className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center space-x-6 pt-4"
            >
              {[
                { icon: Github, href: 'https://github.com/rahuldk1105', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/dkrahul/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:rahuldk1105@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with Motion Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 -m-20">
                {/* Rotating Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
                  style={{ width: '400px', height: '400px' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-secondary-500/20 rounded-full border-dashed"
                  style={{ width: '450px', height: '450px', top: '-25px', left: '-25px' }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-accent-500/20 rounded-full"
                  style={{ width: '500px', height: '500px', top: '-50px', left: '-50px' }}
                />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.sin(i) * 10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
                    style={{
                      top: `${20 + (i * 10)}%`,
                      left: `${15 + (i * 8)}%`,
                    }}
                  />
                ))}

                {/* Pulsing Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-full blur-3xl"
                  style={{ width: '350px', height: '350px', top: '25px', left: '25px' }}
                />
              </div>

              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <div className="relative w-80 h-80 mx-auto">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full p-1">
                    <div className="w-full h-full bg-gray-900 rounded-full p-2">
                      <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full overflow-hidden border-4 border-white/10">
                        {/* Profile Image */}
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          src="https://i.ibb.co/j9LP36Lr/DSC09184.jpg"
                          alt="Rahul DK"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-secondary-500/20 opacity-60" />
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 right-8 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg"
                  />

                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="absolute -top-4 -right-4 p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-xl"
                  >
                    <span className="text-2xl">⚛️</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 p-3 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 backdrop-blur-sm border border-secondary-500/30 rounded-xl"
                  >
                    <span className="text-2xl">🤖</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
                    className="absolute top-1/2 -left-8 p-3 bg-gradient-to-br from-accent-500/20 to-primary-500/20 backdrop-blur-sm border border-accent-500/30 rounded-xl"
                  >
                    <span className="text-2xl">⚡</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2 group-hover:text-primary-400 transition-colors">Scroll Down</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 border border-gray-600 rounded-full group-hover:border-primary-500 transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;