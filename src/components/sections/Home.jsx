import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaDownload, FaPaperPlane } from 'react-icons/fa'

function readCSSVar(name, fallback = '') {
  try {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name)
    return v ? v.trim() : fallback
  } catch (e) { return fallback }
}

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

  useEffect(() => {
    // ensure the section uses the chosen palette (avoid overriding from CSS vars)
    setTheme({
      primary: '#0b3553',
      secondary: '#ff6b6b',
      accent: '#10b981',
      background: '#ffffff',
      textMuted: '#6b7280'
    })
  }, [])

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
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: theme.accent + '15', color: theme.accent }}>
              Welcome to my portfolio
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
                href="https://drive.google.com/uc?export=download&id=1_DR1TiGp5p-Q5lu9MaUYqcUQW2Mu7uME"
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

          <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="rings" style={{ width: 660, height: 660 }}>
                  <div className="ring ring--3 ring--ccw" />
                  <div className="ring ring--1 ring--cw" />
                  <div className="ring ring--2 ring--ccw" />

                  {/* Orbiting badges placed at equal angular offsets on a shared orbit radius */}
                  <div className="orbit" style={{ ['--start']: '45deg' }}>
                    <div className="orbit-rotater orbit--cw">
                      <div className="orbit-badge" style={{ ['--radius']: '260px' }}>
                        <div className="icon-badge">💻</div>
                      </div>
                    </div>
                  </div>

                  <div className="orbit" style={{ ['--start']: '135deg' }}>
                    <div className="orbit-rotater orbit--ccw">
                      <div className="orbit-badge" style={{ ['--radius']: '260px' }}>
                        <div className="icon-badge">🎨</div>
                      </div>
                    </div>
                  </div>

                  <div className="orbit" style={{ ['--start']: '225deg' }}>
                    <div className="orbit-rotater orbit--cw">
                      <div className="orbit-badge" style={{ ['--radius']: '260px' }}>
                        <div className="icon-badge">🚀</div>
                      </div>
                    </div>
                  </div>

                  <div className="orbit" style={{ ['--start']: '315deg' }}>
                    <div className="orbit-rotater orbit--ccw">
                      <div className="orbit-badge" style={{ ['--radius']: '260px' }}>
                        <div className="icon-badge">⚡</div>
                      </div>
                    </div>
                  </div>

                  {/* Central gradient circle (increased size) */}
                  <div className="central-circle" style={{ width: 320, height: 320, background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}>
                    <span className="text-5xl text-center font-bold">Sateesh Boggarapu</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <button onClick={() => scrollToSection('#about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-label="Scroll to About section" style={{ color: theme.textMuted }}>
        <span className="text-sm font-medium">Scroll Down</span>
        <FaChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
