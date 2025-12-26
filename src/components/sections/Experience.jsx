import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import eyLogo from '../../assets/Expereinces/EY.png';
import coastlineLogo from '../../assets/Expereinces/coastline.png';
import tcsLogo from '../../assets/Expereinces/tcs.png';
import techmLogo from '../../assets/Expereinces/techm.png';
import { format } from 'date-fns';

const experiences = [
  {
    company: 'Ernst & Young LLP, Canada',
    role: 'Manager',
    period: { start: new Date('2019-01-03'), end: new Date('2025-12-19') },
    location: 'Victoria, Canada',
    description: 'Led enterprise-scale programs with 98% on-time delivery, driving Agile transformations, cloud migrations, and AI solutions across public and private sectors. Enabled cross-functional teams through mentoring, roadmap planning, and data-driven insights while ensuring compliance and continuous improvement.',
    highlights: ['BC Gov Projects', 'CAD 6M+ Programs', 'Modernization Projects', '7+ Direct Reports', 'D365 Projects', 'Cross-functional Teams', 'Mobile/Web Applications', 'AI Chatbot POC', 'Technical Leadership' ],
    color: '#1e3a5f',
    // Prefer using a company logo image when available
    icon: {
      type: 'image',
      src: eyLogo,
      alt: 'Ernst & Young logo'
    },
    responsibilities: [
      'Lead the end-to-end delivery of enterprise-scale programs (CAD 6M+) with a consistent 98% on-time completion rate, ensuring alignment with business objectives, budget, and governance standards.',
      'Managed IT integration and gap analysis for a major Credit Union merger, ensuring seamless system and data consolidation across platforms.',
      'Oversaw multiple Agile delivery streams across public and private sector clients, directing cross-functional teams of 12+ members (Development, QA, DevOps, UX).',
      'Spearheaded the development of an AI Chatbot Proof of Concept for a healthcare client using Azure OpenAI, Flutter SDK, Azure Copilot, and Webchat, showcasing strong technical and delivery leadership.',
      'Designed and executed comprehensive program roadmaps, utilizing Jira, Azure DevOps, and Confluence for planning, tracking, and documentation.',
      'Championed Agile and SAFe transformations, facilitating coaching workshops and boosting team velocity by 25%.',
      'Planned and facilitated multiple PI Planning events, including backlog grooming, release management, and dependency mapping to ensure cohesive delivery.',
      'Directed cloud migration and support of real-time systems handling 50K+ transactions per upload, enhancing scalability and performance.',
      'Defined and monitored KPIs, OKRs, and Agile metrics (velocity, burn-downs, release frequency) through Power BI, Zenhub, and Jira dashboards to provide executive-level insights.',
      'Mentored and coached 7+ junior managers and direct reports, fostering leadership growth and strengthening delivery practices across the organization.',
      'Conducted risk assessments, release readiness reviews, and change board management, reducing delivery blockers by over 30%.',
      'Led data migration programs for public sector clients, ensuring full compliance with privacy, security, and audit standards.',
      'Contributed to RFP processes, including technical inputs, delivery strategies, and proposal documentation.'
    ]
  },
  {
    company: 'Coastline Church, Canada',
    role: 'Volunteer: Switcher',
    period: { start: new Date('2023-01-02'), end: null },
    location: 'Victoria, Canada',
    description: 'I am volunteering as a Switcher with the production team at Coastline Church in Victoria, serving once or twice a month on Sundays for two services.',
    highlights: ['Switcher', 'Four Cameras', 'ROSS', 'Live Services', 'Christmas Productions' ],
    color: '#ff6b6b',
    icon: {
      type: 'image',
      src: coastlineLogo,
      alt: 'Coastline Church logo'
    },
    responsibilities: [
      'Operated live production switcher for four cameras worship services for inhouse and online audiences',
      'Worked for special events like Christmas carol shows, Easter and Good Friday services',
      'Coordinated camera crue and live overlays with the production team',
      'Worked as camera man for special events occasionally',
    ]
  },
  {
    company: 'Tata Consultancy Services Ltd, India',
    role: 'Associate Consultant',
    period: { start: new Date('2010-11-02'), end: new Date('2018-12-01') },
    location: 'Pune, India',
    description: 'Directed enterprise web and mobile application delivery across Oil & Gas, Banking, and Pharma sectors, driving Agile adoption, regulatory compliance, and seamless system integration. Scaled offshore operations generating USD 2M annually, while mentoring cross‑functional teams and leading UI/UX, full‑stack, and multi‑platform development initiatives.',
    highlights: ['Mobile Applications', 'USD 2M+ Revenue', 'Agile Delivery', 'UI/UX Implementation', 'Cross-functional Teams' ],
    color: '#20c997',
    icon: {
      type: 'image',
      src: tcsLogo,
      alt: 'Tata Consultancy Services logo'
    },
    responsibilities: [
      'Directed end-to-end delivery of enterprise web and mobile applications across Oil & Gas, Banking, and Government sectors, ensuring adherence to regulatory and quality standards.',
      'Managed offshore delivery centers, scaling operations and generating USD 2M in annual revenue through efficient resource planning and delivery optimization.',
      'Collaborated closely with business stakeholders and product owners to define roadmaps, manage scope, and mitigate project risks.',
      'Championed Agile adoption across globally distributed teams (India, US), improving transparency and delivery cadence.',
      'Delivered multi-platform mobile applications (iOS, Android, Xamarin) within regulated environments, maintaining high compliance and reliability.',
      'Oversaw UI redesign and full-stack development initiatives, ensuring seamless integration with enterprise systems.',
      'Led and mentored six cross-functional teams (developers, testers, UX designers, and DevOps engineers) while directly supervising four direct reports to ensure performance excellence and career growth.',
    ]
  },
  {
    company: 'Tech Mahindra (TechM) Ltd., India',
    role: 'Team Leader',
    period: { start: new Date('2004-03-02'), end: new Date('2010-10-31') },
    location: 'Pune, India',
    description: 'Served as Team Leader and Technical Lead, guiding cross‑functional engineering teams to deliver enterprise‑grade CRM solutions with VC++, C++, SQL Server, and Oracle. Partnered with clients on requirements and planning, while fostering collaboration, knowledge sharing, and strong relationships to ensure successful outcomes.',
    highlights: ['CRM/Enterprise-grade Solutions', 'Customer satisfaction 95%', 'Team Collaboration','Client Relationships','Team Lead / Project Delivery' ],
    color: '#f59e0b',
    icon: {
      type: 'image',
      src: techmLogo,
      alt: 'Tech Mahindra logo'
    },
    responsibilities: [
      'Developed and tested high-performance applications in the Image Processing domain using VC++ and C++, contributing to product stability and performance optimization.',
      'Collaborated within cross-functional teams to ensure timely delivery of reliable software components.',
      'Conducted unit testing and validation, enhancing system quality, stability, and user experience through rigorous QA processes.'
    ]
  },
  {
    company: 'Competent Solutions Pvt. Ltd., India',
    role: 'Software Developer',
    status: 'defunct',
    note: 'Company no longer operating',
    period: { start: new Date('2002-07-01'), end: new Date('2003-11-31') },
    location: 'Hyderabad, India',
    description: 'Developed and tested high‑performance image processing applications in VC++ and C++, ensuring product stability and optimization. Collaborated with cross‑functional teams and conducted rigorous unit testing to deliver reliable, high‑quality software.',
    highlights: ['VC++/C++', 'Image Processing', 'Developer Role' ],
    color: '#6b46c1',
    icon: '🖥️',
    responsibilities: [
      'Designed and implemented image processing algorithms in VC++/C++',
      'Worked closely with QA to produce stable, production-ready releases',
      'Optimized performance-critical code paths and memory usage',
      'Contributed to technical documentation and build automation'
    ]
  }
];

