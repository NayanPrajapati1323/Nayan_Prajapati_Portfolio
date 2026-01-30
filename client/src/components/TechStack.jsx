import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiFigma, SiDocker, SiNextdotjs } from 'react-icons/si';

import MatrixBackground from './MatrixBackground';

const TechStack = () => {
  const techs = [
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'React', icon: <SiReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
    { name: 'Express', icon: <SiExpress color="var(--text-primary)" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="var(--text-primary)" /> },
    { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
    { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Git', icon: <SiGit color="#F05032" /> },
    { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section" style={{ position: 'relative', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <MatrixBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           style={{ textAlign: 'center' }}
        >
          <h2 className="title">My <span className="text-gradient">Tech Stack</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
            Technologies I've been working with recently.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid-auto-fit"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '2rem' }}
        >
          {techs.map((tech, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass-card flex-center"
              style={{ padding: '2rem 1rem', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}
            >
              <div style={{ fontSize: '3rem' }}>
                {tech.icon}
              </div>
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
