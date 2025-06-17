import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-primary-500 to-primary-600',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'Three.js', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-secondary-500 to-secondary-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 65 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-accent-500 to-accent-600',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 65 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'JavaScript', level: 98 },
        { name: 'Python', level: 75 },
        { name: 'C++', level: 60 },
        { name: 'Java', level: 50 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 90 },
        { name: 'iOS Development', level: 85 },
        { name: 'Android Development', level: 88 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'TensorFlow', level: 72 },
        { name: 'PyTorch', level: 68 },
        { name: 'Data Science', level: 75 },
        { name: 'Computer Vision', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software engineering and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;