import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import guinnessLogo from '../../assets/Awards/guinness.png';
import asianRecordsLogo from '../../assets/Awards/asian-records.png';
import ingeniousCharmLogo from '../../assets/Awards/ingenious-charm.png';
import lcmLogo from '../../assets/Awards/lcm.png';
import sketchesLogo from '../../assets/Awards/SS.png';
import asianCert from '../../assets/Awards/asian_cert.jpg';
import guinnessCert from '../../assets/Awards/guinness_cert.jpg';
import lcmCert from '../../assets/Awards/lcm_cert.jpg';
import ingeniousCert from '../../assets/Awards/ingenious_cert.jpg';

const awards = [
  { id: 1, title: 'LCM Step 1 - Theory', organization: 'London College of Music', year: 2025, description: 'LCM Step 1 (Theory) exam organized by Hallel Music School, India', icon: lcmLogo, isImage: true, color: '#20c997' },
  { id: 2, title: 'Guinness World Record - Participant', organization: 'Guinness World Records', year: 2024, description: 'Group online event organized by Hallel Music School, India', icon: guinnessLogo, isImage: true, color: '#f59e0b' },
  { id: 3, title: 'Ingenious Charm World Records Award - Participant', organization: 'Ingenious Charm World Records Award', year: 2024, description: 'Group online event organized by Hallel Music School, India', icon: ingeniousCharmLogo, isImage: true, color: '#ff6b6b' },
  { id: 4, title: 'Asian Book of Records - Participant', organization: 'Asian Book of Records', year: 2024, description: 'Group online event organized by Hallel Music School, India', icon: asianRecordsLogo, isImage: true, color: '#1e3a5f' }
];

export default function PersonalSpace(){
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = {
    guinness: guinnessCert,
    asian: asianCert,
    lcm: lcmCert,
    ingenious: ingeniousCert,
  };

  function openCert(key){
    setCurrentImage(images[key]);
    setOpen(true);
  }

  function closeCert(){
    setOpen(false);
    setCurrentImage(null);
  }

  return (
    <section id="personal" className="py-32 bg-gray-50 relative overflow-hidden">
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
        <div className="mb-12 max-w-3xl mx-auto">
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
                    decoding="async"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white break-words">Sateesh Sketches</h3>
                    <div className="flex-shrink-0 ml-3">
                      <ExternalLink className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-white/90 text-base mb-1 break-words">www.sateeshsketches.com</p>
                  <p className="text-white/70 text-sm">Explore my collection of pencil sketches</p>
                </div>
              </div>
            </motion.div>
          </a>
        </div>

        {/* Awards List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {awards.map((award, index) => {
              const title = award.title.toLowerCase();
              let certKey = null;
              if (title.includes('guinness')) certKey = 'guinness';
              else if (title.includes('asian')) certKey = 'asian';
              else if (title.includes('lcm')) certKey = 'lcm';
              else if (title.includes('ingenious')) certKey = 'ingenious';

              return (
                <motion.div
                  key={award.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6 overflow-hidden"
                      style={{ backgroundColor: `${award.color}15` }}
                    >
                      {award.isImage ? (
                        <img 
                          src={award.icon} 
                          alt={`${award.title} logo`} 
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                          decoding="async"
                          width={80}
                          height={80}
                        />
                      ) : (
                        <span className="text-4xl">{award.icon}</span>
                      )}
                    </div>

                    <div>
                      <div className="mb-1">
                        <div className="flex items-center gap-3 mb-2 md:hidden">
                          <span 
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ backgroundColor: '#f1f5f9', color: '#1e3a5f' }}
                          >
                            {award.year}
                          </span>
                        </div>

                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-lg font-bold text-[#1e3a5f] mb-0 group-hover:text-[#ff6b6b] transition-colors">
                            {award.title}
                          </h4>

                          <div className="hidden md:flex items-center">
                            <span 
                              className="px-3 py-1 rounded-full text-sm font-medium"
                              style={{ backgroundColor: '#f1f5f9', color: '#1e3a5f' }}
                            >
                              {award.year}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-500 font-medium mb-2">{award.organization}</p>
                    </div>

                    <div className="col-span-2 text-gray-600 text-sm">
                      {award.description}
                    </div>

                    {certKey && images[certKey] && (
                      <div className="col-span-2 mt-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openCert(certKey);
                          }}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a7b] text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all group/btn"
                        >
                          <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Certificate
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeCert}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCert}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Close certificate"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-auto max-h-[90vh] p-4">
              <img
                src={currentImage}
                alt="Certificate"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}