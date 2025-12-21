import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';

const experiences = [
  {
    company: 'Ernst & Young LLP, Canada',
    role: 'Manager',
    period: { start: new Date('2019-01-02'), end: new Date('2025-12-18') },
    location: 'Victoria, Canada',
    description: 'Led enterprise-scale programs with 98% on-time delivery, driving Agile transformations, cloud migrations, and AI solutions across public and private sectors. Enabled cross-functional teams through mentoring, roadmap planning, and data-driven insights while ensuring compliance and continuous improvement.',
    highlights: ['BC Gov Projects', 'CAD 6M+ Programs', 'Modernization Projects', '7+ Direct Reports', 'D365 Projects', 'Cross-functional Teams', 'Mobile/Web Applications', 'AI Chatbot POC', 'Technical Leadership' ],
    color: '#1e3a5f'
  },
  {
    company: 'Coastline Church, Victoria, Canada',
    role: 'Volunteer: Switcher',
    period: { start: new Date('2023-01-02'), end: null },
    location: 'Victoria, Canada',
    description: 'I am volunteering as a Switcher with the production team at Coastline Church in Victoria, serving once or twice a month on Sundays for two services.',
    highlights: ['Switcher', '4 Cameras', 'ROSS', 'Live Services', 'Christmas Productions' ],
    color: '#ff6b6b'
  },
  {
    company: 'Tata Consultancy Services Ltd, India',
    role: 'Associate Consultant',
    period: { start: new Date('2010-11-02'), end: new Date('2018-11-30') },
    location: 'Pune, India',
    description: 'Directed enterprise web and mobile application delivery across Oil & Gas, Banking, and Government sectors, driving Agile adoption, regulatory compliance, and seamless system integration. Scaled offshore operations generating USD 2M annually, while mentoring cross‑functional teams and leading UI/UX, full‑stack, and multi‑platform development initiatives.',
    highlights: ['Mobile Applications', 'USD 2M+ Revenue', 'Agile Delivery', 'UI/UX Implementation', 'Cross-functional Teams' ],
    color: '#20c997'
  },
  {
    company: 'Tech Mahindra (TechM) Ltd., India',
    role: 'Team Leader',
    period: { start: new Date('2004-03-02'), end: new Date('2010-10-31') },
    location: 'Pune, India',
    description: 'Served as Team Leader and Technical Lead, guiding cross‑functional engineering teams to deliver enterprise‑grade CRM solutions with VC++, C++, SQL Server, and Oracle. Partnered with clients on requirements and planning, while fostering collaboration, knowledge sharing, and strong relationships to ensure successful outcomes.',
    highlights: ['CRM/Enterprise-grade Solutions', 'Customer satisfaction 95%', 'Team Collaboration','Client Relationships','Team Lead / Project Delivery' ],
    color: '#f59e0b'
  },
  {
    company: 'Competent Solutions Pvt. Ltd., India',
    role: 'Software Developer',
    period: { start: new Date('2002-07-01'), end: new Date('2003-11-31') },
    location: 'Hyderabad, India',
    description: 'Developed and tested high‑performance image processing applications in VC++ and C++, ensuring product stability and optimization. Collaborated with cross‑functional teams and conducted rigorous unit testing to deliver reliable, high‑quality software.',
    highlights: ['VC++/C++', 'Image Processing', 'Developer Role' ],
    color: '#6b46c1'
  }
];

export default function Experience() {
  const [hovered, setHovered] = React.useState(null);

  const formatDate = (date) => {
    return date ? format(date, 'MMMM, yyyy') : 'Present';
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
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#ff6b6b] to-[#20c997] transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-0 md:z-auto" />

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
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer inline-block w-full max-w-2xl relative z-10 md:z-auto"
                  style={{
                    borderLeft: index % 2 !== 0 ? `4px solid ${exp.color}` : 'none',
                    borderRight: index % 2 === 0 ? `4px solid ${exp.color}` : 'none'
                  }}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-2xl font-bold text-[#1e3a5f]">{exp.company}</h3>
                      <div className={`flex items-center gap-2 text-gray-800 text-sm ${index % 2 === 0 ? 'md:justify-end md:w-full' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(exp.period.start)} - {formatDate(exp.period.end)}</span>
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
