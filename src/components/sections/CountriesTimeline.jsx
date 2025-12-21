import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Plane, Camera } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';
import usImg from '../../assets/countries/usa.jpg';
import canadaImg from '../../assets/countries/canada.jpg';
import irelandImg from '../../assets/countries/ireland.jpg';
import englandImg from '../../assets/countries/england.jpg';
import franceImg from '../../assets/countries/france.jpg';
import usFlagImg from '../../assets/countries/us-flag.jpg';
import canadaFlagImg from '../../assets/countries/canada-flag.jpg';
import irelandFlagImg from '../../assets/countries/ireland-flag.jpg';
import englandFlagImg from '../../assets/countries/england-flag.jpg';
import franceFlagImg from '../../assets/countries/france-flag.jpg';
const countries = [
  {
    name: 'United States',
    date: new Date('2019-12-02'),
    purpose: 'Vacation',
    highlight: 'First time visiting the USA for leisure',
    cities: ['Alaska', 'New York', 'New Jersey', 'Pittsburgh', 'Seattle', 'Washington D.C.'],
    color: '#ff6b6b'
  },
  {
    name: 'Canada',
    date: new Date('2019-01-02'),
    purpose: 'Employment',
    highlight: 'Blessed with my second child',
    cities: ['Victoria', 'Vancouver', 'Toronto'],
    color: '#ff6b6b'
  },
  {
    name: 'Ireland',
    date: new Date('2014-03-02'),
    purpose: 'Work (Intracompany Transfer)',
    highlight: 'Blessed with my first child in Dublin!',
    cities: ['Dublin', 'Cork', 'Northern Ireland'],
    color: '#1e3a5f'
  },
  {
    name: 'England',
    date: new Date('2012-02-02'),
    purpose: 'Work (Intracompany Transfer)',
    highlight: 'First time traveling with my wife for work',
    cities: ['London', 'Wales', 'Birmingham'],
    color: '#20c997'
  },
  {
    name: 'France',
    date: new Date('2008-03-03'),
    purpose: 'Vacation',
    highlight: 'Visited Eiffel Tower, Louvre Museum, Disneyland and the French Riviera with friends',
    cities: ['Paris'],
    color: '#f59e0b'
  },
  {
    name: 'England',
    date: new Date('2007-05-02'),
    purpose: 'Work (Intracompany Transfer)',
    highlight: 'First time traveling abroad for work',
    cities: ['London', 'Cambridge', 'Birmingham', 'Scotland', 'Wales'],
    color: '#8b5cf6'
  }
];
// Map country names to preferred images (local or CDN). Fallback to the `image` field.
const countryImageMap = {
  'United States': usImg,
  'Canada': canadaImg,
  'Ireland': irelandImg,
  'England': englandImg,
  'France': franceImg,
};

// Map country names to small flag images (reuse the country images as flag thumbnails)
const flagImageMap = {
  'United States': usFlagImg,
  'Canada': canadaFlagImg,
  'Ireland': irelandFlagImg,
  'England': englandFlagImg,
  'France': franceFlagImg,
};

function getFlagImage(country) {
  return flagImageMap[country.name] || null;
}

function getCountryImage(country) {
  if (countryImageMap[country.name]) return countryImageMap[country.name];
  // Generic fallback image
  return 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=900&h=600&fit=crop';
}

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

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1e3a5f] via-[#ff6b6b] to-[#20c997] transform -translate-x-1/2 hidden md:block rounded-full" />

          <div className="space-y-12">
            {countries.map((country, index) => (
              <motion.div
                key={`${country.name}-${index}`}
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
                        {/* Render a small flag image when available, otherwise fall back to emoji */}
                        {getFlagImage(country) ? (
                          <img
                              src={getFlagImage(country)}
                              alt={`${country.name} flag`}
                              className="w-12 h-8 object-cover rounded-sm shadow-sm"
                              loading="lazy"
                              decoding="async"
                              width={48}
                              height={32}
                            />
                        ) : (
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 text-sm font-semibold text-gray-700">
                            {country.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()}
                          </span>
                        )}
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-2xl font-bold text-[#1e3a5f]">{country.name}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {format(country.date, 'MMM, yyyy')}
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
                      {country.cities.map((city, cIndex) => (
                        <span 
                          key={`${country.name}-${city}-${cIndex}`}
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
                      src={getCountryImage(country)} 
                      alt={country.name}
                      loading="lazy"
                      decoding="async"
                      width={900}
                      height={506}
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
