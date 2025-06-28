import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  TrendingUp, 
  Target, 
  Gamepad2, 
  Settings, 
  Shield, 
  Monitor,
  BarChart3,
  Search,
  FileText
} from 'lucide-react';

const skills = [
  {
    icon: TrendingUp,
    title: 'Odds Compilation',
    description: 'Compiling special odds for a variety of sporting events with precision'
  },
  {
    icon: Search,
    title: 'Data Gathering & Analysis',
    description: 'Pre-match sports data collection to enhance sportsbook products'
  },
  {
    icon: Shield,
    title: 'Liability Management',
    description: 'Monitor and manage liability for published markets and performance analysis'
  },
  {
    icon: FileText,
    title: 'Reporting & Documentation',
    description: 'Creating comprehensive reports on customers, betting markets, and channels'
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Investigating market trends and competitive analysis for valuable insights'
  },
  {
    icon: Gamepad2,
    title: 'Esports Expertise',
    description: 'Specialized knowledge in League of Legends, Dota 2, and CS:GO markets'
  },
  {
    icon: Settings,
    title: 'Trading Tools Development',
    description: 'Developing and documenting trading skills and tools for product improvement'
  },
  {
    icon: Target,
    title: 'Cross-Department Support',
    description: 'Assisting teams across departments with various odds-related tasks'
  },
  {
    icon: Monitor,
    title: 'Platform Knowledge',
    description: 'Expertise with Bet365, GG.Bet, 1xBet, and other major platforms'
  }
];

const Skills: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-dark-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Skills</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Comprehensive expertise in odds compilation, trading operations, and sportsbook management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-6 hover:bg-dark-800/70 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-dark-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;