export default function Experience() {
  const [hovered, setHovered] = React.useState(null);
  const [selectedExperience, setSelectedExperience] = React.useState(null);
  const [DetailComponent, setDetailComponent] = React.useState(null);

  const formatDate = (date) => {
    return date ? format(date, 'MMMM, yyyy') : 'Present';
  };

  // Open detail view for a specific experience (lazy-load component)
  const openDetails = async (exp) => {
    setSelectedExperience(exp);
    if (!DetailComponent) {
      try {
            const mod = await import('./ExperienceDetails');
        const Comp = mod.default || mod.ExperienceDetail || null;
        setDetailComponent(() => Comp);
      } catch (err) {
        // Failed to load detail component — silently skip in production
      }
    }
  };

  const truncateText = (text, max = 160) => {
    if (!text) return '...';
    const trimmed = text.trim();
    if (trimmed.length <= max) return trimmed + '...';
    return trimmed.slice(0, max).replace(/\s+[^\s]*$/, '') + '...';
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
            <React.Fragment key={exp.company}>
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
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-default inline-block w-full max-w-2xl relative z-10 md:z-auto"
                  style={{
                    borderLeft: index % 2 !== 0 ? `4px solid ${exp.color}` : 'none',
                    borderRight: index % 2 === 0 ? `4px solid ${exp.color}` : 'none'
                  }}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className={`text-2xl font-bold text-[#1e3a5f] ${exp.status === 'defunct' ? 'opacity-70 italic' : ''}`}>
                        {exp.company}
                      </h3>
                      {exp.note && <div className="text-xs text-gray-500 mt-1">{exp.note}</div>}
                      <div className={`flex items-center gap-2 text-gray-800 text-sm ${index % 2 === 0 ? 'md:justify-end md:w-full' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(exp.period.start)} - {formatDate(exp.period.end)}</span>
                      </div>
                    </div>

                    {/* Company icon - alternates side with existing md:flex-row-reverse */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
                    >
                      {exp.icon && typeof exp.icon === 'object' && exp.icon.type === 'image' ? (
                        <img src={exp.icon.src} alt={exp.icon.alt} className="w-8 h-8 object-contain" loading="lazy" decoding="async" />
                      ) : (
                        <span className="text-2xl">{exp.icon}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 font-medium" style={{ color: exp.color }}>{exp.role}</p>

                  <p className="text-gray-600 mb-4">
                    {truncateText(exp.description, 160)}
                  </p>

                  <div className={`flex flex-wrap gap-2 relative ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="overflow-hidden" style={{ maxHeight: '4.5rem' }}>
                      {exp.highlights.map((h) => (
                        <span key={h} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mr-2 mb-2 inline-block">{h}</span>
                      ))}
                    </div>

                    {/* gradient overlay to indicate there are more badges beyond two lines */}
                    <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white/90" />

                  </div>

                  <div className={`mt-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <button
                      onClick={(e) => { e.stopPropagation(); openDetails(exp); }}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e3a5f] text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/40 cursor-pointer"
                      aria-label={`View details for ${exp.company}`}
                    >
                      View details
                    </button>
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
            </React.Fragment>
          ))}
          {selectedExperience && DetailComponent && (
            <DetailComponent
              experience={selectedExperience}
              onBack={() => setSelectedExperience(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
