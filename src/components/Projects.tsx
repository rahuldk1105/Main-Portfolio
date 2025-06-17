import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Users, Code, Star, Eye, GitBranch, Briefcase, User, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  projectType: 'Commercial' | 'Personal' | 'Upcoming';
  date: string;
  teamSize: number;
  stars?: number;
  views?: number;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    // Commercial Projects
    {
      id: 1,
      title: 'Dream Big Soccer School Website',
      description: 'Professional website for a soccer academy featuring course registration, coach profiles, and training programs.',
      longDescription: 'A comprehensive website developed for Dream Big Soccer School, featuring modern design, course registration system, coach profiles, training program details, and contact management. The site includes responsive design, SEO optimization, and content management capabilities.',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Basic Framework', 'Tailwind CSS' , 'Bootstrap'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://dreambigsoccerschoolsindia.in',
      category: 'Web App',
      projectType: 'Commercial',
      date: '2024',
      teamSize: 1,
      stars: 45,
      views: 1200,
      featured: true,
    },
    {
      id: 2,
      title: 'Teenage Traders',
      description: 'Educational platform teaching trading fundamentals to beginners with interactive lessons and simulations.',
      longDescription: 'A comprehensive trading education platform designed for beginners, especially teenagers. Features interactive lessons, trading simulations, market analysis tools, and progress tracking. The platform makes complex trading concepts accessible through gamification and visual learning.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Express'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://www.teenagetraders.in/',
      category: 'Web App',
      projectType: 'Commercial',
      date: '2023',
      teamSize: 1,
      stars: 67,
      views: 890,
    },

    // Personal Projects - Social Media Clones
    {
      id: 3,
      title: 'Threads Clone',
      description: 'Full-featured Threads app clone with real-time posting, following, and social interactions.',
      longDescription: 'A pixel-perfect clone of the Threads app featuring user authentication, real-time posting, following/followers system, likes, comments, and a responsive design. Built with modern React patterns and real-time database synchronization.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      githubUrl: 'https://github.com/rahuldk1105/threads',
      liveUrl: 'https://threads-lemon-two.vercel.app',
      category: 'Web App',
      projectType: 'Personal',
      date: '2025',
      teamSize: 1,
      stars: 89,
      views: 2340,
    },
    {
      id: 4,
      title: 'Socially - Instagram Clone',
      description: 'Instagram clone with all features except messaging - photo sharing, stories, likes, and comments.',
      longDescription: 'A comprehensive Instagram clone called "Socially" that replicates all Instagram features except messaging. Includes photo/video posting, stories, likes, comments, following system, explore page, and user profiles. Features responsive design and smooth animations.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.JS', 'CSS3', 'Context API', 'Clerk', ],
      githubUrl: 'https://github.com/rahuldk1105/socially',
      liveUrl: 'https://socially-nine-blue.vercel.app',
      category: 'Web App',
      projectType: 'Personal',
      date: '2025',
      teamSize: 1,
      stars: 123,
      views: 1560,
    },

    // Games
    {
      id: 5,
      title: 'Gesture-Based Fruit Ninja',
      description: 'Innovative Fruit Ninja game using computer vision for gesture-based fruit slicing without touching the screen.',
      longDescription: 'A revolutionary take on Fruit Ninja that uses computer vision and hand tracking to detect gestures for slicing fruits. Players can slice fruits by moving their hands in front of the camera without touching the screen. Deployed as a web application with real-time gesture recognition.',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'MediaPipe', 'HTML5 Canvas', 'TensorFlow.js', 'WebRTC'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://fruit-ninja-touchless.netlify.app/',
      category: 'Game',
      projectType: 'Personal',
      date: '2025',
      teamSize: 1,
      stars: 156,
      views: 2890,
      featured: true,
    },
    
    {
      id: 6,
      title: 'Breakout Game',
      description: 'Classic Breakout game with power-ups, multiple levels, and smooth paddle controls.',
      longDescription: 'A modern take on the classic Breakout game featuring multiple levels, power-ups, smooth paddle controls, and particle effects. Includes level progression, score multipliers, and responsive design for different screen sizes.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Web Audio API'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://breakout-game-endless.netlify.app/',
      category: 'Game',
      projectType: 'Personal',
      date: '2024',
      teamSize: 1,
      stars: 45,
      views: 670,
    },
    {
      id: 7,
      title: 'Tech Design Tic Tac Toe',
      description: 'Modern, tech-inspired Tic Tac Toe game with sleek animations and AI opponent.',
      longDescription: 'A beautifully designed Tic Tac Toe game with a modern tech aesthetic, smooth animations, and an intelligent AI opponent. Features multiple difficulty levels, score tracking, and a futuristic UI design.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'CSS3', 'JavaScript', 'Framer Motion'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://tictactoegameweb.netlify.app/',
      category: 'Game',
      projectType: 'Personal',
      date: '2023',
      teamSize: 1,
      stars: 34,
      views: 560,
    },

    // Simulators & Tools
    {
      id: 8,
      title: 'Nuclear Power Plant Simulator',
      description: 'AI-powered simulator that analyzes optimal nuclear power plant locations in India using ML data.',
      longDescription: 'An advanced simulator that uses AI and machine learning to analyze geographical, environmental, and safety data to determine optimal locations for nuclear power plants in India. Features interactive maps, risk analysis, and detailed reports.',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'React', 'TensorFlow', 'Mapbox', 'Pandas', 'NumPy'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://gonuclear.onrender.com/',
      category: 'Simulator',
      projectType: 'Personal',
      date: '2024',
      teamSize: 1,
      stars: 203,
      views: 4120,
      featured: true,
    },
   
    {
      id: 9,
      title: 'QR Code Generator',
      description: 'Versatile QR code generator supporting multiple data types with customization options.',
      longDescription: 'A feature-rich QR code generator that supports URLs, text, contact information, WiFi credentials, and more. Includes customization options for colors, sizes, and error correction levels, plus batch generation capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'QRCode.js', 'HTML5 Canvas', 'CSS3'],
      githubUrl: 'https://github.com/rahuldk1105',
      liveUrl: 'https://best-qr-code-generator.netlify.app/',
      category: 'Tool',
      projectType: 'Personal',
      date: '2023',
      teamSize: 1,
      stars: 67,
      views: 1230,
    },
  ];

  const categories = ['All', 'Web App', 'Game', 'Simulator', 'Tool'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'Commercial': return 'from-green-500 to-emerald-500';
      case 'Personal': return 'from-blue-500 to-cyan-500';
      case 'Upcoming': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case 'Commercial': return Briefcase;
      case 'Personal': return User;
      case 'Upcoming': return Zap;
      default: return Code;
    }
  };

  // 3D Tilt Effect Component
  const TiltCard: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ 
    children, 
    className = '', 
    onClick 
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateY: rotateY,
          rotateX: rotateX,
          transformStyle: "preserve-3d",
        }}
        className={`cursor-pointer ${className}`}
      >
        <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A diverse collection of web applications, games, simulators, and tools. 
            From commercial client work to innovative personal projects and upcoming ventures.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-primary-500/50 shadow-lg shadow-primary-500/25'
                    : 'bg-gray-800/60 text-gray-300 border-white/10 hover:bg-gray-700/60 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const TypeIcon = getProjectTypeIcon(project.projectType);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <TiltCard
                  onClick={() => setSelectedProject(project)}
                  className="h-full"
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/20 h-full">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      {/* Overlay with stats */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="flex space-x-4 text-white text-sm">
                            {project.stars && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>{project.stars}</span>
                              </div>
                            )}
                            {project.views && (
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{project.views}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-primary-400/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Type Badge */}
                      <div className="absolute top-4 left-4">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${getProjectTypeColor(project.projectType)} text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/20`}
                        >
                          <TypeIcon className="w-3 h-3" />
                          <span>{project.projectType}</span>
                        </motion.span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute bottom-4 right-4">
                          <motion.span
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full"
                          >
                            ⭐ FEATURED
                          </motion.span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.a
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                          >
                            <Github className="w-4 h-4 text-gray-300" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/30 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-primary-400" />
                          </motion.a>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-1 bg-secondary-500/20 text-secondary-300 text-xs rounded-md border border-secondary-500/30 hover:bg-secondary-500/30 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-md border border-gray-500/30">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</span>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center space-x-1 text-primary-400"
                        >
                          <GitBranch className="w-3 h-3" />
                          <span>View Details</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
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
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    {(() => {
                      const TypeIcon = getProjectTypeIcon(selectedProject.projectType);
                      return (
                        <span className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getProjectTypeColor(selectedProject.projectType)} text-white text-sm font-medium rounded-full backdrop-blur-sm border border-white/20`}>
                          <TypeIcon className="w-4 h-4" />
                          <span>{selectedProject.projectType} Project</span>
                        </span>
                      );
                    })()}
                  </div>

                  {selectedProject.featured && (
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full">
                        ⭐ FEATURED PROJECT
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedProject.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{selectedProject.teamSize} {selectedProject.teamSize === 1 ? 'person' : 'people'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Code className="w-4 h-4" />
                          <span>{selectedProject.category}</span>
                        </div>
                        {selectedProject.stars && (
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span>{selectedProject.stars} stars</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-300" />
                        <span className="text-gray-300">Code</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                        <span className="text-white">
                          {selectedProject.projectType === 'Upcoming' ? 'Coming Soon' : 'Live Demo'}
                        </span>
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-secondary-500/20 text-secondary-300 text-sm rounded-lg border border-secondary-500/30 hover:bg-secondary-500/30 transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default Projects;