import React from 'react'
import { motion } from 'framer-motion';
import { ChevronDown, Download, Send } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import Button from '../ui/Button';

export default function Home() {
    const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#20c997]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1e3a5f]/5 rounded-full blur-2xl"
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#20c997]/10 text-[#20c997] rounded-full text-sm font-medium mb-6"
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#ff6b6b] to-[#20c997] bg-clip-text text-transparent">
                  BSK
                </span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-2 left-0 h-4 bg-[#ff6b6b]/20 -z-0"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              A passionate <span className="text-[#1e3a5f] font-semibold">Full-Stack Developer</span> crafting 
              beautiful digital experiences with modern technologies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="group bg-[#1e3a5f] hover:bg-[#2d5a87] text-white px-8 py-6 rounded-full text-lg font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="group border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 rounded-full text-lg font-medium cursor-pointer transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                Download CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-12 mt-12 pt-12 border-t border-gray-200"
            >
              {[
                { value: '8+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '15+', label: 'Countries Visited' },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <motion.p 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                    className="text-4xl font-bold text-[#ff6b6b]"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-dashed border-[#20c997]/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border-2 border-dashed border-[#ff6b6b]/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 border-2 border-dashed border-[#1e3a5f]/30 rounded-full"
              />
              
              {/* Center avatar placeholder */}
              <div className="absolute inset-24 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-bold text-white">BSK</span>
              </div>

              {/* Floating elements */}
              {[
                { icon: '💻', position: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
                { icon: '🚀', position: 'bottom-0 left-1/2 -translate-x-1/2', delay: 0.5 },
                { icon: '🎨', position: 'left-0 top-1/2 -translate-y-1/2', delay: 1 },
                { icon: '⚡', position: 'right-0 top-1/2 -translate-y-1/2', delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                  className={`absolute ${item.position} w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 cursor-pointer hover:text-[#1e3a5f] transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
