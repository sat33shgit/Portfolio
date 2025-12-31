import React, { useState } from 'react'
import { FaChevronDown, FaDownload, FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion';

export default function Home() {
  // Colors chosen to match the reference image
  const [theme, setTheme] = useState({
    // deep navy for main headings and primary buttons
    primary: '#0b3553',
    // coral used for stats and highlights
    secondary: '#ff6b6b',
    // mint/green accent used for badges and part of the BSK gradient
    accent: '#10b981',
    background: '#ffffff',
    // muted copy color
    textMuted: '#6b7280'
  })

  // Theme is static for this component; no runtime CSS-var reads required

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* subtle grid background (light lines on white) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          opacity: 0.85
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: theme.accent + '25', color: theme.primary }}>
              Welcome to my portfolio!
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: theme.primary }}>
              Hi, I'm <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${theme.secondary}, ${theme.accent})` }}>SATEESH</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: theme.textMuted }}>
              A passionate <span className="font-semibold" style={{ color: theme.primary }}>Program/Project Manager and Digital Transformation Leader</span> who thrives at the intersection of technology, strategy, and execution.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('#contact')} className="px-6 py-3 rounded-full text-lg font-medium text-white" style={{ backgroundColor: theme.primary }}>
                <FaPaperPlane className="inline mr-2" /> Get in Touch
              </button>
              <a
                href="https://drive.google.com/file/d/13rBQYkf8RaeYYBJBwsDihil9KxaiItq_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-3 rounded-full text-lg font-medium border-2 flex items-center gap-2 inline-flex"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="flex gap-12 mt-12 pt-12 border-t" style={{ borderColor: theme.textMuted + '30' }}>
              {[{ value: '20+', label: 'Years Experience' }, { value: '21+', label: 'Projects Completed' }, { value: '15+', label: 'Clients' }].map((stat, idx) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold" style={{ color: theme.secondary }}>{stat.value}</p>
                  <p style={{ color: theme.textMuted }} className="text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 border-2 border-dashed border-[#60a5fa]/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-dashed border-[#20c997]/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border-2 border-dashed border-[#ff6b6b]/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 border-2 border-dashed border-[#1e3a5f]/30 rounded-full"
              />
              
              {/* Center avatar placeholder */}
              <div className="absolute inset-24 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-5xl text-center font-bold text-white">Sateesh Boggarapu</span>
              </div>

              {/* Floating elements - icons placed by ring (innermost -> outermost). Transparent containers. */}
                {/* Floating icons: each orbits on its ring (parent rotates); icon counter-rotates to stay upright */}

                {/* Outermost ring (-inset-8) -> top icon */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-8"
                >
                  <motion.div
                    // keep orbit handled by parent; let the icon spin faster on its own axis
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 flex items-center justify-center text-2xl pointer-events-none"
                    style={{ transformOrigin: 'center center' }}
                  >
                    {'✏️'}
                  </motion.div>
                </motion.div>

                {/* Center ring (inset-0) -> right icon */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl pointer-events-none"
                  >
                    {'📱'}
                  </motion.div>
                </motion.div>

                {/* Middle ring (inset-8) -> left icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-2xl pointer-events-none"
                  >
                    {'💻'}
                  </motion.div>
                </motion.div>

                {/* Innermost ring (inset-16) -> bottom icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-16"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-12 h-12 flex items-center justify-center text-2xl pointer-events-none"
                    style={{ transformOrigin: 'center center' }}
                  >
                    {'✨'}
                  </motion.div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <button onClick={() => scrollToSection('#about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-label="Scroll to About section" style={{ color: theme.textMuted }}>
        <span className="text-sm font-medium">Scroll Down</span>
        <FaChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
