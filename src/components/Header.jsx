import { motion } from 'framer-motion';
import { User, Calendar, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 industrial-texture"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <User className="w-8 h-8 text-gray-300" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold industrial-heading">
            Scott D. Allen
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 font-medium">
            Resume Analysis & Career Strategy Report
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-5 h-5" />
              <span>July 13, 2025</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Kansas City, MO</span>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-8 p-6 glass-effect rounded-lg max-w-3xl mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-lg text-gray-300 leading-relaxed">
              Comprehensive analysis of career transition from Quality Assurance to Product Management, 
              featuring current market research, strategic recommendations, and actionable insights.
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider"></div>
    </motion.header>
  );
};

export default Header;

