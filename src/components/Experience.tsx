import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const responsibilities = [
    'Compiling special odds for a variety of sporting events',
    'Data gathering for different pre-match sports to enhance sportsbook product',
    'Monitor and manage liability for published markets and analyzing performance',
    'Creating reports on customers, betting markets and betting channels',
    'Investigating market trends and observe competition for valuable market insight',
    'Assist other teams across the department with various odds related tasks',
    'Developing and documenting trading skills and tools to improve sportsbook product'
  ];

  return (
    <section ref={ref} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0">
                    Junior Odds Compiler/Trader
                  </h3>
                  <div className="flex items-center gap-4 text-dark-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2018 – 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Confidential Betting Company</span>
                    </div>
                  </div>
                </div>

                {/* Daily Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Daily Task Responsibilities</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3 bg-dark-900/50 rounded-lg p-4 border border-dark-600/50"
                      >
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-200 leading-relaxed">{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400 mb-1">500+</div>
                    <div className="text-sm text-dark-300">Events Compiled</div>
                  </div>
                  <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent-400 mb-1">99.9%</div>
                    <div className="text-sm text-dark-300">Accuracy Rate</div>
                  </div>
                  <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400 mb-1">24/7</div>
                    <div className="text-sm text-dark-300">Market Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;