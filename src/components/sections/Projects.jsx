import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowRight } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const categories = ['All', 'Web Apps', 'Mobile', 'E-Commerce', 'Dashboard'];

const projects = [
  {
    title: 'CloudSync Dashboard',
    category: 'Dashboard',
    description: 'Real-time analytics dashboard with advanced data visualization and reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    color: '#1e3a5f'
  },
  {
    title: 'ShopEase Platform',
    category: 'E-Commerce',
    description: 'Full-featured e-commerce platform with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    link: '#',
    github: '#',
    color: '#ff6b6b'
  },
  {
    title: 'FitTrack Mobile',
    category: 'Mobile',
    description: 'Cross-platform fitness tracking app with workout plans and progress analytics.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    tech: ['React Native', 'Firebase', 'HealthKit'],
    link: '#',
    github: '#',
    color: '#20c997'
  },
  {
    title: 'TaskFlow Pro',
    category: 'Web Apps',
    description: 'Project management tool with real-time collaboration and Kanban boards.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
    tech: ['Vue.js', 'Socket.io', 'Express', 'Redis'],
    link: '#',
    github: '#',
    color: '#f59e0b'
  },
  {
    title: 'TravelBuddy',
    category: 'Mobile',
    description: 'Travel planning app with itinerary builder and local recommendations.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    tech: ['Flutter', 'Google Maps API', 'Firebase'],
    link: '#',
    github: '#',
    color: '#8b5cf6'
  },
  {
    title: 'FinanceHub',
    category: 'Dashboard',
    description: 'Personal finance management with budget tracking and investment portfolio.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tech: ['React', 'Chart.js', 'Plaid API', 'Node.js'],
    link: '#',
    github: '#',
    color: '#ec4899'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Projects" 
          subtitle="A showcase of my recent work and personal projects"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#1e3a5f] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition-all cursor-pointer transform hover:scale-110"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition-all cursor-pointer transform hover:scale-110"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Category badge */}
                  <span 
                    className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#ff6b6b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated border */}
                <div 
                  className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0"
                  style={{ backgroundColor: project.color }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            type="button"
            onClick={() => { setActiveCategory('All'); setHoveredProject(null); }}
            className="px-8 py-6 rounded-full border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all cursor-pointer group inline-flex items-center justify-center"
            aria-label="View all projects"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}