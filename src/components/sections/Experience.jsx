import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Full-Stack Developer',
    period: { start: new Date('2022-03-01'), end: null },
    location: 'San Francisco, CA',
    description: 'Leading development of enterprise-scale applications using React and Node.js. Managing a team of 5 developers and implementing best practices for code quality.',
    highlights: ['Led migration to microservices', 'Reduced load time by 40%', 'Mentored junior developers'],
    color: '#1e3a5f'
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Full-Stack Developer',
    period: { start: new Date('2019-06-01'), end: new Date('2022-02-28') },
    location: 'New York, NY',
    description: 'Developed and maintained multiple client projects, focusing on responsive design and performance optimization.',
    highlights: ['Built 20+ client websites', 'Implemented CI/CD pipelines', 'Created reusable component library'],
    color: '#ff6b6b'
  },
  {
    company: 'StartUp Labs',
    role: 'Frontend Developer',
    period: { start: new Date('2017-01-01'), end: new Date('2019-05-31') },
    location: 'Austin, TX',
    description: 'Worked on innovative startup products, translating designs into pixel-perfect interfaces with smooth animations.',
    highlights: ['Launched 3 products', 'Achieved 99% uptime', 'Won best UI award'],
    color: '#20c997'
  },
  {
    company: 'WebCraft Agency',
    role: 'Junior Developer',
    period: { start: new Date('2015-08-01'), end: new Date('2016-12-31') },
    location: 'Seattle, WA',
    description: 'Started my professional journey building websites and learning the fundamentals of web development.',
    highlights: ['Completed 50+ projects', 'Learned React & Node', 'Customer satisfaction 95%'],
    color: '#f59e0b'
  }
];

export default function Experience() {
  const [hovered, setHovered] = React.useState(null);

  const formatDate = (date) => {
    return date ? format(date, 'MMM dd, yyyy') : 'Present';
  };

  return (
    <section id="experience" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#20c997]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#ff6b6b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey and the companies I've had the privilege to work with"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#ff6b6b] to-[#20c997] transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              onMouseEnter={() => setHovered(exp.company)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Content Card (styled like CountriesTimeline) */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer inline-block w-full max-w-md"
                  style={{
                    borderLeft: index % 2 !== 0 ? `4px solid ${exp.color}` : 'none',
                    borderRight: index % 2 === 0 ? `4px solid ${exp.color}` : 'none'
                  }}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-2xl font-bold text-[#1e3a5f]">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {formatDate(exp.period.start)} - {formatDate(exp.period.end)}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 font-medium" style={{ color: exp.color }}>{exp.role}</p>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{h}</span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot (center) */}
              <div className="hidden md:flex items-center justify-center w-8">
                <motion.div
                  animate={{
                    scale: hovered === exp.company ? 1.4 : 1,
                    boxShadow: hovered === exp.company ? `0 0 20px ${exp.color}50` : '0 0 0 transparent'
                  }}
                  className="w-6 h-6 rounded-full border-4 border-white z-10"
                  style={{ backgroundColor: exp.color }}
                />
              </div>

              {/* Spacer / placeholder for image area (not used) */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}