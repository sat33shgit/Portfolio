import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  classic: {
    id: 'classic',
    name: 'Classic Professional',
    description: 'Clean navy & coral design',
    primary: '#1e3a5f',
    secondary: '#ff6b6b',
    accent: '#20c997',
    highlight: '#f59e0b',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    text: '#1e293b',
    textMuted: '#64748b',
    gradient: 'from-[#1e3a5f] to-[#2d5a87]',
    cardBg: 'bg-white',
    sectionAlt: 'bg-gray-50',
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight Aurora',
    description: 'Dark mode with aurora accents',
    primary: '#6366f1',
    secondary: '#ec4899',
    accent: '#22d3ee',
    highlight: '#a855f7',
    background: '#0f172a',
    backgroundAlt: '#1e293b',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    gradient: 'from-[#6366f1] to-[#a855f7]',
    cardBg: 'bg-slate-800',
    sectionAlt: 'bg-slate-900',
  },
  nature: {
    id: 'nature',
    name: 'Nature Organic',
    description: 'Earthy greens & warm tones',
    primary: '#166534',
    secondary: '#ea580c',
    accent: '#65a30d',
    highlight: '#ca8a04',
    background: '#fefce8',
    backgroundAlt: '#f0fdf4',
    text: '#14532d',
    textMuted: '#4d7c0f',
    gradient: 'from-[#166534] to-[#15803d]',
    cardBg: 'bg-white',
    sectionAlt: 'bg-green-50',
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Gradient',
    description: 'Warm oranges & purples',
    primary: '#9333ea',
    secondary: '#f97316',
    accent: '#f43f5e',
    highlight: '#eab308',
    background: '#fffbeb',
    backgroundAlt: '#fef3c7',
    text: '#78350f',
    textMuted: '#a16207',
    gradient: 'from-[#f97316] via-[#f43f5e] to-[#9333ea]',
    cardBg: 'bg-white',
    sectionAlt: 'bg-orange-50',
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean Depths',
    description: 'Deep blues & aqua tones',
    primary: '#0369a1',
    secondary: '#0891b2',
    accent: '#06b6d4',
    highlight: '#14b8a6',
    background: '#f0f9ff',
    backgroundAlt: '#e0f2fe',
    text: '#0c4a6e',
    textMuted: '#0369a1',
    gradient: 'from-[#0369a1] to-[#0891b2]',
    cardBg: 'bg-white',
    sectionAlt: 'bg-sky-50',
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('classic');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && themes[saved]) {
      setCurrentTheme(saved);
    }
  }, []);

  const changeTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
      localStorage.setItem('portfolio-theme', themeId);
    }
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ theme, themes, currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { themes };