import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Users,  
  Calendar, 
  ExternalLink, 
  Github, 
  Award,
  Target,
  Zap,
  Globe,
  Clock,
  EyeOff,
  Lock,
  Skull
} from 'lucide-react';

interface Startup {
  id: number;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  logo: string;
  image: string;
  status: 'In Development' | 'Beta' | 'MVP';
  founded: string;
  industry: string;
  teamSize: number;
  github?: string;
  achievements: string[];
  technologies: string[];
  progress: number;
  expectedLaunch?: string;
}

const Startups: React.FC = () => {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [isBlurred, setIsBlurred] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const startups: Startup[] = [
    {
      id: 1,
      name: 'SportSync Analytics',
      tagline: 'AI-Powered Sports Performance Analytics',
      description: 'Real-time sports performance tracking and analytics platform using computer vision and machine learning for athletes and coaches.',
      longDescription: 'SportSync Analytics is revolutionizing how athletes and coaches analyze performance. Using advanced computer vision and machine learning algorithms, we provide real-time insights into player movements, technique analysis, and performance optimization. The platform includes injury prevention algorithms and personalized training recommendations.',
      logo: '⚽',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      founded: '2024',
      industry: 'Sports Technology',
      teamSize: 4,
      github: 'https://github.com/rahuldk1105',
      achievements: [
        'MVP development 70% complete',
        'Computer vision model achieving 92% accuracy',
        'Partnership discussions with local sports academies',
        'Core team assembled with sports and tech expertise'
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'OpenCV', 'Node.js', 'MongoDB', 'AWS'],
      progress: 70,
      expectedLaunch: 'Q2 2025',
    },
    {
      id: 2,
      name: 'FitForm Coach',
      tagline: 'AI Fitness Form Correction Platform',
      description: 'Smart fitness coaching app that uses pose estimation to provide real-time form correction and personalized workout guidance.',
      longDescription: 'FitForm Coach leverages cutting-edge pose estimation technology to analyze workout form in real-time. The app provides instant feedback, tracks progress, and creates personalized workout plans based on individual capabilities and goals. Perfect for home workouts and gym sessions alike.',
      logo: '🏋️',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Beta',
      founded: '2024',
      industry: 'Sports Technology',
      teamSize: 3,
      github: 'https://github.com/rahuldk1105',
      achievements: [
        'Beta version released to 50+ testers',
        'Pose detection accuracy of 94%',
        'Positive feedback from fitness trainers',
        'Mobile app development in progress'
      ],
      technologies: ['React Native', 'TensorFlow.js', 'MediaPipe', 'Firebase', 'TypeScript'],
      progress: 85,
      expectedLaunch: 'Q1 2025',
    },
    {
      id: 3,
      name: 'WealthWise',
      tagline: 'Smart Financial Management for Students',
      description: 'AI-driven personal finance app designed specifically for students and young professionals to manage money and build wealth.',
      longDescription: 'WealthWise is a comprehensive financial management platform tailored for students and young professionals. It features expense tracking, budget optimization, investment recommendations, and financial education modules. The AI analyzes spending patterns and provides personalized advice for better financial health.',
      logo: '💰',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'MVP',
      founded: '2024',
      industry: 'FinTech',
      teamSize: 3,
      github: 'https://github.com/rahuldk1105',
      achievements: [
        'MVP completed with core features',
        'User testing with 100+ students',
        'Financial algorithms developed and tested',
        'UI/UX design finalized'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Python', 'Plaid API', 'AWS'],
      progress: 60,
      expectedLaunch: 'Q3 2025',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'from-orange-500 to-red-500';
      case 'Beta': return 'from-blue-500 to-cyan-500';
      case 'MVP': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleRevealClick = () => {
    setShowWarning(true);
  };

  const handleProceedAnyway = () => {
    // Rickroll them! 😈
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    setShowWarning(false);
  };

  const handleNevermind = () => {
    setShowWarning(false);
  };

  return (
    <section id="startups" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full mb-6"
          >
            <Rocket className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-medium">Entrepreneurial Journey</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Startups</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Currently building the future through innovative startups that solve real-world problems. 
            All three ventures are in active development, focusing on sports technology and fintech solutions.
          </p>
        </motion.div>

        {/* Blurred Content with Savage Overlay */}
        <div className="relative">
          {/* Startups Grid - Blurred */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            isBlurred ? 'blur-xl scale-95 opacity-30' : ''
          }`}>
            {startups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => !isBlurred && setSelectedStartup(startup)}
              >
                <motion.div
                  whileHover={{ scale: isBlurred ? 1 : 1.02, y: isBlurred ? 0 : -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20 h-full"
                >
                  {/* Startup Image */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      whileHover={{ scale: isBlurred ? 1 : 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white text-sm">
                          <div className="flex items-center space-x-1 mb-2">
                            <Clock className="w-4 h-4" />
                            <span>Expected Launch: {startup.expectedLaunch}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 bg-gradient-to-r ${getStatusColor(startup.status)} rounded-full`}
                              style={{ width: `${startup.progress}%` }}
                            />
                          </div>
                          <div className="text-xs mt-1">{startup.progress}% Complete</div>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(startup.status)} text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20`}>
                        {startup.status}
                      </span>
                    </div>

                    {/* Logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-6xl bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                        {startup.logo}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                          <span className="text-2xl">{startup.logo}</span>
                          <span>{startup.name}</span>
                        </h3>
                        <p className="text-orange-400 font-medium text-sm">{startup.tagline}</p>
                      </div>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {startup.github && (
                          <motion.a
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                            href={startup.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-orange-500/20 rounded-lg hover:bg-orange-500/30 transition-colors"
                          >
                            <Github className="w-4 h-4 text-orange-400" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {startup.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {startup.technologies.slice(0, 3).map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: isBlurred ? 1 : 1.05 }}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {startup.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-md border border-gray-500/30">
                          +{startup.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Startup Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>Founded {startup.founded}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{startup.teamSize} people</span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-1 text-orange-400"
                      >
                        <Target className="w-3 h-3" />
                        <span>View Details</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Savage Overlay */}
          {isBlurred && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-red-500/50 rounded-3xl p-12 max-w-2xl mx-auto text-center shadow-2xl shadow-red-500/20"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-6"
                >
                  🔒
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                  <Skull className="w-8 h-8 text-red-400" />
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    CLASSIFIED INTEL
                  </span>
                  <Skull className="w-8 h-8 text-red-400" />
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Why would I reveal my startup secrets to random strangers on the internet? 🤔
                </p>
                
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 mb-8">
                  <p className="text-red-300 text-sm mb-4 flex items-center justify-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span className="font-semibold">TOP SECRET STARTUP DETAILS</span>
                    <Lock className="w-4 h-4" />
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="flex justify-between">
                      <span>█████████ Analytics</span>
                      <span className="text-green-400">██% Complete</span>
                    </div>
                    <div className="flex justify-between">
                      <span>███████ Coach</span>
                      <span className="text-blue-400">██% Complete</span>
                    </div>
                    <div className="flex justify-between">
                      <span>██████████</span>
                      <span className="text-orange-400">██% Complete</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-8">
                  But hey, if you're <em>really</em> curious and want to proceed anyway... 😏
                </p>

                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
                    rotate: [0, 1, -1, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRevealClick}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center space-x-3 mx-auto border-2 border-red-400/50"
                >
                  <EyeOff className="w-5 h-5" />
                  <span>REVEAL ANYWAY</span>
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💀
                  </motion.span>
                </motion.button>

                <p className="text-xs text-gray-500 mt-4 italic">
                  "Curiosity killed the cat... but satisfaction brought it back" 😈
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Warning Modal */}
        <AnimatePresence>
          {showWarning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="bg-gradient-to-br from-red-900/95 to-orange-900/95 backdrop-blur-md border-2 border-red-500/50 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl shadow-red-500/30"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: 3
                  }}
                  className="text-6xl mb-6"
                >
                  ⚠️
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  FINAL WARNING!
                </h3>

                <p className="text-red-300 mb-6 leading-relaxed">
                  You're about to enter dangerous territory. Are you absolutely sure you want to proceed? 
                  <br/><br/>
                  <span className="text-sm text-gray-400 italic">
                    (This might not end the way you expect... 😏)
                  </span>
                </p>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleProceedAnyway}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300"
                  >
                    PROCEED ANYWAY 💀
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNevermind}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                  >
                    Nevermind 😅
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Startup Modal (only shows if not blurred) */}
        <AnimatePresence>
          {selectedStartup && !isBlurred && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedStartup(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedStartup.image}
                    alt={selectedStartup.name}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedStartup(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
                  >
                    <ExternalLink className="w-6 h-6 text-white rotate-45" />
                  </motion.button>

                  <div className="absolute bottom-4 right-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(selectedStartup.status)} text-white text-sm font-medium rounded-full backdrop-blur-sm border border-white/20`}>
                      {selectedStartup.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 flex items-center space-x-3">
                        <span className="text-4xl">{selectedStartup.logo}</span>
                        <span>{selectedStartup.name}</span>
                      </h3>
                      <p className="text-orange-400 text-lg font-medium mb-4">{selectedStartup.tagline}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Founded {selectedStartup.founded}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{selectedStartup.teamSize} team members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Globe className="w-4 h-4" />
                          <span>{selectedStartup.industry}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Launch: {selectedStartup.expectedLaunch}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      {selectedStartup.github && (
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          href={selectedStartup.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-300" />
                          <span className="text-gray-300">Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {selectedStartup.longDescription}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-white">Development Progress</h4>
                      <span className="text-orange-400 font-bold">{selectedStartup.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedStartup.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-3 bg-gradient-to-r ${getStatusColor(selectedStartup.status)} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Award className="w-5 h-5 text-orange-400" />
                      <span>Current Achievements</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedStartup.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-500/10 to-purple-500/10 backdrop-blur-sm border border-orange-500/20 rounded-lg"
                        >
                          <Zap className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedStartup.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4 flex items-center justify-center space-x-2">
              <Rocket className="w-6 h-6 text-orange-400" />
              <span>Building the Future</span>
            </h4>
            <p className="text-gray-300 mb-6">
              These startups represent my passion for solving real-world problems through technology. 
              Currently in active development, each venture aims to make a meaningful impact in its respective domain.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-purple-600 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Startups;