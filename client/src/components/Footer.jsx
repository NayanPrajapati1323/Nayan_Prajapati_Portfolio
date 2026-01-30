import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)', background: 'var(--card-bg)', backdropFilter: 'blur(10px)' }}
    >
      <p>Designed & Built by Nayan Prajapati</p>
      <p style={{ marginTop: '5px' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
