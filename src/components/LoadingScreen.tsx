import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const icons = [Code2, Cpu, Zap];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative w-24 h-24 mx-auto mb-8"
        >
          <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-secondary-500/50 rounded-full border-dashed"></div>
          <div className="absolute inset-4 border-4 border-accent-500/70 rounded-full"></div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center space-x-4 mb-6"
        >
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: index * 0.2,
                ease: "easeInOut" 
              }}
              className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <Icon className="w-6 h-6 text-primary-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
        >
          Loading Portfolio
        </motion.h2>

        <motion.div
          className="mt-4 flex justify-center"
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full w-32"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;