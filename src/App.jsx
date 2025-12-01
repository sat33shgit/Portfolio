import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './components/sections/HomeFixed'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Clients from './components/sections/Clients'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import PersonalSpace from './components/sections/PersonalSpace'
import CountriesTimeline from './components/sections/CountriesTimeline'
import Contact from './components/sections/Contact'

export default function App(){
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('bsk_theme') || 'theme-1' } catch(e){ return 'theme-1' }
  })

  useEffect(()=>{
    document.documentElement.classList.remove('theme-1','theme-2','theme-3','theme-4','theme-5')
    document.documentElement.classList.add(theme)
    try { localStorage.setItem('bsk_theme', theme) } catch(e){}
  },[theme])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const idx = Math.max(0, sections.indexOf(el))
            el.style.setProperty('--delay', `${idx * 80}ms`)
            el.classList.add('reveal')
            obs.unobserve(el)
          }
        })
      }, { threshold: 0.12 }
    )

    sections.forEach(s => { s.classList.add('section'); obs.observe(s) })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header onToggleTheme={setTheme} theme={theme} />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Clients />
        <Skills />
        <Education />
        <PersonalSpace />
        <CountriesTimeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
