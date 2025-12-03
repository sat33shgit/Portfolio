import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import Button from '../ui/Button';
import medicalImage from '../../assets/Projects/medicalimage.jpg';
import metalhardness from '../../assets/Projects/metalhardness.jpg';
import btservice from '../../assets/Projects/btservice.jpg';
import cresendo from '../../assets/Projects/cresendo.jpg';
import tmobile from '../../assets/Projects/tmobile.jpg';
import colleaguefinder from '../../assets/Projects/colleaguefinder.jpg';
import pfizer from '../../assets/Projects/pfizer.jpg';
import citidirect from '../../assets/Projects/citidirect.jpg';
import oilandgas from '../../assets/Projects/oilandgas.jpg';
import bctransportation from '../../assets/Projects/bctransportation.jpg';
import bceducation from '../../assets/Projects/bceducation.jpg';
import bcgovsupport from '../../assets/Projects/bcgovsupport.jpg';
import mvrb from '../../assets/Projects/mvrb.jpg';
import bcministry from '../../assets/Projects/bcministry.jpg';
import phsa from '../../assets/Projects/phsa.jpg';
import aichatbot from '../../assets/Projects/aichatbot.jpg';
import sateeshsketches from '../../assets/Projects/sateeshsketches.jpg';
import aitools from '../../assets/Projects/aitools.jpg';

const categories = ['All', 'BC Gov', 'Federal Gov', 'Oil & Gas', 'Enterprise','Pharmaceutical','Telecom (CRM)','Industrial Printer', 'Image Processing', 'POC', 'Personal'];

