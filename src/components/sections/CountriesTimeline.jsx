import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Plane, Camera } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';

const countries = [
  { 
    name: 'Japan', 
    flag: '🇯🇵', 
    date: new Date('2024-03-15'), 
    purpose: 'Conference', 
    highlight: 'Spoke at Tokyo Tech Summit',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
    cities: ['Tokyo', 'Kyoto', 'Osaka'],
    color: '#ff6b6b'
  },
  { 
    name: 'Germany', 
    flag: '🇩🇪', 
    date: new Date('2023-11-20'), 
    purpose: 'Work', 
    highlight: 'Client project in Munich',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
    cities: ['Berlin', 'Munich', 'Hamburg'],
    color: '#1e3a5f'
  },
  { 
    name: 'Australia', 
    flag: '🇦🇺', 
    date: new Date('2023-08-10'), 
    purpose: 'Vacation', 
    highlight: 'Great Barrier Reef diving',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop',
    cities: ['Sydney', 'Melbourne', 'Brisbane'],
    color: '#20c997'
  },
  { 
    name: 'Brazil', 
    flag: '🇧🇷', 
    date: new Date('2023-05-05'), 
    purpose: 'Hackathon', 
    highlight: 'Won 2nd place at São Paulo Hack',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
    cities: ['São Paulo', 'Rio de Janeiro'],
    color: '#f59e0b'
  },
  { 
    name: 'Iceland', 
    flag: '🇮🇸', 
    date: new Date('2023-02-14'), 
    purpose: 'Adventure', 
    highlight: 'Northern Lights experience',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop',
    cities: ['Reykjavik', 'Akureyri'],
    color: '#8b5cf6'
  },
  { 
    name: 'Singapore', 
    flag: '🇸🇬', 
    date: new Date('2022-10-25'), 
    purpose: 'Conference', 
    highlight: 'AWS Summit keynote',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
    cities: ['Singapore City'],
    color: '#ec4899'
  },
  { 
    name: 'Italy', 
    flag: '🇮🇹', 
    date: new Date('2022-07-18'), 
    purpose: 'Vacation', 
    highlight: 'Art & architecture tour',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&h=400&fit=crop',
    cities: ['Rome', 'Florence', 'Venice'],
    color: '#14b8a6'
  },
  { 
    name: 'Canada', 
    flag: '🇨🇦', 
    date: new Date('2022-04-10'), 
    purpose: 'Remote Work', 
    highlight: 'Mountain coding retreat',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop',
    cities: ['Vancouver', 'Toronto', 'Montreal'],
    color: '#ef4444'
  },
];

export default function CountriesTimeline(){
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const purposeIcons = {
    Conference: '🎤',
    Work: '💼',
    Vacation: '🏖️',
    Hackathon: '💻',
    Adventure: '🏔️',
    'Remote Work': '🌐'
  };

  return (
    <section id="countries" className="py-32 bg-white relative overflow-hidden">
      {/* Background map pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231e3a5f' d='M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="Countries Experience" 
          subtitle="My journey around the world - places I've worked, learned, and explored"
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {[
            { value: '15+', label: 'Countries Visited', icon: MapPin, color: '#1e3a5f' },
            { value: '30+', label: 'Cities Explored', icon: Camera, color: '#ff6b6b' },
            { value: '8', label: 'Conferences Attended', icon: Plane, color: '#20c997' },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="flex items-center gap-4 bg-gray-50 rounded-2xl px-8 py-4"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1e3a5f] via-[#ff6b6b] to-[#20c997] transform -translate-x-1/2 hidden md:block rounded-full" />

          <div className="space-y-12">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer inline-block w-full max-w-md"
                    style={{ 
                      borderLeft: index % 2 !== 0 ? `4px solid ${country.color}` : 'none',
                      borderRight: index % 2 === 0 ? `4px solid ${country.color}` : 'none',
                    }}
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-5xl">{country.flag}</span>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-2xl font-bold text-[#1e3a5f]">{country.name}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {format(country.date, 'MMM dd, yyyy')}
                        </div>
                      </div>
                    </div>

                    {/* Purpose Badge */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                        style={{ backgroundColor: `${country.color}15`, color: country.color }}
                      >
                        {purposeIcons[country.purpose]} {country.purpose}
                      </span>
                    </div>

                    {/* Highlight */}
                    <p className="text-gray-600 mb-4">{country.highlight}</p>

                    {/* Cities */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {country.cities.map((city) => (
                        <span 
                          key={city}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-8">
                  <motion.div
                    animate={{ 
                      scale: hoveredCountry === country.name ? 1.5 : 1,
                      boxShadow: hoveredCountry === country.name 
                        ? `0 0 20px ${country.color}50` 
                        : '0 0 0 transparent'
                    }}
                    className="w-6 h-6 rounded-full border-4 border-white z-10"
                    style={{ backgroundColor: country.color }}
                  />
                </div>

                {/* Image */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer max-w-md mx-auto"
                  >
                    <img 
                      src={country.image} 
                      alt={country.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-video object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6"
                    >
                      <span className="text-white font-medium">{country.highlight}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
