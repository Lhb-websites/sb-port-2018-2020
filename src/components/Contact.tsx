import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Working Together?</span>
          </h2>
          
          <p className="text-xl text-dark-300 mb-12 leading-relaxed">
            Ready to bring precision and expertise to your esports betting operations? 
            Let's discuss how my experience can benefit your team.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="mailto:zelonthego@proton.me"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 group"
            >
              <Mail className="w-6 h-6" />
              Email Hans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-dark-400"
          >
            zelonthego@proton.me
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;