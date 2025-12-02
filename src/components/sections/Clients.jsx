import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../SectionTitle'
import bcministryLogo from '../../assets/bcministry.jpg'
import phsaLogo from '../../assets/phsa.jpg'
import bcgovsupportLogo from '../../assets/bcgovsupport.jpg'
import bctransportationLogo from '../../assets/bctransportation.jpg'
import mvrbLogo from '../../assets/mvrb.jpg'
import bceducationLogo from '../../assets/bceducation.jpg'
import citidirectLogo from '../../assets/citidirect.jpg'
import pfizerLogo from '../../assets/pfizer.jpg'
import colleaguefinderLogo from '../../assets/colleaguefinder.jpg'
import tmobileLogo from '../../assets/tmobile.jpg'
import cresendoLogo from '../../assets/cresendo.jpg'
import btserviceLogo from '../../assets/btservice.jpg'
import metalhardnessLogo from '../../assets/metalhardness.jpg'
import aiagentLogo from '../../assets/aiagent.jpg'
import logoSvg from '../../assets/logo.svg'
import medicalimageLogo from '../../assets/medicalimage.jpg'
import { useEffect, useState } from 'react'

function readCSSVar(name, fallback = '') {
  try {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name)
    return v ? v.trim() : fallback
  } catch (e) { return fallback }
}

const clients = [
  {
    id: 1,
    name: 'BC Ministry of Environment',
    logo: bcministryLogo,
    industry: 'Natual Resources',
    project: 'Community Energy and Emissions Database',
  },
  {
    id: 2,
    name: 'BC Provincial Health Services Authority',
    logo: phsaLogo,
    industry: 'Healthcare',
    project: 'Forensic Legal Application Solutions for Healthcare (FLASH)',
  },
  {
    id: 3,
    name: 'BC Ministry of Health',
    logo: bcgovsupportLogo,
    industry: 'Healthcare',
    project: 'Foundry',
  },
  {
    id: 4,
    name: 'BC Ministry of Citizen Services',
    logo: citidirectLogo,
    industry: 'Digital Services',
    project: 'API Program Services',
  },
  {
    id: 5,
    name: 'BC Ministry of Child and Family Development',
    logo: bceducationLogo,
    industry: 'Child and Family Services',
    project: 'MCFD Mobile App',
  },
  {
    id: 6,
    name: 'BC Ministries of Registries and Online Services',
    logo: logoSvg,
    industry: 'Registries and Online Services',
    project: 'BCROS',
    testimonial: 'Seamless integration and beautiful design. Our bookings increased 40%!',
    rating: 5,
  },
  {
    id: 7,
    name: 'BC Mackenzie Valley Review Board',
    logo: mvrbLogo,
    industry: 'Online Review System (ORS)',
    project: 'Restaurant App',
  },
  {
    id: 8,
    name: 'BC Ministry of Education',
    logo: bcministryLogo,
    industry: 'Education',
    project: 'Independent School Funding System (ISFS)',
  },
  {
    id: 9,
    name: 'BC Ministry of Transportation and Infrastructure',
    logo: bctransportationLogo,
    industry: 'Transportation and Infrastructure',
    project: 'Passenger Transportation Data Warehouse (PTDW)',
  },
  {
    id: 10,
    name: 'Nabors Pvt. Ltd, US',
    logo: btserviceLogo,
    industry: 'Oil and Gas',
    project: 'SmartDigiPro',
  },
  {
    id: 11,
    name: 'Citi Bank, Ireland',
    logo: citidirectLogo,
    industry: 'Banking',
    project: 'CitiDirect BE Tablet (CDT)',
  },
  {
    id: 12,
    name: 'Pfizer Inc., US',
    logo: pfizerLogo,
    industry: 'Pharmaceuticals',
    project: 'Various mobile applications',
  },
  {
    id: 13,
    name: 'Tata Consultancy Services Ltd, India',
    logo: colleaguefinderLogo,
    industry: 'IT Services',
    project: 'Colleague Finder',
  },
  {
    id: 14,
    name: 'T-Mobile, Germany',
    logo: tmobileLogo,
    industry: 'Telecommunications',
    project: 'Kundenplege App',
  },
  {
    id: 15,
    name: 'Videojet, UK',
    logo: cresendoLogo,
    industry: 'Industrial Printing',
    project: 'Crescendo, G4100',
  },
  {
    id: 16,
    name: 'British Telecommunications (BT), UK',
    logo: metalhardnessLogo,
    industry: 'Telecommunications',
    project: 'SMART',
  },
  {
    id: 17,
    name: 'MetaVision Inc., US',
    logo: aiagentLogo,
    industry: 'Metal Industry',
    project: 'Metavis',
  },
  {
    id: 18,
    name: 'Medimaging Inc., US',
    logo: medicalimageLogo,
    industry: 'Medical Imaging',
    project: 'SISCOM',
    testimonial: 'Clean, intuitive design. Our users are thrilled with the experience.',
    rating: 5,
  },
];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export default function Clients() {
  const [theme, setTheme] = useState({
    primary: '#0b3553',
    secondary: '#ff6b6b',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    text: '#374151',
    textMuted: '#6b7280',
    highlight: '#ff6b6b'
  })

  useEffect(() => {
    setTheme({
      primary: readCSSVar('--heading', '#0b3553'),
      secondary: readCSSVar('--accent', '#ff6b6b'),
      background: readCSSVar('--card', '#ffffff'),
      backgroundAlt: readCSSVar('--muted', '#f8fafc'),
      text: readCSSVar('--text', '#374151'),
      textMuted: readCSSVar('--text-muted', '#6b7280'),
      highlight: readCSSVar('--accent', '#ff6b6b')
    })
  }, [])

  return (
    <section 
      id="clients" 
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: theme.backgroundAlt }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme.primary }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme.secondary }}
        />
      </div>

      <div className="relative">
          <div className="max-w-6xl mx-auto px-6 mb-16">
          <SectionTitle 
            title="Worked with Clients" 
            subtitle="Building lasting partnerships through exceptional digital experiences"
          />
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 mb-16"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '120+', label: 'Projects Delivered' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '15+', label: 'Industries Served' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: theme.primary }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: theme.textMuted }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scrolling Cards Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ 
              background: `linear-gradient(to right, ${theme.backgroundAlt}, transparent)` 
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ 
              background: `linear-gradient(to left, ${theme.backgroundAlt}, transparent)` 
            }}
          />

          {/* Scrolling Track */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -50 * clients.length * 7.5],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  <div 
                    className="rounded-3xl p-6 h-full transition-all duration-300 border hover:shadow-2xl"
                    style={{ 
                      backgroundColor: theme.background,
                      borderColor: theme.textMuted + '15',
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                        <div 
                        className="w-16 h-16 rounded-2xl overflow-hidden ring-2 transition-all group-hover:ring-4"
                      >
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 
                          className="font-bold"
                          style={{ color: theme.text }}
                        >
                          {client.name}
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ color: theme.textMuted }}
                        >
                          {client.industry}
                        </p>
                      </div>
                    </div>

                    {/* Project Tag */}
                    <div 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
                      style={{ 
                        backgroundColor: theme.primary + '15',
                        color: theme.primary,
                      }}
                    >
                      {client.project}
                    </div>

                    {/* Industry */}
                    
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}