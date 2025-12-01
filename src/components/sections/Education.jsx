import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    period: { start: new Date('2013-09-01'), end: new Date('2015-06-15') },
    location: 'Stanford, CA',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Deep Learning for Natural Language Processing".',
    achievements: ['GPA: 3.9/4.0', 'Dean\'s List', 'Research Assistant'],
    icon: GraduationCap,
    color: '#1e3a5f'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'MIT',
    period: { start: new Date('2009-09-01'), end: new Date('2013-05-20') },
    location: 'Cambridge, MA',
    description: 'Comprehensive program covering software development, algorithms, and system design.',
    achievements: ['Summa Cum Laude', 'ACM Member', 'Hackathon Winner'],
    icon: BookOpen,
    color: '#ff6b6b'
  }
];

const certifications = [
  { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', date: new Date('2023-03-15'), color: '#f59e0b' },
  { name: 'Google Cloud Professional Developer', issuer: 'Google', date: new Date('2022-11-10'), color: '#20c997' },
  { name: 'Meta React Developer Certificate', issuer: 'Meta', date: new Date('2022-08-22'), color: '#8b5cf6' },
  { name: 'MongoDB Developer Certification', issuer: 'MongoDB', date: new Date('2021-06-05'), color: '#ec4899' },
];


export default function Education(){
  const formatDate = (date) => format(date, 'MMM dd, yyyy');

  return (
    <section id="education" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and professional certifications"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-[#ff6b6b]" />
              Academic Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 border-l-4 hover:border-l-[#ff6b6b] transition-colors"
                style={{ borderLeftColor: edu.color }}
              >
                <div 
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: edu.color }}
                >
                  <edu.icon className="w-3 h-3 text-white" />
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[#1e3a5f]">{edu.degree}</h4>
                      <p className="text-lg" style={{ color: edu.color }}>{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formatDate(edu.period.start)} - {formatDate(edu.period.end)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span 
                        key={achievement}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ 
                          backgroundColor: `${edu.color}10`,
                          color: edu.color
                        }}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-[#20c997]" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-gray-50 rounded-2xl p-6 flex items-center gap-6 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <Award className="w-8 h-8" style={{ color: cert.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1e3a5f] group-hover:text-[#ff6b6b] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-gray-500">{cert.issuer}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Issued: {formatDate(cert.date)}
                    </p>
                  </div>
                  
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cert.color }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Online Courses */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-[#1e3a5f] mb-4">Continuous Learning</h4>
              <p className="text-gray-600 mb-6">
                I believe in lifelong learning. Here are some platforms I use to stay updated:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Coursera', 'Udemy', 'Frontend Masters', 'Pluralsight', 'LinkedIn Learning'].map((platform) => (
                  <span 
                    key={platform}
                    className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}