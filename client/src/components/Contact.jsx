import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiCheckCircle, FiGlobe } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate instant static submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Thank you! Your message has been received.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '7rem 0 4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Massive Headline */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="outline-text"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                fontWeight: '900',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '1.5rem'
              }}
            >
              GET IN TOUCH
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: 'var(--text-muted)',
                maxWidth: '650px',
                margin: '0 auto',
                fontWeight: '300'
              }}
            >
              Have an enterprise project, API architecture, or full-time opportunity? Let's connect and build something extraordinary.
            </p>
          </motion.div>
        </div>

        {/* Primary Contact Email Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
        >
          <a
            href={`mailto:${personal.email}`}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'inline-block',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            {personal.email}
            <div
              style={{
                position: 'absolute',
                bottom: '-6px',
                left: '0',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
                borderRadius: '2px'
              }}
            />
          </a>
        </motion.div>

        {/* 2-Column Contact Info & Form */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gap: '3rem',
            maxWidth: '1050px',
            margin: '0 auto',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            <div
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <FiPhone color="#c084fc" size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                  Call / WhatsApp
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', margin: '2px 0 0 0' }}>
                  <a href={`tel:${personal.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {personal.phone}
                  </a>
                </h4>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <FiMapPin color="#22d3ee" size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                  Location
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', margin: '2px 0 0 0' }}>
                  {personal.location}
                </h4>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.6rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(236, 72, 153, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <FiGlobe color="#ec4899" size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                  Live Portfolio
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', margin: '2px 0 0 0' }}>
                  <a href={personal.portfolioUrl} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {personal.portfolioDisplay}
                  </a>
                </h4>
              </div>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  flex: 1,
                  padding: '1rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase'
                }}
              >
                <FiLinkedin color="#0077b5" size={18} /> LinkedIn
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  flex: 1,
                  padding: '1rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase'
                }}
              >
                <FiGithub size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                color: '#ffffff'
              }}
            >
              Send A Message
            </h3>

            {isSubmitted ? (
              <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <FiCheckCircle size={50} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thank you for reaching out. Nayan will get back to you promptly at your email address.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-glow-outline"
                  style={{ marginTop: '1.5rem', fontSize: '0.78rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Subject / Project
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Laravel Backend Consultation"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project goals and timeline..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? 'Sending Message...' : <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Send Message <FiSend /></span>}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
