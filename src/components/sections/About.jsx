import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb, Users } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code is my passion.',
    color: '#1e3a5f'
  },
  {
    icon: Palette,
    title: 'Design Focused',
    description: 'Creating beautiful, intuitive interfaces that users love.',
    color: '#ff6b6b'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning complex challenges into elegant solutions.',
    color: '#20c997'
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively to deliver outstanding results.',
    color: '#f59e0b'
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better - my journey, passions, and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt="Profile"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/20">BSK</span>
                </div>
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#20c997]/10 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#1e3a5f]">8+</p>
                    <p className="text-gray-500">Years of Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#ff6b6b] rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#20c997]/10 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Hello! I'm BSK, a full-stack developer with over 8 years of experience building 
                digital products that make a difference. My journey in tech started with a 
                curiosity about how things work, and it's evolved into a passion for creating 
                seamless user experiences.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and cloud 
                services. When I'm not coding, you'll find me exploring new countries, sketching, 
                or contributing to open-source projects.
              </p>
              <p>
                I believe in continuous learning and pushing the boundaries of what's possible 
                in web development. Every project is an opportunity to create something meaningful.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-semibold text-[#1e3a5f] mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}