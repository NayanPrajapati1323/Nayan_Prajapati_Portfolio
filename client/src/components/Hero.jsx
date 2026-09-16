import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiDownload, FiTerminal, FiDatabase, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, orbitIcons } = portfolioData;

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid" style={{ display: 'grid', alignItems: 'center', gap: '3rem' }}>
          
          {/* Left Column: Hero Text & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="pill-badge">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
                {personal.tagline}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                  fontWeight: '900',
                  lineHeight: 1.08,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em'
                }}
              >
                I AM <br />
                <span className="gradient-text" style={{ fontStyle: 'italic' }}>
                  {personal.heroTitle}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '580px',
                fontWeight: '300'
              }}
            >
              Architecting scalable enterprise backends, robust REST APIs, secure payment gateways (BillDesk, PayUMoney), and high-performance MySQL database architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}
            >
              <a href="#projects" className="btn-glow-primary">
                View Work <FiArrowRight />
              </a>
              <a href="#contact" className="btn-glow-outline">
                Say Hello
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-glow-outline"
                style={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
              >
                <FiLinkedin /> LinkedIn
              </a>
            </motion.div>

            {/* Quick Summary Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                <FiCheckCircle color="#10b981" /> <span>1+ Year Experience</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                <FiTerminal color="#a855f7" /> <span>10+ Production APIs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                <FiDatabase color="#06b6d4" /> <span>MySQL Optimization</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Orbit Tech Solar System */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div
              className="orbit-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                aspectRatio: '1 / 1',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none'
              }}
            >
              {/* Radial background glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '10%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 80%)',
                  filter: 'blur(40px)',
                  zIndex: 0
                }}
              />

              {/* Grid circles background */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 1,
                  opacity: 0.35
                }}
              >
                <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
                <circle cx="50%" cy="50%" r="48%" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeDasharray="4 6" />
              </svg>

              {/* Outer Orbit (86%) */}
              <div
                className="animate-orbit-outer"
                style={{
                  position: 'absolute',
                  width: '88%',
                  height: '88%',
                  borderRadius: '50%',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              >
                <div style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'auto' }}>
                  {orbitIcons.outer.map((item, idx) => {
                    const total = orbitIcons.outer.length;
                    const angle = (idx / total) * 2 * Math.PI;
                    const left = 50 + 50 * Math.cos(angle);
                    const top = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={item.name}
                        style={{
                          position: 'absolute',
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="animate-counter-outer">
                          <div
                            title={item.name}
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '14px',
                              background: 'rgba(14, 14, 20, 0.92)',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              padding: '9px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backdropFilter: 'blur(16px)',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.25)';
                              e.currentTarget.style.borderColor = '#06b6d4';
                              e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.7)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
                            }}
                          >
                            <img src={item.icon} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Middle Orbit (64%) */}
              <div
                className="animate-orbit-middle"
                style={{
                  position: 'absolute',
                  width: '64%',
                  height: '64%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(168, 85, 247, 0.35)',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
              >
                <div style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'auto' }}>
                  {orbitIcons.middle.map((item, idx) => {
                    const total = orbitIcons.middle.length;
                    const angle = (idx / total) * 2 * Math.PI + Math.PI / 4;
                    const left = 50 + 50 * Math.cos(angle);
                    const top = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={item.name}
                        style={{
                          position: 'absolute',
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="animate-counter-middle">
                          <div
                            title={item.name}
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '13px',
                              background: 'rgba(14, 14, 20, 0.95)',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              padding: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backdropFilter: 'blur(16px)',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.25)';
                              e.currentTarget.style.borderColor = '#a855f7';
                              e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.7)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
                            }}
                          >
                            <img src={item.icon} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inner Orbit (40%) */}
              <div
                className="animate-orbit-inner"
                style={{
                  position: 'absolute',
                  width: '40%',
                  height: '40%',
                  borderRadius: '50%',
                  border: '1px solid rgba(236, 72, 153, 0.35)',
                  zIndex: 4,
                  pointerEvents: 'none'
                }}
              >
                <div style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'auto' }}>
                  {orbitIcons.inner.map((item, idx) => {
                    const total = orbitIcons.inner.length;
                    const angle = (idx / total) * 2 * Math.PI;
                    const left = 50 + 50 * Math.cos(angle);
                    const top = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={item.name}
                        style={{
                          position: 'absolute',
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="animate-counter-inner">
                          <div
                            title={item.name}
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '12px',
                              background: 'rgba(14, 14, 20, 0.95)',
                              border: '1px solid rgba(236, 72, 153, 0.4)',
                              padding: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backdropFilter: 'blur(16px)',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.25)';
                              e.currentTarget.style.borderColor = '#ec4899';
                              e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.8)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
                              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.7)';
                            }}
                          >
                            <img src={item.icon} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center Hub */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)',
                  boxShadow: '0 0 45px rgba(168, 85, 247, 0.6)',
                  cursor: 'pointer'
                }}
              >
                {/* Rotating Hub Outer Badge Border */}
                <div
                  className="animate-spin-slow"
                  style={{
                    position: 'absolute',
                    inset: '-14px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(168, 85, 247, 0.4)',
                    pointerEvents: 'none'
                  }}
                />

                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#07070b',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.75rem',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.25) 0%, transparent 70%)'
                    }}
                  />
                  
                  {/* Code Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: '28px',
                      height: '28px',
                      fill: 'none',
                      stroke: '#c084fc',
                      strokeWidth: 2,
                      marginBottom: '3px',
                      filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))'
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>

                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: '900',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      letterSpacing: '0.12em',
                      lineHeight: 1
                    }}
                  >
                    CORE DEV
                  </span>
                  <span
                    style={{
                      fontSize: '8px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#a855f7',
                      letterSpacing: '0.08em',
                      marginTop: '3px'
                    }}
                  >
                    PHP · LARAVEL
                  </span>

                  {/* Beacon Ping */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      boxShadow: '0 0 8px #10b981'
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.45,
          cursor: 'pointer',
          zIndex: 20
        }}
        onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#fff' }}>
          Scroll to explore
        </span>
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(to bottom, #fff, transparent)'
          }}
        />
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
