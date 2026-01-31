import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Laravel Developer',
      date: '2023 - Present',
      desc: 'Leading a team of developers in building scalable web applications. Implemented CI/CD pipelines and optimized database performance.'
    },
    {
      company: 'Creative Agency',
      role: 'Frontend Developer',
      date: '2021 - 2023',
      desc: 'Developed interactive user interfaces for various clients using React and Greensock. Collaborated closely with designers to ensure pixel-perfect implementation.'
    },
    {
      company: 'StartUp Hub',
      role: 'Junior Web Developer',
      date: '2020 - 2021',
      desc: 'Assisted in the development of the company MVP. Worked on bug fixes and feature enhancements using Node.js and Express.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="title" 
            style={{ textAlign: 'center' }}
        >
            Experience & <span className="text-gradient">Education</span>
        </motion.h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '2px', background: 'var(--border)' }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 50 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring' }}
                style={{ 
                  zIndex: 2,
                  minWidth: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'var(--accent-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 0 0 4px var(--bg-primary)'
                }}
              >
                <FiBriefcase />
              </motion.div>
              
              <motion.div 
                className="glass-card" 
                style={{ padding: '2rem', flex: 1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>
                    <FiCalendar /> {exp.date}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.company}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{exp.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
