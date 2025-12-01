import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../SectionTitle'
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
    name: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
    industry: 'Technology',
    project: 'Enterprise Dashboard',
    testimonial: 'Exceptional work and attention to detail. Delivered beyond expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'GreenLeaf Organics',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
    industry: 'E-commerce',
    project: 'Online Store Platform',
    testimonial: 'Professional approach and excellent communication throughout the project.',
    rating: 5,
  },
  {
    id: 3,
    name: 'FinanceHub',
    logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=200&fit=crop',
    industry: 'Finance',
    project: 'Banking App',
    testimonial: 'Transformed our digital presence completely. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'HealthFirst Clinic',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=200&fit=crop',
    industry: 'Healthcare',
    project: 'Patient Portal',
    testimonial: 'User-friendly design that our patients love. Great collaboration!',
    rating: 5,
  },
  {
    id: 5,
    name: 'EduLearn Academy',
    logo: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=200&fit=crop',
    industry: 'Education',
    project: 'Learning Management System',
    testimonial: 'Innovative solutions that enhanced our teaching capabilities.',
    rating: 5,
  },
  {
    id: 6,
    name: 'TravelWise',
    logo: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=200&fit=crop',
    industry: 'Travel',
    project: 'Booking Platform',
    testimonial: 'Seamless integration and beautiful design. Our bookings increased 40%!',
    rating: 5,
  },
  {
    id: 7,
    name: 'FoodieDelight',
    logo: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=200&h=200&fit=crop',
    industry: 'Food & Beverage',
    project: 'Restaurant App',
    testimonial: 'The app transformed how we serve our customers. Fantastic work!',
    rating: 4,
  },
  {
    id: 8,
    name: 'SportsFit Pro',
    logo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=200&fit=crop',
    industry: 'Fitness',
    project: 'Fitness Tracking App',
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
            title="Trusted By Clients" 
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
                          className="font-bold truncate"
                          style={{ color: theme.text }}
                        >
                          {client.name}
                        </h4>
                        <p 
                          className="text-sm truncate"
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

                    {/* Testimonial */}
                    <div className="relative mb-4">
                      <Quote 
                        className="absolute -top-1 -left-1 w-6 h-6 opacity-20"
                        style={{ color: theme.secondary }}
                      />
                      <p 
                        className="text-sm leading-relaxed pl-4 italic"
                        style={{ color: theme.textMuted }}
                      >
                        "{client.testimonial}"
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{ 
                            color: i < client.rating ? theme.highlight : theme.textMuted + '30',
                            fill: i < client.rating ? theme.highlight : 'transparent',
                          }}
                        />
                      ))}
                      <span 
                        className="text-xs ml-2"
                        style={{ color: theme.textMuted }}
                      >
                        ({client.rating}.0)
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 px-6"
        >
          <p 
            className="text-lg mb-6"
            style={{ color: theme.textMuted }}
          >
            Ready to become our next success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            style={{ 
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}