import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
        const interval = setInterval(() => {
            setDisplayText(text.substring(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{displayText}</span>;
}

const Hero = () => {
    const controls = useAnimation();
    
    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        }));
    }, [controls]);

  const socialLinks = [
    { icon: <FiGithub />, href: '#' },
    { icon: <FiLinkedin />, href: '#' },
    { icon: <FiMail />, href: 'mailto:info.nayan1323@gmail.com' },
  ];

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', justifyContent: 'center', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorative Circles */}
      <motion.div 
         animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
         }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', opacity: 0.1, zIndex: -1 }}
      />
       <motion.div 
         animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
         }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         style={{ position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', opacity: 0.1, zIndex: -1 }}
      />


      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ 
              width: '180px', 
              height: '180px', 
              margin: '0 auto 2.5rem', 
              borderRadius: '50%', 
              padding: '6px',
              background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
              position: 'relative',
              boxShadow: '0 0 30px rgba(79, 70, 229, 0.4)'
            }}
          >
             <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'var(--bg-primary)' }}>
                <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nayan&backgroundColor=b6e3f4" 
                    alt="Avatar" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
              <span className="text-gradient" style={{ fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontSize: '1.1rem' }}>
                <Typewriter text="Welcome to my portfolio" delay={500} />
              </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '1rem', letterSpacing: '-2px', lineHeight: '1', fontWeight: '800' }}
          >
            Hi, I'm Nayan.
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontWeight: '500' }}
          >
            Building digital <span className="text-gradient" style={{ fontWeight: '800' }}>masterpieces</span>.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              View My Work <FiArrowRight />
            </motion.a>
            <motion.a 
                href="/resume.pdf" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Resume
            </motion.a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             style={{ marginTop: '5rem', display: 'flex', gap: '2.5rem', justifyContent: 'center' }}
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}
              >
                <motion.div 
                    whileHover={{ y: -8, color: 'var(--accent-primary)', scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.icon}
                </motion.div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5, cursor: 'pointer' }}
        onClick={() => document.getElementById('about').scrollIntoView()}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Scroll</span>
            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--text-secondary), transparent)' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
