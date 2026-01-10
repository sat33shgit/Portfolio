import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';

function readCSSVar(name, fallback = '') {
  try {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name)
    return v ? v.trim() : fallback
  } catch (e) { return fallback }
}

const clients = [
  { id: 5, name: 'BC Ministry of Child and Family Development', industry: 'Child and Family Services', project: 'MCFD Mobile App' },
  { id: 2, name: 'BC Provincial Health Services Authority', industry: 'Healthcare', project: 'Forensic Legal Application Solutions for Healthcare (FLASH)' },
  { id: 6, name: 'BC Ministries of Registries and Online Services', industry: 'Registries and Online Services', project: 'BCROS' },
  { id: 7, name: 'BC Mackenzie Valley Review Board', industry: 'Review Board', project: 'Online Review System (ORS)' },
  { id: 8, name: 'BC Ministry of Education', industry: 'Education', project: 'Independent School Funding System (ISFS)' },
  { id: 1, name: 'BC Ministry of Environment', industry: 'Natural Resources', project: 'Community Energy and Emissions Database' },
  { id: 9, name: 'BC Ministry of Transportation', industry: 'Transportation and Infrastructure', project: 'Passenger Transportation Data Warehouse (PTDW)' },
  { id: 3, name: 'BC Ministry of Health', industry: 'Healthcare', project: 'Foundry' },
  { id: 4, name: 'BC Ministry of Citizen Services', industry: 'Digital Services', project: 'API Program Services' },
  { id: 19, name: 'Barclays, UK', industry: 'Banking', project: 'Colleague Finder' },
  { id: 16, name: 'British Telecom, UK', industry: 'Telecommunications', project: 'SMART' },
  { id: 11, name: 'Citi Bank, Ireland', industry: 'Banking', project: 'CitiDirect BE Tablet (CDT)' },
  { id: 17, name: 'MetaVision Inc., US', industry: 'Metal Industry', project: 'Metavis' },
  { id: 18, name: 'Medimaging Inc., US', industry: 'Medical Imaging', project: 'SISCOM' },
  { id: 10, name: 'Nabors Pvt. Ltd, US', industry: 'Oil and Gas', project: 'SmartDigiPro' },
  { id: 12, name: 'Pfizer Inc., US', industry: 'Pharmaceuticals', project: 'Various mobile applications' },
  { id: 14, name: 'T-Mobile, Germany', industry: 'Telecommunications', project: 'Kundenplege App' },
  { id: 15, name: 'Videojet, UK', industry: 'Industrial Printing', project: 'Crescendo, G4100' },
  { id: 13, name: 'Vodafone, UK', industry: 'Telecommunications', project: 'Colleague Finder' },
];

// (removed duplicatedClients) clients are shown in a responsive grid now

export default function Clients() {
  const [theme, setTheme] = useState({
    primary: '#0b3553',
    secondary: '#ff6b6b',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    text: '#374151',
    textMuted: '#6b7280',
    highlight: '#ff6b6b'
  })

  useEffect(() => {
    setTheme({
      primary: readCSSVar('--heading', '#0b3553'),
      secondary: readCSSVar('--accent', '#ff6b6b'),
      background: readCSSVar('--card', '#ffffff'),
      backgroundAlt: readCSSVar('--muted', '#f8fafc'),
      text: readCSSVar('--text', '#374151'),
      textMuted: readCSSVar('--text-muted', '#6b7280'),
      highlight: readCSSVar('--accent', '#ff6b6b')
    })
  }, [])

  return (
    <section 
      id="clients" 
      className="py-32 relative bg-gray-50 overflow-hidden"
    >
      {/* Plain background - decorative blobs removed to use solid section background */}

      <div className="relative">
          <div className="max-w-6xl mx-auto px-6 mb-16">
          <SectionTitle 
            title="Worked with Clients" 
            subtitle="Building lasting partnerships through exceptional digital experiences"
          />
        </div>

        {/* Stats Row */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '15+', label: 'Happy Clients' },
              { value: '18+', label: 'Projects Delivered' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '10+', label: 'Industries Served' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: theme.primary }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: theme.textMuted }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clients Grid Container */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div 
                    className="rounded-2xl p-4 shadow-lg transition-all duration-300 border hover:shadow-2xl flex flex-col"
                    style={{ 
                      backgroundColor: theme.background,
                      borderColor: theme.textMuted + '15',
                    }}
                  >
                    {/* Header */}
                    <div className="mb-2">
                      <h4 
                        className="font-bold"
                        style={{ color: theme.text }}
                      >
                        {client.name}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: theme.textMuted }}
                      >
                        {client.industry}
                      </p>
                    </div>

                    {/* Project removed per request */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}