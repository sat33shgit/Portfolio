import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import Button from '../ui/Button';
import medicalImage from '../../assets/Projects/medicalimage.jpg';
import metalhardness from '../../assets/Projects/metalhardness.jpg';
import btservice from '../../assets/Projects/BT.jpg';
import cresendo from '../../assets/Projects/videojet.jpg';
import tmobile from '../../assets/Projects/tmobile.jpg';
import colleaguefinder from '../../assets/Projects/colleaguefinder.jpg';
import pfizer from '../../assets/Projects/pfizer.jpg';
import citidirect from '../../assets/Projects/citi.jpg';
import oilandgas from '../../assets/Projects/nabors-logo.jpg';
import bctransportation from '../../assets/Projects/bctransportation.jpg';
import bceducation from '../../assets/Projects/bceducation.jpg';
import bcgovsupport from '../../assets/Projects/bcgovsupport.jpg';
import mvrb from '../../assets/Projects/mvrb.jpg';
import bcministry from '../../assets/Projects/bcministry.jpg';
import phsa from '../../assets/Projects/phsa.jpg';
import aichatbot from '../../assets/Projects/aichatbot.jpg';
import sateeshsketches from '../../assets/Projects/sateeshsketches.jpg';
import aitools from '../../assets/Projects/aitools.jpg';

const categories = ['All', 'BC Gov', 'Oil & Gas', 'Enterprise', 'Pharmaceutical', 'Telecom (CRM)', 'Industrial Printer', 'Image Processing', 'POC', 'Personal'];

