import React from 'react';
import { Code2, Database, Cloud, Palette, Smartphone, GitBranch, Server, Terminal, Layers, FileText, Monitor, Users, CheckSquare, Zap, BarChart } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const skillCategories = [
  {
    title: 'Project Management Tools',
    icon: Layers,
    color: '#8b5cf6',
    skills: [
      { name: 'Jira', level: 100 },
      { name: 'Microsoft Project', level: 90 },
      { name: 'Asana', level: 70 },
      { name: 'Trello', level: 50 },
      { name: 'Zenhub', level: 50 },
    ]
  },
  {
    title: 'Collaboration Tools',
    icon: Users,
    color: '#8b5cf6',
    skills: [
      { name: 'Microsoft Teams', level: 100 },
      { name: 'Confluence', level: 100 },
      { name: 'Sharepoint', level: 100 },
      { name: 'Miro', level: 95 },
      { name: 'Mural', level: 90 },
      { name: 'Slack', level: 90 },
    ]
  },
  {
    title: 'AI Tools',
    icon: Zap,
    color: '#ec4899',
    skills: [
      { name: 'Figma make', level: 95 },
      { name: 'Github Copilot', level: 95 },
      { name: 'MS Copilot', level: 85 },
      { name: 'Canva', level: 65 },
      { name: 'base44', level: 50 },
      { name: 'Loveable.dev', level: 50 },
    ]
  },
  {
    title: 'Methodologies & Practices',
    icon: CheckSquare,
    color: '#ec4899',
    skills: [
      { name: 'Agile / Scrum', level: 98 },
      { name: 'Waterfall', level: 75 },
      { name: 'Kanban', level: 50 },
    ]
  },
  {
    title: 'Frontend',
    icon: Code2,
    color: '#1e3a5f',
    skills: [
      { name: 'React / Next.js', level: 100 },
      { name: 'HTML / CSS', level: 100 },
      { name: 'Javascript', level: 100 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Vue.js', level: 80 },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#ff6b6b',
    skills: [
      { name: 'REST APIs', level: 100 },
      { name: 'MS WebAPI', level: 95 },
      { name: 'Nest.js', level: 90 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'GraphQL', level: 35 },
    ]
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    color: '#ff6b6b',
    skills: [
      { name: 'C#', level: 80 },
      { name: 'ASP.Net', level: 80 },
      { name: 'SQL, PL/SQL', level: 80 },
      { name: 'C++', level: 60 },
    ]
  },
  {
    title: 'API Development and Documentation',
    icon: FileText,
    color: '#ff6b6b',
    skills: [
      { name: 'Postman', level: 95 },
      { name: 'Swagger', level: 85 },
      { name: 'SoapUI', level: 80 },
      { name: 'Kong', level: 65 },
    ]
  },
  
  {
    title: 'Microsoft Technologies',
    icon: Monitor,
    color: '#ff6b6b',
    skills: [
      { name: 'PowerApps', level: 80 },
    ]
  },
  {
    title: 'Testing Tools',
    icon: CheckSquare,
    color: '#ff6b6b',
    skills: [
      { name: 'Selenium', level: 80 },
      { name: 'JUnit / NUnit', level: 75 },
      { name: 'Cypress', level: 60 },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    color: '#ff6b6b',
    skills: [
      { name: 'PostgreSQL', level: 95 },
      { name: 'SQL Server', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'Oracle', level: 60 },
      { name: 'MongoDB', level: 50 },
      { name: 'DocumentDB', level: 30 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: '#20c997',
    skills: [
      { name: 'AWS Services', level: 95 },
      { name: 'Azure', level: 95 },
      { name: 'Vercel', level: 95 },
      { name: 'Streamlit', level: 75 },
      { name: 'Render', level: 50 },
      { name: 'Docker / Kubernetes', level: 60 },
    ]
  },
  {
    title: 'Design',
    icon: Palette,
    color: '#f59e0b',
    skills: [
      { name: 'Figma', level: 100 },
      { name: 'Lucidchart', level: 70 },
      { name: 'InVision', level: 50 },
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: '#8b5cf6',
    skills: [
      { name: 'iOS Development', level: 95 },
      { name: 'Android Development', level: 95 },
      { name: 'React Native', level: 90 },
      { name: 'Dart (Flutter)', level: 50 },
    ]
  },
  {
    title: 'CI/CD & Version Control',
    icon: GitBranch,
    color: '#ec4899',
    skills: [
      { name: 'GitHub', level: 100 },
      { name: 'Azure DevOps', level: 90 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'SVN', level: 75 },
      { name: 'Jenkins', level: 75 },     
    ]
  },
  {
    title: 'Analytics & Reporting',
    icon: BarChart,
    color: '#ec4899',
    skills: [
      { name: 'MS PowerBI', level: 95 },
      { name: 'SSMS', level: 90 },
      { name: 'AWS QuickSight', level: 50 },
      { name: 'Google Analytics', level: 25 },
      { name: 'Grafana', level: 25 },
    ]
  }
];

export default function Skills(){
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            // Define a palette of row colors and pick based on the grid row (4 columns per row)
            const rowColors = ['#1e3a5f', '#ff6b6b', '#20c997', '#f59e0b', '#8b5cf6', '#ec4899'];
            const columnsPerRow = 4; // matches `lg:grid-cols-4`
            const rowIndex = Math.floor(categoryIndex / columnsPerRow);
            const displayColor = rowColors[rowIndex % rowColors.length];

            return (
            <div
              key={category.title}
              className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${displayColor}15` }}
                >
                  <category.icon className="w-6 h-6" style={{ color: displayColor }} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f]">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span 
                        className="text-sm font-semibold"
                        style={{ color: displayColor }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${displayColor}, ${displayColor}cc)` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Additional Skills Cloud */}
        <div
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-[#1e3a5f] mb-6">Also familiar with:</h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'WebSockets', 'Redis', 'Elasticsearch', 'D3.js', 
              'Vite', 'Prisma', 'JWT', 'OAuth', 'HeyGen', 'Toad', 'Visual Studio Code', 'Eclipse', 'NetBeans', 'SQL Developer', 'uDeploy', 'SonarQube', 'Fiddler', 'MongoDB', 'VBA', 'Sketch', 'Powershell','JQuery','Keycloak','WordPress',
            ].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium shadow-lg hover:shadow-xl transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
