import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "In my time working with Hans, I witnessed firsthand his ability to remain calm and accurate under pressure. His precision in handling in-play adjustments was a major asset to the team.",
    author: "Head of Trading",
    company: "Confidential Betting Company",
    role: "Head of Trading"
  },
  {
    id: 2,
    quote: "Hans stood out as one of our most reliable odds operators. Even during intense tournaments, he ensured timely market updates and accurate settlements.",
    author: "Esports Operations Team Leader",
    company: "Confidential Betting Company",
    role: "Esports Operations Team Leader"
  }
];

const Testimonials: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            What Colleagues <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Say</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Testimonials from industry professionals who have worked with Hans
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 md:p-12 relative"
              >
                <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                <div className="pt-8">
                  <blockquote className="text-xl md:text-2xl text-dark-100 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white mb-1">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-primary-400 font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-dark-400 text-sm">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-dark-800 hover:bg-dark-700 border border-dark-600 hover:border-primary-500 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-dark-300 group-hover:text-primary-400" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-500' 
                        : 'bg-dark-600 hover:bg-dark-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-dark-800 hover:bg-dark-700 border border-dark-600 hover:border-primary-500 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-dark-300 group-hover:text-primary-400" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;