const projects = [
  {
    title: 'AI - Personal Portfolio',
    category: 'Personal',
    description: 'AI-powered portfolio website highlighting projects, experience, and skills with modern, high-performance web technologies.',
    image: aitools,
    tech: ['react 18', 'vite', 'tailwind', 'PostCSS', 'node.js','express', 'Autoprefixer','lucide-react', 'framer-motion', 'vercel'],
    link: 'https://portfolio-five-eta-w6wr2deloz.vercel.app/',
    github: 'https://github.com/sat33shgit/Portfolio',
    color: '#1e293b'
  },
  {
    title: 'AI - Prompts Book',
    category: 'Personal',
    description: 'AI Prompts Book to save, view and edit the AI prompts which can be used later for various AI tools and platforms.',
    image: aitools,
    tech: ['react', 'lucide-react', 'next.js', 'sonner', 'tailwind', 'vercel'],
    link: 'https://aipromptsbook.vercel.app/',
    github: 'https://github.com/sat33shgit/AIPromptsBook',
    color: '#ef4444'
  },
  {
    title: 'AI - Email Monitoring Agent',
    category: 'Personal',
    description: 'An intelligent email monitoring system that scans Gmail/Yahoo inboxes for keywords and triggers SMS alerts.',
    image: aitools,
    tech: ['Python 3.8+', 'Flask', 'IMAP', 'SMTP', 'Twilio API', 'Google OAuth2', 'Yahoo OAuth2', 'Heroku'],
    link: '#',
    github: 'https://github.com/sat33shgit/Email-Monitoring-Agent',
    color: '#10b981'
  },
  {
    title: 'Sateesh Sketches',
    category: 'Personal',
    description: 'Sateesh Sketches web site is a collection of pencil sketches drawn by me over the years.',
    image: sateeshsketches,
    tech: ['node.js','React', 'PostgreSQL', 'tailwind', 'vite','vercel' ],
    link: 'https://sateeshsketches.com/',
    github: 'https://github.com/sat33shgit/SketchesWebsite',
    color: '#f97316'
  },
  {
    title: 'AI - Audio to Text Converter',
    category: 'Personal',
    description: 'A Hugging Face Spaces-ready app that converts audio files to text using OpenAI Whisper and Gradio.',
    image: aitools,
    tech: ['python 3.8+', 'huggingface', 'gradio', 'openai whisper', 'python-docx'],
    link: 'https://huggingface.co/spaces/SateeshAIWorld/audio-to-text-converter',
    github: 'https://github.com/sat33shgit/Audio-to-text-Cloud',
    color: '#7c3aed'
  },
  {
    title: 'AI - YouTube Audio Extractor',
    category: 'Personal',
    description: 'This project lets you extract audio (MP3) from YouTube videos using a simple web interface, powered by Flask and yt-dlp.',
    image: aitools,
    tech: ['Web App', 'REST API', 'OCR Engine', 'python', 'streamlit'],
    link: 'https://youtube-audio-extractor-d3cg.onrender.com/',
    github: 'https://github.com/sat33shgit/Audio-text-extractor',
    color: '#ec4899'
  },
  {
    title: 'AI - Receipt Scanner',
    category: 'Personal',
    description: 'AI-powered receipt scanner using Google Cloud Vision OCR to extract key data, offered as web app and REST API.',
    image: aitools,
    tech: ['Web App', 'REST API', 'OCR Engine', 'python', 'streamlit'],
    link: 'https://github.com/sat33shgit/ReceiptScannerAIAgent',
    github: 'https://receipt-scanner-ai.streamlit.app/',
    color: '#06b6d4'
  },
  {
    title: 'API Program Services',
    category: 'BC Gov',
    description: 'The API Program Services (APS) platform is a secure, highly available API gateway and management portal.',
    image: bcministry,
    tech: ['node.js', 'Express.js', 'Kong Gateway', 'PostgreSQL', 'Docker', 'Kubernetes', 'Helm Charts', 'GitHub Actions', 'Terraform', 'AWS Cloud'],
    link: '#',
    github: '#',
    color: '#3b82f6'
  },
  {
    title: 'AI Chatbot',
    category: 'POC',
    description: 'Market research project under CoE exploring AI tools, functionality, and generative chatbot feasibility using public data.',
    image: aichatbot,
    tech: ['Web Chat Widget', 'HTML/CSS', 'JavaScript', 'WebChat Endpoint', 'Flutter', 'Dart', 'Widgets/Packages', 'Azure Backend', 'Azure OpenAI', 'Azure Co-Pilot', 'Direct Line API'],
    link: '#',
    github: '#',
    color: '#8b5cf6'
  },
  {
    title: 'Forensic Legal Application Solution for Healthcare',
    category: 'BC Gov',
    description: 'FLASH is a web-based system for BC Mental Health to document forensic patient legal requirements.',
    image: phsa,
    tech: ['Typescript', 'Terraform','Material UI', 'NestJS', 'TypeORM', 'Figma', 'AWS Aurora', 'Tiptap', 'Azure AD', 'Github', 'Puppeter', 'AWS Cloud', 'AWS Cloudfront', 'Jira', 'Confluence'],
    link: '#',
    github: '#',
    color: '#f59e0b'
  },
  {
    title: 'MCFD Mobile App',
    category: 'BC Gov',
    description: 'iPad solution for child protection workers, enabling secure offline access, notes, and case updates.',
    image: bcministry,
    tech: ['iOS', 'Android', 'ICM (Backend)'],
    link: '#',
    github: '#',
    color: '#0ea5e9'
  },
  {
    title: 'Community Energy and Emissions Database (CEED)',
    category: 'BC Gov',
    description: 'CEED enable evidence-based climate action policies, programs, and investments across B.C',
    image: bcministry,
    tech: ['D365', 'PowerApps', 'Model-Driven Apps', 'Power Automate', 'Common Data Service', 'Workflows/Business Rules', 'Unified Interface', 'Customer Voice', 'XRMToolBox', 'Microsoft Dataverse', 'SSRS', 'SQL Server', 'C#', 'Javascript', 'Azure Cloud', 'Azure DevOps'],
    link: '#',
    github: '#',
    color: '#14b8a6'
  },
  {
    title: 'BCROS',
    category: 'BC Gov',
    description: 'Online Review System which provides everyone an opportunity to participate in the Boards\' public review process.',
    image: bcministry,
    tech: ['Postgres DB', 'Python', 'Flask API', 'Github', 'Zenhub', 'Github Actions', 'Invision', 'Miro', 'Mural', 'BC Gov Openshift', 'Vue.js', 'NATS', 'Kubernetes Cron', 'KeyCloak', 'Sentry', 'Prometheus', '1password'],
    link: '#',
    github: '#',
    color: '#a78bfa'
  },
  {
    title: 'Online Review System',
    category: 'MVRB',
    description: 'Online Review System which provides everyone an opportunity to participate in the Boards\' public review process.',
    image: mvrb,
    tech: ['Typescript', 'Gatsby', 'MaterialUI', 'React', 'Lerna', 'NestJS', 'TypeORM', 'Linter', 'Cypress', 'React Testing Library', 'Jest', 'Azure', 'SQLServer', 'Keycloak', 'Azure App Insights', 'Sendgrid'],
    link: '#',
    github: '#',
    color: '#fb7185'
  },
  {
    title: 'Foundry',
    category: 'BC Gov',
    description: 'Foundry provides free, confidential mental health, healthcare, and social services in accessible, youth-friendly spaces.',
    image: bcgovsupport,
    tech: ['D365', 'PowerApps', 'Model-Driven Apps', 'Power Automate', 'Common Data Service', 'Workflows/Business Rules', 'Unified Interface', 'SSRS', 'SQL Server', 'C#', 'Javascript', 'Azure Cloud', 'Jira', 'Confluence', 'Azure AD'],
    link: '#',
    github: '#',
    color: '#e11d48'
  },
  {
    title: 'Independent School Funding System',
    category: 'BC Gov',
    description: 'Independent School Funding System (ISFS) helps in managing the grants for the funds for the qualifying schools in BC, Canada.',
    image: bceducation,
    tech: ['D365', 'PowerApps', 'Model-Driven Apps', 'Power Automate', 'Common Data Service', 'Workflows/Business Rules', 'Unified Interface', 'SSRS', 'SQL Server', 'C#', 'Javascript', 'Azure Cloud', 'Jira', 'Confluence', 'Azure AD'],
    link: '#',
    github: '#',
    color: '#0f766e'
  },
  {
    title: 'Passenger Transportation Data Warehouse (PTDW)',
    category: 'BC Gov',
    description: 'The PTDW solution provides a means for uploading of trip data via web app and APIs',
    image: bctransportation,
    tech: ['ASP.Net', 'C#', 'VS2017', 'Jira', 'SQL Server 2017', 'Hangfire (Jobs)', 'Jenkins', 'HTML/CSS', 'Web API', 'JavaScript', 'SonarQube', 'Swagger', 'Confluence', 'Power BI', 'Disciplined Agile','SSDT', 'Entity Framework', 'REST', 'JWT', 'SVN'],
    link: '#',
    github: '#',
    color: '#7dd3fc'
  },
  {
    title: 'SmartDigiPro (SDP)',
    category: 'Oil & Gas',
    description: 'SDP is a workflow solution for Nabors, enabling requests and progress tracking across all devices.',
    image: oilandgas,
    tech: ['HTML5', 'CSS3', 'Angular JS', 'bootstrap', 'JavaScript','KendoUI', 'TFS', 'Azure Cloud', 'Postman', 'VS2015', 'WebAPI', 'WCF', 'DocumentDB'],
    link: '#',
    github: '#',
    color: '#c084fc'
  },
  {
    title: 'CitiDirect BE Tablet',
    category: 'Enterprise',
    description: '“CitiDirect BE Tablet hybrid app provides secure, mobile access to mission‑critical financial data for institutions.',
    image: citidirect,
    tech: ['iOS', 'Android', 'Windows', 'Enterprise Architect', 'uDeploy', 'Team City', 'SoupUI', 'Jira', 'HTML5', 'Java', 'CSS3', 'Backbone', 'Github', 'MS Visio', 'MPP'],
    link: '#',
    github: '#',
    color: '#fb923c'
  },
  {
    title: 'Pfizer Mobile Apps',
    category: 'Pharmaceutical',
    description: 'Native iOS/Android apps supporting treatment progress with features for cessation, sleep, vaccination, and tracking.',
    image: pfizer,
    tech: ['iOS', 'Android', 'Jira', 'Github', 'MS Visio', 'MPP'],
    link: '#',
    github: '#',
    color: '#60a5fa'
  },
  {
    title: 'Colleague Finder',
    category: 'Enterprise',
    description: 'Colleague Finder is an enterprise app enabling employee search, profile viewing, and communication via email, calls, SMS.',
    image: colleaguefinder,
    tech: ['iOS', 'Android', 'Windows7', 'WebOS', 'VS2008', 'Linux', 'VSS', 'MS Visio', 'MPP'],
    link: '#',
    github: '#',
    color: '#1e3a5f'
  },
  {
    title: 'Kundenplege (KPF), Neugashaft (NG), CCAppServer',
    category: 'Telecom (CRM)',
    description: 'KPF and NG are T‑Mobile Germany apps for managing contracts, SIM changes, and card services.',
    image: tmobile,
    tech: ['VC++(MFC)', 'VS2008', ' Clear Case', 'MPP', 'Rational Rose', 'SQL Server', 'DDTS', 'Oracle 9i', 'SQL Developer','Putty', 'Unix'],
    link: '#',
    github: '#',
    color: '#ff6b6b'
  },
  {
    title: 'Crescendo, G4100 ',
    category: 'Industrial Printer',
    description: 'G4100 and Crescendo printer controllers enable job creation, with Crescendo adding enhanced GUI and wider support.',
    image: cresendo,
    tech: ['VC++(MFC)', ' VS2005', 'SQL Server', 'VSS'],
    link: '#',
    github: '#',
    color: '#20c997'
  },
  {
    title: 'SMART',
    category: 'Telecom (CRM)',
    description: '“SMART is a Windows-based system automating BT’s service, sales, repairs, and marketing across 10,000 desktops.',
    image: btservice,
    tech: ['VC++ (MFC)', 'VS2005', ' Oracle 9i', 'CSS (Mainframe)','Toad', 'PVCS', 'MPP'],
    link: '#',
    github: '#',
    color: '#f59e0b'
  },
  {
    title: 'MetaVis',
    category: 'Image Processing',
    description: 'MetaVis analyzes microscope or scanned images to measure metal hardness, including calibration and microhardness values.',
    image: metalhardness,
    tech: ['VC++ / C++', 'MS Access', 'Install Shield', 'VTK / ITK'],
    link: '#',
    github: '#',
    color: '#8b5cf6'
  },
  {
    title: 'SISCOM',
    category: 'Image Processing',
    description: 'SISCOM uses brain blood flow changes during seizures to pinpoint the seizure focus through MRI and SPECT imaging.',
    image: medicalImage,
    tech: ['VC++ / C++', 'VB', 'MySQL', 'VTK / ITK'],
    link: '',
    github: '',
    color: '#ec4899'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Projects" 
          subtitle="A showcase of my professional projects and personal projects"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              {category}
            </Button>
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
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width="800"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition-all cursor-pointer transform hover:scale-110"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition-all cursor-pointer transform hover:scale-110"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
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
                  <p className="text-gray-600 mb-4 line-clamp-2 md:line-clamp-3">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={`${tech}-${i}`}
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
          <Button
            type="button"
            onClick={() => setActiveCategory('All')}
            variant="outline"
            size="lg"
            className="px-8 py-6 inline-flex items-center"
            aria-label="View all projects"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}