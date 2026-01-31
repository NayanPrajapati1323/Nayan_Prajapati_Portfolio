import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'CSRDigi Dashboard',
      description: 'A comprehensive dashboard for managing agricultural crops and generating public QR codes. Features role-based access control and efficient data management.',
      tech: ['Laravel', 'MySQL'],
      github: '#',
      external: '#'
    },
    {
      title: 'CSRDigi Website',
      description: 'The public-facing website for the CSRDigi project, displaying scanned crop details and project information efficiently.',
      tech: ['Laravel', 'MySQL'],
      github: '#',
      external: '#'
    },
    {
      title: 'White Mango Skincare',
      description: 'An advanced e-commerce platform for skincare products. Includes Google Auth, Email OTP, Payumoney payment, and a dynamic admin dashboard.',
      tech: ['Laravel', 'MySQL', 'Google Auth', 'Payumoney'],
      github: '#',
      external: '#'
    },
    {
      title: 'Workforce Management (WFM)',
      description: 'A meter management system with CRUD operations and a complex "Old Meter Devolution" module for tracking equipment lifecycle.',
      tech: ['Laravel', 'Livewire', 'MySQL'],
      github: '#',
      external: '#'
    },
    {
      title: 'Employee Management System',
      description: 'A system to streamline employee records, attendance, and performance tracking within an organization.',
      tech: ['Laravel', 'MySQL'],
      github: '#',
      external: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'The personal portfolio website you are viewing right now, showcasing my skills and projects with a modern UI.',
      tech: ['React.js', 'Framer Motion'],
      github: '#',
      external: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task tracking tool allowing users to create, assign, and manage daily tasks efficiently.',
      tech: ['React.js', 'MySQL'],
      github: '#',
      external: '#'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
          layout
        >
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
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
            <button 
                onClick={() => setShowAll(!showAll)}
                className="btn btn-outline" 
                style={{ padding: '15px 30px' }}
            >
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
