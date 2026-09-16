import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '3rem 0',
        backgroundColor: '#030306',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem'
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: 'var(--text-dim)',
            margin: 0
          }}
        >
          &copy; {new Date().getFullYear()} {personal.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>

        <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.08em', margin: 0 }}>
          PHP · LARAVEL · MYSQL · REST APIS · SCALABLE ARCHITECTURES
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            marginTop: '1rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)';
            e.currentTarget.style.borderColor = '#a855f7';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
