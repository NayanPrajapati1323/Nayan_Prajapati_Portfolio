import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 90,
          padding: isScrolled ? '1rem 0' : '1.5rem 0',
          transition: 'all 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="#home"
            style={{
              textDecoration: 'none',
              fontSize: '1.4rem',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <span style={{ color: 'var(--accent-purple)', fontStyle: 'italic' }}>N</span>
            ayan
            <span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-nav"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                      transition: 'color 0.25s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)')
                    }
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={{
                          position: 'absolute',
                          bottom: '-6px',
                          left: '0',
                          right: '0',
                          height: '2px',
                          background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href="#contact"
                className="btn-glow-outline"
                style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
              >
                Contact Me <FiArrowUpRight />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '0.6rem',
              color: '#fff',
              fontSize: '1.4rem',
              display: 'none',
              cursor: 'pointer'
            }}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '360px',
              backgroundColor: '#0a0a0f',
              zIndex: 100,
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase' }}>
                  <span style={{ color: 'var(--accent-purple)', fontStyle: 'italic' }}>N</span>ayan<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    cursor: 'pointer'
                  }}
                >
                  <FiX />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      fontStyle: 'italic',
                      color: activeSection === link.id ? '#c084fc' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'normal' }}>0{idx + 1}</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-glow-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Get In Touch
              </a>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                {portfolioData.personal.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
