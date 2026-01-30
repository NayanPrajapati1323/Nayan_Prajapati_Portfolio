import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="glass" 
      style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <motion.a 
            href="#" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-primary)', letterSpacing: '-1px' }}
            whileHover={{ scale: 1.1 }}
        >
          NP<span style={{ color: 'var(--text-primary)' }}>.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <motion.ul 
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
            }}
            style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} 
            className="nav-links"
          >
            {links.map((link) => (
              <motion.li key={link.name} variants={navItem}>
                <a href={link.href} style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '500', position: 'relative' }} className="nav-link">
                  <span style={{ color: 'var(--accent-primary)', marginRight: '5px' }}>0{links.indexOf(link) + 1}.</span> {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme} 
            style={{ background: 'transparent', color: 'var(--text-primary)', fontSize: '1.2rem', padding: '8px', borderRadius: '50%', border: '1px solid var(--border)' }}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
           <button onClick={toggleTheme} style={{ background: 'transparent', color: 'var(--text-primary)', fontSize: '1.2rem', marginRight: '1rem' }}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', color: 'var(--text-primary)', fontSize: '1.5rem' }}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav .nav-links { display: none !important; }
          .desktop-nav button { display: none !important; }
          .mobile-menu-btn { display: flex !important; alignItems: center; }
        }
        .nav-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s;
          position: absolute;
          bottom: -5px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '80px',
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '300px',
              background: 'var(--bg-secondary)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0px 30px -10px rgba(0,0,0,0.1)',
              borderLeft: '1px solid var(--border)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none' }}>
            {links.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '500' }}
                >
                  <span style={{ color: 'var(--accent-primary)' }}>0{index + 1}.</span> {link.name}
                </a>
              </motion.li>
            ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
