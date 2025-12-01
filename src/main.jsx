import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function Root() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      try { history.scrollRestoration = 'manual' } catch (e) { /* ignore */ }
    }
    // Ensure we start at top on initial load / refresh
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
