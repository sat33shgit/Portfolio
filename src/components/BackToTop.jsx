import React, { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > window.innerHeight) }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top:0, behavior:'smooth'})}
      className="fixed right-6 bottom-6 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-2xl transform-gpu hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-offset-2"
      style={{
        /* gradient approximating the attached shade: deep navy -> muted coral */
        background: 'linear-gradient(135deg, #24334a 0%, #a85a61 60%, #c86b6b 100%)',
        color: 'white'
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
