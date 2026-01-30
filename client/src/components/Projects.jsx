import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online stores, featuring real-time data visualization and order management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: '#',
      external: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool that helps teams organize and prioritize their work effectively.',
      tech: ['React', 'Firebase', 'Redux', 'Material UI'],
      github: '#',
      external: '#'
    },
    {
      title: 'Weather Application',
      description: 'A sleek weather app that provides accurate forecasts and weather conditions for any location worldwide.',
      tech: ['JavaScript', 'OpenWeather API', 'HTML/CSS'],
      github: '#',
      external: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing skills and projects, built with modern web technologies.',
        tech: ['React', 'Framer Motion', 'CSS Module'],
        github: '#',
        external: '#'
      }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           style={{ textAlign: 'center' }}
        >
          <h2 className="title">Featured <span className="text-gradient">Projects</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
             Here are some things I've built.
          </p>
        </motion.div>

        <motion.div 
          className="grid-auto-fit"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass-card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}
            >
              <div 
                style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', 
                  background: 'var(--accent-gradient)' 
                }}
              ></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                 <FiFolder size={40} color="var(--accent-primary)" />
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover-scale"
                    style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}
                   >
                     <FiGithub />
                   </a>
                   <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover-scale"
                    style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}
                   >
                     <FiExternalLink />
                   </a>
                 </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{project.title}</h3>
              
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', listStyle: 'none', padding: 0 }}>
                  {project.tech.map(tech => (
                    <li key={tech} style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="#" className="btn btn-outline" style={{ padding: '15px 30px' }}>
                Show More
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
