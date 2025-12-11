import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import guinnessLogo from '../../assets/Awards/guinness.png';
import asianRecordsLogo from '../../assets/Awards/asian-records.png';
import ingeniousCharmLogo from '../../assets/Awards/ingenious-charm.png';
import lcmLogo from '../../assets/Awards/lcm.png';
import sketchesLogo from '../../assets/Awards/SS.png';

const awards = [
  { id: 1, title: 'Guinness World Record - Participant', organization: 'Guinness World Records', year: 2024, description: 'Group online event organized by Hallel Music School, India', icon: guinnessLogo, isImage: true, color: '#f59e0b' },
  { id: 2, title: 'LCM Step 1 - Theory ', organization: 'London College of Music', year: 2024, description: 'LCM Step 1 (Theory) exam organized by Hallel Music School, India', icon: lcmLogo, isImage: true, color: '#20c997' },
  { id: 3, title: 'Ingenious Charm World Records Award - Participant', organization: 'Ingenious Charm World Records Award', year: 2024, description: 'Group online event organized by Hallel Music School, India', icon: ingeniousCharmLogo, isImage: true, color: '#ff6b6b' },
  { id: 4, title: 'Asian Book of Records - Participant', organization: 'Asian Book of Records', year: 2024, description: 'Group online event organized by Hallel Music School, India', icon: asianRecordsLogo, isImage: true, color: '#1e3a5f' },
  
  
];

export default function PersonalSpace(){
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
          subtitle="Beyond coding - my creative pursuits, achievements and recognitions"
        />

        {/* Sateesh Sketches Website */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <a
            href="https://www.sateeshsketches.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a7b] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative flex items-center gap-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6 overflow-hidden shadow-md">
                  <img 
                    src={sketchesLogo} 
                    alt="Sateesh Sketches logo" 
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Sateesh Sketches</h3>
                    <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white/90 text-lg mb-1">www.sateeshsketches.com</p>
                  <p className="text-white/70">Explore my collection of pencil sketches</p>
                </div>
              </div>
            </motion.div>
          </a>
        </motion.div>

        {/* Awards List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
                        className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6 overflow-hidden"
                        style={{ backgroundColor: `${award.color}15` }}
                      >
                        {award.isImage ? (
                          <img 
                            src={award.icon} 
                            alt={`${award.title} logo`} 
                            className="w-full h-full object-contain p-2"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-4xl">{award.icon}</span>
                        )}
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
      </div>
    </section>
  );
}