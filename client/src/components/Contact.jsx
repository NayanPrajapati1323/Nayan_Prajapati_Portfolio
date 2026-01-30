import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/portfolio/sendEmail', formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', msg: '' });
      } else {
        toast.error('Failed to send message: ' + response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <span className="subtitle">03. What's Next?</span>
          <h2 className="title" style={{ fontSize: '3rem', margin: '1rem 0' }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.form 
            className="glass" 
            onSubmit={handleSubmit} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } }
            }}
            style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'left', border: '1px solid var(--glass-border)' }}
          >
            <motion.div variants={inputVariants} style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>
            <motion.div variants={inputVariants} style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>
            <motion.div variants={inputVariants} style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
              <textarea 
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
              ></textarea>
            </motion.div>
            <motion.button 
              variants={inputVariants}
              type="submit" 
              className="btn btn-primary" 
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', marginBottom: '0' }}
            >
              {loading ? 'Sending...' : <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>Send Message <FiSend /></span>}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
