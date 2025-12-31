import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../ThemeContext';
import { format } from 'date-fns';
import MarkdownIt from 'markdown-it';
import createDOMPurify from 'dompurify';

export default function ExperienceDetail({ experience, onBack }) {
  const { theme } = useTheme();

  if (!experience) return null;

  const formatDate = (date) => date ? format(date, 'MMM dd, yyyy') : 'Present';

  const md = new MarkdownIt({ html: false, linkify: true, typographer: true });
  const DOMPurify = typeof window !== 'undefined' ? createDOMPurify(window) : null;

  const renderMarkdown = (text, inline = false) => {
    if (!text) return null;
    const rendered = inline ? md.renderInline(String(text)) : md.render(String(text));
    const clean = DOMPurify ? DOMPurify.sanitize(rendered) : rendered;
    return <span dangerouslySetInnerHTML={{ __html: clean }} />;
  };
  const responsibilities = experience.responsibilities || [
    'Architected and implemented scalable microservices infrastructure serving 1M+ daily users',
    'Led cross-functional team of 8 developers and coordinated with product managers',
    'Established coding standards and conducted code reviews ensuring high-quality deliverables',
    'Optimized database queries reducing response time by 60% and improving user experience',
    'Implemented comprehensive unit and integration testing achieving 90% code coverage',
    'Mentored junior developers through pair programming and technical workshops',
    'Collaborated with UX team to design and implement intuitive user interfaces',
    'Deployed CI/CD pipelines using Docker and Kubernetes for automated deployments'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: theme.background }}
    >
      {/* Header */}
      <div 
        className="sticky top-0 z-10 border-b backdrop-blur-lg"
        style={{ 
          backgroundColor: theme.background + 'f0',
          borderColor: theme.textMuted + '20'
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 cursor-pointer group"
            style={{ color: theme.primary }}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Experience
          </Button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: theme.primary + '15' }}
              >
                {experience.icon ? (
                  typeof experience.icon === 'string' ? (
                    <span className="text-3xl" aria-hidden>{experience.icon}</span>
                  ) : experience.icon.type === 'image' ? (
                    <img src={experience.icon.src} alt={experience.icon.alt} className="w-10 h-10 object-contain" loading="lazy" decoding="async" />
                  ) : (
                    <span className="text-3xl" aria-hidden>{experience.icon}</span>
                  )
                ) : (
                  <Building2 className="w-8 h-8" style={{ color: theme.primary }} />
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2" style={{ color: theme.text }}>
                  {experience.company}
                </h1>
                <p className="text-xl font-medium mb-3" style={{ color: theme.primary }}>
                  {experience.role}
                </p>
                <div className="flex flex-wrap gap-4 text-sm" style={{ color: theme.textMuted }}>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(experience.period.start)} - {formatDate(experience.period.end)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
            Overview
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: theme.textMuted }}>
            {renderMarkdown(experience.description)}
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
            Key Achievements
          </h2>
          <div className="flex flex-wrap gap-3">
            {experience.highlights.map((highlight, index) => (
              <motion.span
                key={highlight}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="px-5 py-3 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: theme.primary + '10', 
                  color: theme.primary 
                }}
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
            Responsibilities
          </h2>
          <div className="space-y-4">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-md cursor-default"
                style={{ backgroundColor: theme.backgroundAlt }}
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: theme.primary }}
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-base flex-1" style={{ color: theme.text }}>
                  {renderMarkdown(responsibility, true)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-12 border-t text-center"
          style={{ borderColor: theme.textMuted + '20' }}
        >
          <Button
            onClick={onBack}
            className="px-8 py-6 rounded-full cursor-pointer group text-white"
            style={{ backgroundColor: theme.primary }}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Experience
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}