import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, Trophy, ChevronRight, X, ZoomIn } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';

const sketches = [
  { id: 1, title: 'Urban Landscape', date: new Date('2024-01-15'), image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=600&fit=crop', description: 'Pencil sketch of downtown skyline' },
  { id: 2, title: 'Portrait Study', date: new Date('2024-02-20'), image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop', description: 'Charcoal portrait practice' },
  { id: 3, title: 'Nature Series', date: new Date('2024-03-10'), image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop', description: 'Watercolor botanical study' },
  { id: 4, title: 'Architecture', date: new Date('2023-12-05'), image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop', description: 'Ink drawing of historic buildings' },
  { id: 5, title: 'Abstract Flow', date: new Date('2023-11-18'), image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop', description: 'Mixed media abstract piece' },
  { id: 6, title: 'Digital Art', date: new Date('2024-04-02'), image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop', description: 'Digital illustration concept' },
];

const awards = [
  { id: 1, title: 'Best Innovation Award', organization: 'TechCrunch Disrupt', year: 2023, description: 'Recognized for revolutionary AI-powered development tool', icon: '🏆', color: '#f59e0b' },
  { id: 2, title: 'Developer of the Year', organization: 'GitHub Universe', year: 2022, description: 'Honored for open-source contributions and community impact', icon: '⭐', color: '#1e3a5f' },
  { id: 3, title: 'Design Excellence', organization: 'Awwwards', year: 2023, description: 'Site of the Day winner for portfolio redesign', icon: '🎨', color: '#ff6b6b' },
  { id: 4, title: 'Top Contributor', organization: 'Stack Overflow', year: 2021, description: 'Gold badge for exceptional community contributions', icon: '🥇', color: '#20c997' },
  { id: 5, title: 'Hackathon Champion', organization: 'Google I/O', year: 2022, description: 'First place in the productivity category', icon: '🚀', color: '#8b5cf6' },
];

export default function PersonalSpace(){
  const [activeTab, setActiveTab] = useState('sketches');
  const [selectedSketch, setSelectedSketch] = useState(null);

  return (
    <section id="personal" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#ff6b6b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#20c997]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="Personal Space" 
          subtitle="Beyond coding - my creative pursuits and achievements"
        />

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('sketches')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'sketches'
                ? 'bg-[#1e3a5f] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Pencil className="w-5 h-5" />
            Sketches
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-[#1e3a5f] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Trophy className="w-5 h-5" />
            Awards
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'sketches' ? (
            <motion.div
              key="sketches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sketches Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {sketches.map((sketch, index) => (
                  <motion.div
                    key={sketch.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedSketch(sketch)}
                    className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
                  >
                    <img 
                      src={sketch.image} 
                      alt={sketch.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <h4 className="text-white font-bold text-lg">{sketch.title}</h4>
                      <p className="text-gray-300 text-sm">{format(sketch.date, 'MMM dd, yyyy')}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sketch Modal */}
              <AnimatePresence>
                {selectedSketch && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedSketch(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.9 }}
                      className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="relative aspect-video">
                        <img 
                          src={selectedSketch.image}
                          alt={selectedSketch.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                        <button 
                          onClick={() => setSelectedSketch(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                          aria-label="Close modal"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-500 mb-4">{format(selectedSketch.date, 'MMM dd, yyyy')}</p>
                        <p className="text-gray-600">{selectedSketch.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="awards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Awards List */}
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-6">
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 text-4xl transition-transform group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: `${award.color}15` }}
                      >
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span 
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ backgroundColor: `${award.color}15`, color: award.color }}
                          >
                            {award.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-[#1e3a5f] mb-1 group-hover:text-[#ff6b6b] transition-colors">
                          {award.title}
                        </h4>
                        <p className="text-gray-500 font-medium mb-3">{award.organization}</p>
                        <p className="text-gray-600">{award.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}