const projects = [
  {
    title: 'Personal Portfolio Website',
    category: 'Personal',
    description: 'An AI-powered personal portfolio website showcasing my projects, experience, and skills, built with modern web technologies for optimal performance and user experience.',
    image: aitools,
    tech: ['react', 'lucide-react', 'framer-motion','next.js', 'sonner', 'sonner', 'tailwind', 'vercel'],
    link: 'https://portfolio-five-eta-w6wr2deloz.vercel.app/',
    github: 'https://github.com/sat33shgit/Portfolio',
    color: '#1e293b'
  },
  {
    title: 'AI Prompt Book',
    category: 'Personal',
    description: 'AI Prompts Book to save, view and edit the AI prompts which can be used later for various AI tools and platforms.',
    image: aitools,
    tech: ['react', 'lucide-react', 'next.js', 'sonner', 'sonner', 'tailwind', 'vercel', 'vercel progress'],
    link: 'https://aipromptsbook.vercel.app/',
    github: 'https://github.com/sat33shgit/AIPromptsBook',
    color: '#ef4444'
  },
  {
    title: 'Email Monitoring AI Agent',
    category: 'Personal',
    description: 'An intelligent email monitoring system that watches your Gmail/Yahoo inbox for specific keywords and sends SMS notifications when matches are found.',
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
    tech: ['node.js', 'Express.js', 'Kong Gateway', 'PostgreSQL', 'Docker', 'Kubernetes', 'Helm Charts', 'GitHub Actions', 'Terraform', 'AWS Cloud'],
    link: 'https://sateeshsketches.com/',
    github: 'https://github.com/sat33shgit/SketchesWebsite',
    color: '#f97316'
  },
  {
    title: 'AI - Audio to Text Converter',
    category: 'Personal',
    description: 'A Hugging Face Spaces-ready app that converts audio files to text using OpenAI Whisper and Gradio.',
    image: aitools,
    tech: ['python', 'huggingface', 'gradio', 'openai whisper'],
    link: 'https://huggingface.co/spaces/SateeshAIWorld/audio-to-text-converter',
    github: 'https://github.com/sat33shgit/Audio-to-text-Cloud',
    color: '#7c3aed'
  },
  {
    title: 'AI YouTube Audio Extractor',
    category: 'Personal',
    description: 'This project lets you extract audio (MP3) from YouTube videos using a simple web interface, powered by Flask and yt-dlp.',
    image: aitools,
    tech: ['Web App', 'REST API', 'OCR Engine', 'python', 'streamlit'],
    link: 'https://youtube-audio-extractor-d3cg.onrender.com/',
    github: 'https://github.com/sat33shgit/Audio-text-extractor',
    color: '#ec4899'
  },
  {
    title: 'AI Receipt Scanner',
    category: 'Personal',
    description: 'An AI-powered receipt scanner that extracts key information from receipt images using Google Cloud Vision OCR. Available as both a web application and REST API for integration with other applications.',
    image: aitools,
    tech: ['Web App', 'REST API', 'OCR Engine', 'python', 'streamlit'],
    link: 'https://github.com/sat33shgit/ReceiptScannerAIAgent',
    github: 'https://receipt-scanner-ai.streamlit.app/',
    color: '#06b6d4'
  },
  {
    title: 'API Program Services',
    category: 'BC Gov',
    description: 'The API Program Services (APS) platform is a secure, stable, highly-available API gateway, management portal and directory that handles more than 2.6 billion API requests per year.',
    image: bcministry,
    tech: ['node.js', 'Express.js', 'Kong Gateway', 'PostgreSQL', 'Docker', 'Kubernetes', 'Helm Charts', 'GitHub Actions', 'Terraform', 'AWS Cloud'],
    link: '#',
    github: '#',
    color: '#3b82f6'
  },
  {
    title: 'AI Chatbot',
    category: 'POC',
    description: 'Project was created as part of the CoE to do market research on currently available AI tools, learn about available functionality, models, and see if we could create a generative AI chatbot that produced answers based (indexed/scraped) publicly available content.',
    image: aichatbot,
    tech: ['Web Chat Widget', 'HTML', 'CSS', 'JavaScript', 'WebChat Endpoint', 'Flutter Module (for iOS and Android)', 'Dart', 'Flutter SDK', 'Widgets/Packages', 'Azure Backend', 'Azure OpenAI', 'Azure Co-Pilot', 'Model with Indexed/Scraped content', 'Direct Line API'],
    link: '#',
    github: '#',
    color: '#8b5cf6'
  },
  {
    title: 'Forensic Legal Application Solution for Healthcare',
    category: 'BC Gov',
    description: 'FLASH (Forensic Legal Application Solution for Healthcare) is a web‑based system designed for BC Mental Health and Substance Use Services to document and meet legal requirements for forensic patients.',
    image: phsa,
    tech: ['Typescript', 'Terraform', 'Next.js(React)', 'Material UI (MUI)', 'NestJS', 'TypeORM', 'Figma', 'AWS Aurora', 'Tiptap', 'Azure AD', 'Github', 'Puppeter', 'AWS Cloud', 'AWS Cloudfront (CDK)', 'Jira', 'Confluence'],
    link: '#',
    github: '#',
    color: '#f59e0b'
  },
  {
    title: 'MCFD Mobile App',
    category: 'BC Gov',
    description: 'iPad mobility solution for child protection case workers at the Ministry of Children and Family Development, enabling secure offline access, note management, and case updates.',
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
    category: 'Federal Gov',
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
    description: 'Foundry offers free, confidential services like mental health and substance use support, physical and sexual healthcare, and connection to social services in one accessible, youth-friendly space.',
    image: bcgovsupport,
    tech: ['D365', 'PowerApps', 'Model-Driven Apps', 'Power Automate', 'Common Data Service', 'Workflows/Business Rules', 'Unified Interface', 'SSRS', 'SQL Server', 'C#', 'Javascript', 'Azure Cloud', 'Jira', 'Confluence', 'Azure AD for authentication (IDIR)'],
    link: '#',
    github: '#',
    color: '#e11d48'
  },
  {
    title: 'Independent School Funding System',
    category: 'BC Gov',
    description: 'Independent School Funding System (ISFS) helps in managing the grants for the funds for the qualifying schools in British Columbia, Canada.',
    image: bceducation,
    tech: ['D365', 'PowerApps', 'Model-Driven Apps', 'Power Automate', 'Common Data Service', 'Workflows/Business Rules', 'Unified Interface', 'SSRS', 'SQL Server', 'C#', 'Javascript', 'Azure Cloud', 'Jira', 'Confluence', 'Azure AD for authentication (IDIR)'],
    link: '#',
    github: '#',
    color: '#0f766e'
  },
  {
    title: 'Passenger Transportation Data Warehouse',
    category: 'BC Gov',
    description: 'The Passenger Transportation Data Warehouse (PTDW) solution and provides a means for uploading of trip data via web app and APIs',
    image: bctransportation,
    tech: ['ASP. Net', 'C#', 'VS 2017', 'Jira', 'SQL Server 2017', 'Hangfire (Jobs)', 'Jenkins', 'HTML/CSS', 'Web API', 'JavaScript', 'SonarQube', 'Swagger', 'Confluence', 'Power BI', 'Disciplined Agile','SSDT', 'Entity Framework', 'REST', 'JWT', 'SVN'],
    link: '#',
    github: '#',
    color: '#7dd3fc'
  },
  {
    title: 'SmartDigiPro',
    category: 'Oil & Gas',
    description: 'SmartDigiPro (SDP) is a workflow management solution for Nabors employees, enabling request creation and progress tracking across desktop, mobile, and tablet devices.',
    image: oilandgas,
    tech: ['HTML5', 'CSS3', 'Angular JS', 'bootstrap', 'JavaScript','KendoUI', 'TFS', 'Azure Cloud', 'Postman', 'VS 2015', 'WebAPI', 'WCF', 'DocumentDB'],
    link: '#',
    github: '#',
    color: '#c084fc'
  },
  {
    title: 'CitiDirect BE Tablet',
    category: 'Enterprise',
    description: 'CitiDirect BE Tablet is a hybrid app for iOS, Android, and Windows tablets, giving senior institutional users secure, on‑the‑go access to mission‑critical financial data.',
    image: citidirect,
    tech: ['iOS', 'Android', 'Windows', 'Enterprise Architect', 'uDeploy', 'Team City', 'SoupUI', 'Jira', 'HTML5', 'Java', 'CSS3', 'Backbone', 'Github', 'MS Visio', 'MPP'],
    link: '#',
    github: '#',
    color: '#fb923c'
  },
  {
    title: 'Pfizer Mobile Apps',
    category: 'Pharmaceutical',
    description: 'HemMobile, Smart Labels, SleepHelp, Genotropin, Vaximate, and Acrotracker are native iOS/Android apps designed to support treatment progress, offering features like smoking cessation, sleep disorder management, and vaccination scheduling.',
    image: pfizer,
    tech: ['iOS', 'Android', 'Jira', 'Github', 'MS Visio', 'MPP'],
    link: '#',
    github: '#',
    color: '#60a5fa'
  },
  {
    title: 'Colleague Finder',
    category: 'Enterprise',
    description: 'Colleague Finder is an enterprise app enabling employee search, profile viewing, and communication via email, calls, SMS, and notifications.',
    image: colleaguefinder,
    tech: ['iOS', 'Android', 'Windows7', 'WebOS', 'VS 2008', 'Linux', 'VSS', 'MS Visio', 'MPP'],
    link: '#',
    github: '#',
    color: '#1e3a5f'
  },
  {
    title: 'Kundenplege, Neugashaft, CCAppServer',
    category: 'Telecom (CRM)',
    description: 'Kundenpflege (KPF) and Neugashaft (NG) are T‑Mobile Germany’s customer care applications for managing and creating mobile contracts, SIM changes, and card services.',
    image: tmobile,
    tech: ['VC++(MFC)', 'VS 2008', ' Clear Case', 'MPP', 'Rational Rose', 'SQL Server', 'DDTS', 'Oracle 9i', 'SQL Developer','Putty', 'Unix'],
    link: '#',
    github: '#',
    color: '#ff6b6b'
  },
  {
    title: 'Crescendo, G4100 ',
    category: 'Industrial Printer',
    description: 'G4100 and Crescendo are printer controller applications designed for job creation and printing, with Crescendo offering enhanced GUI and broader printer support including BX6500, BX6600, and HP Imager.',
    image: cresendo,
    tech: ['VC++(MFC)', ' VS 2005', 'SQL Server', 'VSS'],
    link: '#',
    github: '#',
    color: '#20c997'
  },
  {
    title: 'SMART',
    category: 'Telecom (CRM)',
    description: 'SMART is a large-scale Windows-based application that automates BT’s customer service, sales, and repair processes while supporting marketing and revenue generation across 10,000 desktops.',
    image: btservice,
    tech: ['VC++ (MFC)', 'VS 2005', ' Oracle 9i', 'CSS (Mainframe)','Toad', 'PVCS', 'MPP'],
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
  const [hoveredProject, setHoveredProject] = useState(null);

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
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
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
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
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
            onClick={() => { setActiveCategory('All'); setHoveredProject(null); }}
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