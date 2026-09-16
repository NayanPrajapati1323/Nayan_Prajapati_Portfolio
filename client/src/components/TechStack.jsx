import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const TechStack = () => {
  const { skills } = portfolioData;

  const allSkills = [
    ...skills.backend,
    ...skills.languages,
    ...skills.database,
    ...skills.versionControlAndTools,
    ...skills.familiar
  ];

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '3.5rem' }}
        >
          <span
            style={{
              width: '40px',
              height: '2px',
              backgroundColor: 'var(--accent-cyan)',
              marginRight: '1rem',
              display: 'inline-block'
            }}
          />
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: '900',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                color: 'var(--accent-cyan)'
              }}
            >
              Pro Skills & Technologies
            </h2>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1.2rem'
          }}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name + index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="glass-card"
              style={{
                padding: '1.2rem 1.4rem',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(6, 182, 212, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div style={{ overflow: 'hidden' }}>
                <h4
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    margin: 0,
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                  }}
                >
                  {skill.name}
                </h4>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
