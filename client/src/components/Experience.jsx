import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCheck, FiCalendar, FiMapPin, FiGitCommit } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience" style={{ padding: '6rem 0', backgroundColor: '#07070b', position: 'relative' }}>
      <div className="container">
        
        {/* Work Experience Section */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}
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
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: '900',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                color: '#ffffff'
              }}
            >
              Work Experience
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  borderRadius: '28px',
                  border: '2px solid rgba(168, 85, 247, 0.35)',
                  backgroundColor: 'rgba(168, 85, 247, 0.04)',
                  boxShadow: '0 0 35px rgba(168, 85, 247, 0.1)'
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          fontStyle: 'italic',
                          color: '#ffffff',
                          margin: 0
                        }}
                      >
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span
                          style={{
                            padding: '0.25rem 0.8rem',
                            borderRadius: '9999px',
                            backgroundColor: '#a855f7',
                            color: '#ffffff',
                            fontSize: '0.72rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)'
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        color: 'var(--accent-purple)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginTop: '0.4rem',
                        marginBottom: 0
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div
                    style={{
                      padding: '0.4rem 1.2rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FiCalendar size={14} color="#22d3ee" />
                    {exp.period}
                  </div>
                </div>

                {/* Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.8rem' }}>
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                      <div
                        style={{
                          marginTop: '4px',
                          minWidth: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(168, 85, 247, 0.18)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <FiCheck color="#c084fc" size={12} />
                      </div>
                      <p style={{ fontSize: '0.96rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0, lineHeight: 1.65 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.35rem 0.8rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}
          >
            <span
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: 'var(--accent-pink)',
                marginRight: '1rem',
                display: 'inline-block'
              }}
            />
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: '900',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                color: '#ffffff'
              }}
            >
              Education
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card"
                style={{
                  padding: '2.2rem',
                  borderRadius: '24px',
                  border: '1px solid rgba(236, 72, 153, 0.25)',
                  backgroundColor: 'rgba(236, 72, 153, 0.03)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        fontStyle: 'italic',
                        color: '#ffffff',
                        marginBottom: '0.4rem'
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        color: 'var(--accent-pink)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        margin: 0
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>

                  <span
                    style={{
                      padding: '0.35rem 0.9rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(236, 72, 153, 0.15)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      color: '#f472b6',
                      fontWeight: '800',
                      fontSize: '0.85rem'
                    }}
                  >
                    {edu.score}
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '1rem'
                  }}
                >
                  Graduated {edu.year}
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
