import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import Logo from './Logo';

const sitemapSections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
    ]
  },
  {
    title: 'More',
    links: [
      { label: 'Skills', href: '#skills' },
      { label: 'Education', href: '#education' },
      { label: 'Personal Space', href: '#personal' },
      { label: 'Countries', href: '#countries' },
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
      { label: 'GitHub', href: 'https://github.com', external: true },
      { label: 'Twitter', href: 'https://twitter.com', external: true },
    ]
  }
];

export default function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-3 inline-block mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Mail, href: 'mailto:hello@bsk.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-[#ff6b6b] transition-all duration-300 cursor-pointer hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          {sitemapSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-6 text-[#20c997]">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer inline-block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#ff6b6b] fill-[#ff6b6b]" /> by BSK © {new Date().getFullYear()}
          </p>
          <p className="text-gray-400 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}