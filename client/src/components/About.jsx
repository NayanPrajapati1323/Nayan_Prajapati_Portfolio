import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiServer, FiDatabase, FiAward, FiLayers } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        padding: '6rem 0',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Glass Profile Card */}
          <div style={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              style={{
                aspectRatio: '4 / 5',
                maxWidth: '440px',
                margin: '0 auto',
                overflow: 'hidden',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.15)',
                position: 'relative'
              }}
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'contrast(1.05)',
                  transition: 'transform 0.7s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 5, 5, 0.95) 0%, rgba(5, 5, 5, 0.2) 50%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Bottom Card Floating Details */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(10, 10, 15, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '900', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
                    {personal.name}
                  </h4>
                  <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '2px 0 0 0' }}>
                    {personal.title}
                  </p>
                </div>
                <div
                  title="Available for Opportunities"
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981'
                  }}
                />
              </div>
            </motion.div>

            {/* Glowing blur effects */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '180px',
                height: '180px',
                backgroundColor: 'rgba(168, 85, 247, 0.18)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                zIndex: -1
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '180px',
                height: '180px',
                backgroundColor: 'rgba(6, 182, 212, 0.15)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                zIndex: -1
              }}
            />
          </div>

          {/* Right Column: Bio & Core Competencies */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'var(--accent-purple)',
                    marginRight: '1rem',
                    display: 'inline-block'
                  }}
                />
                ABOUT ME
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                  fontWeight: '300'
                }}
              >
                {personal.bio}
              </p>

              {/* Highlights 2-column cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.2rem',
                  marginBottom: '2.5rem'
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <FiServer color="#c084fc" size={18} />
                    <h3 style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c084fc', margin: 0 }}>
                      Backend & REST APIs
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0, lineHeight: 1.6 }}>
                    Laravel, PHP, REST APIs, Authentication, RBAC, Validation & Middleware, Payment Gateways (BillDesk, PayUMoney)
                  </p>
                </div>

                <div
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <FiDatabase color="#22d3ee" size={18} />
                    <h3 style={{ fontSize: '0.82rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22d3ee', margin: 0 }}>
                      Database & Optimization
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0, lineHeight: 1.6 }}>
                    MySQL, Relational Schema Design, Query Optimization (improving response time by up to 20%), Git & Version Control
                  </p>
                </div>
              </div>

              {/* Stats Counters */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '3rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div>
                  <span className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '900', fontStyle: 'italic', display: 'block', lineHeight: 1 }}>
                    1+
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-dim)', marginTop: '4px', display: 'block' }}>
                    Year Experience
                  </span>
                </div>

                <div>
                  <span className="gradient-text-cyan" style={{ fontSize: '2.5rem', fontWeight: '900', fontStyle: 'italic', display: 'block', lineHeight: 1 }}>
                    4+
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-dim)', marginTop: '4px', display: 'block' }}>
                    Core Projects Built
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '2.5rem', fontWeight: '900', fontStyle: 'italic', display: 'block', lineHeight: 1, color: '#fff' }}>
                    8.7
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-dim)', marginTop: '4px', display: 'block' }}>
                    B.Tech CGPA (Silver Oak)
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
