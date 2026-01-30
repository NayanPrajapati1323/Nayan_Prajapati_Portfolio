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
                Hello! My name is <strong style={{ color: 'var(--text-primary)' }}>Nayan</strong> and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                Fast-forward to today, and I’ve had the privilege of working at an <span className="text-gradient" style={{ fontWeight: 'bold' }}>advertising agency</span>, a <span className="text-gradient" style={{ fontWeight: 'bold' }}>start-up</span>, a <span className="text-gradient" style={{ fontWeight: 'bold' }}>huge corporation</span>, and a <span className="text-gradient" style={{ fontWeight: 'bold' }}>student-led design studio</span>.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
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
