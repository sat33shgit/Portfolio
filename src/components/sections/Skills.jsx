import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Palette, Smartphone, GitBranch } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: '#1e3a5f',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'HTML / CSS / SASS', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    color: '#ff6b6b',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 88 },
      { name: 'GraphQL', level: 82 },
      { name: 'REST APIs', level: 95 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: '#20c997',
    skills: [
      { name: 'AWS Services', level: 85 },
      { name: 'Docker / Kubernetes', level: 80 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Serverless', level: 82 },
      { name: 'Linux Administration', level: 78 },
    ]
  },
  {
    title: 'Design',
    icon: Palette,
    color: '#f59e0b',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Adobe XD', level: 82 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Design Systems', level: 87 },
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: '#8b5cf6',
    skills: [
      { name: 'React Native', level: 88 },
      { name: 'Flutter', level: 75 },
      { name: 'iOS Development', level: 70 },
      { name: 'Android Development', level: 72 },
      { name: 'PWA', level: 90 },
    ]
  },
  {
    title: 'Tools & Others',
    icon: GitBranch,
    color: '#ec4899',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Agile / Scrum', level: 90 },
      { name: 'Testing (Jest, Cypress)', level: 85 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'Technical Writing', level: 82 },
    ]
  }
];

export default function Skills(){
  return (
    <section id="skills" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#ff6b6b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="Skills" 
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-7 h-7" style={{ color: category.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f]">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span 
                        className="text-sm font-semibold"
                        style={{ color: category.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)` 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-[#1e3a5f] mb-6">Also familiar with:</h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'WebSockets', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Nginx',
              'Three.js', 'D3.js', 'Framer Motion', 'Storybook', 'Webpack',
              'Vite', 'Prisma', 'Sequelize', 'JWT', 'OAuth'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
