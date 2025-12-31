import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { format } from 'date-fns';

import nitwIcon from '../../assets/Educations/nitw.png';
import kuIcon from '../../assets/Educations/ku.png';

// Certification icons (place image files under `src/assets/`)
import shopifyIcon from '../../assets/Certifications/shopify.png';
import pmpIcon from '../../assets/Certifications/pmi.png';
import genAiIcon from '../../assets/Certifications/GenAI.png';
import scrumIcon from '../../assets/Certifications/csm.png';
import cspoIcon from '../../assets/Certifications/cspo.png';
import awsIcon from '../../assets/Certifications/aws.png';
import safeIcon from '../../assets/Certifications/SAFe.png';
import cmscert from '../../assets/Certifications/CSM.pdf';
import safecert from '../../assets/Certifications/safe.pdf';

const education = [
  {
    degree: 'Master of Computer Applications',
    school: 'National Institute of Technology(W), India',
    period: { start: new Date('1998-03-01'), end: new Date('2001-03-30') },
    location: 'Warangal, India',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Deep Learning for Natural Language Processing".',
    achievements: ['GPA: 3.9/4.0', 'Dean\'s List', 'Research Assistant'],
    icon: GraduationCap,
    image: nitwIcon,
    color: '#1e3a5f'
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'Kakatiya University, India',
    period: { start: new Date('1995-03-01'), end: new Date('1998-02-20') },
    location: 'Warangal, India',
    description: 'Comprehensive program covering software development, algorithms, and system design.',
    achievements: ['Summa Cum Laude', 'ACM Member', 'Hackathon Winner'],
    icon: BookOpen,
    image: kuIcon,
    color: '#ff6b6b'
  }
];


const certifications = [
  { name: 'Shopify Development Fundamentals', issuer: 'Shopify', date: new Date('2025-11-05'), validThru: new Date('2027-11-06'), credentialId: 'N/A', color: '#ec4899', link: 'https://www.credly.com/badges/53cfcaed-fd68-449d-8829-54690d4d1c83', icon: shopifyIcon },
  { name: 'Project Management Professional', issuer: 'Project Management Institute', date: new Date('2022-06-05'), validThru: new Date('2028-06-05'), credentialId: '3231010', color: '#ec4899', link: 'https://www.credly.com/badges/408d07e5-bd6e-4d12-9d70-35ee122beb2e', icon: pmpIcon },
  { name: 'Generative AI Overview for Project Managers', issuer: 'Project Management Institute', date: new Date('2023-12-23'), validThru: '', credentialId: 'N/A', color: '#ec4899', link: 'https://www.credly.com/badges/6e66ac0e-9765-4014-ae58-9e713c956e84', icon: genAiIcon },
  { name: 'Certified Scrum Master', issuer: 'Scrum Alliance, Inc.', date: new Date('2022-03-15'), validThru: new Date('2026-03-15'), credentialId: '001129431', color: '#f59e0b', link: cmscert, icon: scrumIcon },
  { name: 'Certified Scrum Product Owner', issuer: 'Scrum Alliance, Inc.', date: new Date('2022-03-10'), validThru: new Date('2026-03-10'), credentialId: '1712045', color: '#20c997', link: 'https://bcert.me/bc/html/show-badge.html?b=hwpyfzjz', icon: cspoIcon },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services, Inc.', date: new Date('2024-08-22'), validThru: '', credentialId: 'N/A', color: '#8b5cf6', link: 'https://www.credly.com/badges/82e0e3bf-8670-4644-86d8-73f70020a800', icon: awsIcon },
  { name: 'SAFe4 Certified Practitioner', issuer: 'Scaled Agile, Inc.', date: new Date('2017-06-05'), validThru: '', credentialId: '90618828-3707', color: '#ec4899', link: safecert, icon: safeIcon },
];


export default function Education(){
  const formatDate = (date) => date ? format(date, 'yyyy') : 'N/A';
  const formatCertDate = (date) => date ? format(date, 'MMM-yyyy') : 'N/A';

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
              <div
                key={edu.degree}
                className="relative pl-8 border-l-4 hover:border-l-[#ff6b6b] transition-colors"
                style={{ borderLeftColor: edu.color }}
              >
                <div 
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: edu.color }}
                >
                  <edu.icon className="w-3 h-3 text-white" />
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[#1e3a5f]">
                        {edu.degree}
                        <span className="text-lg font-semibold text-gray-600 ml-3">({formatDate(edu.period.end)})</span>
                      </h4>
                      <p className="text-lg" style={{ color: edu.color }}>{edu.school}</p>
                    </div>

                    <div className="flex items-center">
                      {edu.image ? (
                        <img src={edu.image} alt="Institute icon" className="w-24 h-24 object-contain" loading="lazy" decoding="async" width="96" height="96" />
                      ) : (
                        <edu.icon className="w-10 h-10 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {/* Description and achievements hidden for Academic Education */}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-[#20c997]" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const Card = cert.link ? motion.a : motion.div;
                return (
                  <Card
                    key={cert.name}
                    whileHover={{ x: 10 }}
                    className="bg-gray-50 rounded-2xl p-6 flex items-center gap-6 hover:shadow-lg transition-all group"
                    {...(cert.link ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer', title: `${cert.name} — ${cert.issuer} (opens in new tab)`, 'aria-label': `Open ${cert.name} certification by ${cert.issuer} in a new tab` } : {})}
                  >
                    {cert.icon ? (
                      <img src={cert.icon} alt={`${cert.name} icon`} className="w-20 h-20 object-contain flex-shrink-0" loading="lazy" decoding="async" width="80" height="80" />
                    ) : (
                      <Award className="w-20 h-20 flex-shrink-0" style={{ color: cert.color }} />
                    )}

                    <div className="flex-1">
                      <h4 className="font-bold text-[#1e3a5f] group-hover:text-[#ff6b6b] transition-colors">{cert.name}</h4>
                      <p className="text-gray-500">{cert.issuer}</p>
                      <p className="text-sm text-gray-400 mt-1">
                        <span>Issued: {formatCertDate(cert.date)}</span>
                        <span className="mx-2">&middot;</span>
                        <span>Valid Thru: {formatCertDate(cert.validThru)}</span>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">Credential ID: {cert.credentialId ? cert.credentialId : 'N/A'}</p>
                    </div>

                    {cert.link && (
                      <span className="ml-auto inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-[#1e3a5f]">
                        <span className="hidden sm:inline">View certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Online Courses - Centered Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold text-[#1e3a5f] mb-4">Continuous Learning</h4>
          <p className="text-gray-600 mb-8">
            I believe in lifelong learning. Here are some platforms I use to stay updated:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Coursera', 'Udemy', 'Third Factor', 'Vinh Giang', 'Scrimba', 'Coursera', 'Thinkcloudly', 'Shopify'].map((platform, idx) => (
              <span 
                key={`${platform}-${idx}`}
                className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}