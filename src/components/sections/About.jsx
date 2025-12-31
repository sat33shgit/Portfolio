import React from 'react';
// icons unused here; keep imports minimal
import SectionTitle from '../SectionTitle';
import FeatureItem from '../ui/FeatureItem';

// Import the profile image from the project's `src/assets` folder.
// File present at `src/assets/sateesh.jpeg`.
import profileImg from '../../assets/sateesh.jpeg';

const highlights = [
  {
    title: '🧭 Strategic Leadership',
    description: [
      'Oversees multiple projects under a unified program vision',
      'Aligns delivery with business goals, stakeholder priorities, and long-term outcomes',
      'Manages scope, timelines, budgets, and risks across interconnected initiatives'
    ],
    color: '#1e3a5f'
  },
  {
    title: '🛠 Technical Oversight',
    description: [
      'Understands system architecture, cloud platforms, and DevOps practices',
      'Guides technical teams through solution design, integration, and implementation',
      'Bridges gaps between business needs and technical execution'
    ],
    color: '#ff6b6b'
  },
  {
    title: '📊 Governance & Reporting',
    description: [
      'Establishes clear governance frameworks and escalation paths',
      'Tracks KPIs, OKRs, and delivery metrics using tools like Power BI, Jira, and Confluence',
      'Provides executive-level reporting and insights for decision-making'
    ],
    color: '#20c997'
  },
  {
    title: '🤝 Stakeholder Engagement',
    description: [
      'Builds trust with clients, sponsors, and cross-functional teams',
      'Facilitates workshops, demos, and planning sessions to align expectations',
      'Manages vendor relationships and contract deliverables'
    ],
    color: '#f59e0b'
  },
  {
    title: '🚀 Agile Program Delivery',
    description: [
      'Leads Agile, Scrum, and SAFe transformations',
      'Facilitates PI Planning, sprint reviews, and backlog grooming',
      'Improves team velocity, release frequency, and delivery cadence'
    ],
    color: '#1e3a5f'
  },
  {
    title: '🧑\u200d🤝\u200d🧑 Team Leadership & Enablement',
    description: [
      'Mentors project managers, engineers, and junior staff',
      'Promotes collaboration, conflict resolution, and continuous improvement',
      'Designs onboarding programs and training frameworks for scalable growth'
    ],
    color: '#2b6cb0'
  },
  {
    title: '🔐 Compliance & Risk Management',
    description: [
      'Delivers programs aligned with privacy, security, and audit standards',
      'Conducts risk assessments and change board reviews',
      'Ensures readiness for go-live and post-implementation support'
    ],
    color: '#6b46c1'
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better - my journey, passions, and what drives me"
        />

        <div className="grid gap-16">
          <div>
            {/* profile box aligned with the main text; image will stretch to match text height */}
            {/* profile + text in two columns on desktop; text column will occupy half width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
              <div className="w-full relative order-1 lg:order-2">
                <div className="h-full rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="absolute left-2 bottom-2 bg-white rounded-2xl py-2 px-3 sm:p-4 shadow-xl w-54 md:w-54">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="hidden sm:flex w-12 h-12 bg-[#20c997]/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1e3a5f] leading-tight sm:leading-normal">20+</p>
                      <p className="text-gray-500 text-sm mt-0 sm:mt-1">Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-6">
                Program & Delivery Manager & Agile, SAFe, Cloud & AI Solutions Leader
                </h3>
                <p>
                  Hello! I'm Sateesh, an experienced Project/Program Manager and Delivery Leader with 
                  over 20 years of experience in IT program management, digital transformation, and 
                  enterprise solution delivery across public and private sectors. Proven success in 
                  managing multi-million-dollar programs (CAD 6M+), leading Agile, Scrum, and SAFe teams, 
                  and ensuring high-quality delivery within scope, time, and budget. Skilled in stakeholder 
                  management, governance, risk mitigation, and financial oversight, with deep technical 
                  expertise in cloud platforms (AWS, Azure) and DevOps environments.
                </p>
                <p>
                  What sets me apart is how I blend technical know-how, strategic thinking, and 
                  people leadership. I’m hands-on with cloud platforms like AWS and Azure, familiar 
                  with DevOps, and experienced in enterprise delivery.
                </p>
                <p>
                  I believe in continuous learning and pushing the boundaries of what's possible 
                  in web development. I see myself as a servant leader. I build collaborative teams, 
                  coach people to grow, and create spaces where everyone can do their best work.
                </p>
              </div>

            </div>

            {/* Highlights Grid - distributed across the row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const parts = item.title.split(' ');
                const maybeEmoji = parts[0];
                const isEmoji = /[^\w\s]/.test(maybeEmoji);
                const title = isEmoji ? parts.slice(1).join(' ') : item.title;
                const icon = isEmoji ? maybeEmoji : null;

                return (
                  <div key={item.title}>
                    <FeatureItem icon={icon} title={title} bullets={item.description} color={item.color} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}