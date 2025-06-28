import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Hans</span>
          </h2>
          
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 md:p-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-200 leading-relaxed mb-6"
            >
              Hans Lacida is a skilled{' '}
              <span className="text-primary-400 font-semibold">Esports Odds Trader & Junior Sportsbook Analyst</span>{' '}
              with{' '}
              <span className="text-primary-400 font-semibold">2 years of experience</span>{' '}
              at a confidential international operator. He specialized in{' '}
              <span className="text-accent-400 font-semibold">odds compilation</span>,{' '}
              market analysis, and trading operations across both traditional sports and esports titles like{' '}
              <span className="text-primary-400 font-semibold">League of Legends</span>,{' '}
              <span className="text-primary-400 font-semibold">Dota 2</span>, and{' '}
              <span className="text-primary-400 font-semibold">CS:GO</span>.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-dark-300 leading-relaxed"
            >
              His expertise spans from{' '}
              <span className="text-accent-400 font-semibold">data gathering and market analysis</span>{' '}
              to{' '}
              <span className="text-primary-400 font-semibold">liability management</span>{' '}
              and competitive intelligence, making him a well-rounded professional in the sportsbook industry.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;