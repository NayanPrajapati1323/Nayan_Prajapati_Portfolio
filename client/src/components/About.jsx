import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <div className="flex-center" style={{ justifyContent: 'center', marginBottom: '4rem' }}>
             <h2 className="title">About <span className="text-gradient">Me</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', alignItems: 'center' }} className="about-content">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                Hello! My name is <strong style={{ color: 'var(--text-primary)' }}>Nayan</strong>. I am a dedicated <strong>Laravel PHP Developer</strong> with a passion for building robust, scalable web applications. My journey into development began with a curiosity for how complex systems work, which evolved into a career building enterprise-grade solutions.
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                I have extensive experience working on diverse projects, from <span className="text-gradient" style={{ fontWeight: 'bold' }}>Workforce Management Systems</span> and <span className="text-gradient" style={{ fontWeight: 'bold' }}>E-commerce platforms</span> to <span className="text-gradient" style={{ fontWeight: 'bold' }}>custom Dashboards</span>. I thrive on solving complex backend challenges and optimizing database performance.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                My expertise lies in <strong>Laravel, PHP, MySQL, and Livewire</strong>, but I also enjoy working with modern frontend technologies like React.js to create seamless user experiences. I am always eager to tackle new challenges and deliver high-quality code.
              </p>
            </motion.div>
            
            <motion.div 
               className="about-img-container"
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.6 }}
            >
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 style={{ position: 'relative', width: '100%', maxWidth: '350px', margin: '0 auto' }}
               >
                  <div className="glass-card" style={{ padding: '10px', borderRadius: '16px', transform: 'rotate(3deg)', transition: 'transform 0.3s ease' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Profile" 
                        style={{ width: '100%', borderRadius: '12px', display: 'block', filter: 'grayscale(20%)' }}
                      />
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <style>{`
          @media (max-width: 768px) {
            .about-content { grid-template-columns: 1fr !important; }
            .about-img-container { margin-top: 50px; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
