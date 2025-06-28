import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Shield, Lock, FileText } from 'lucide-react';

const Confidentiality: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className="py-16 bg-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              Confidentiality Notice
            </h3>
            
            <p className="text-dark-300 leading-relaxed">
              Due to confidentiality agreements, detailed employer information is hidden. 
              Full disclosure available after job offer or NDA agreement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Confidentiality;