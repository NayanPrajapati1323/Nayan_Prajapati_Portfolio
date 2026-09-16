import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Background Interactive Particle Canvas */}
      <ParticlesBackground />

      {/* Floating Header Navbar */}
      <Header />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      {/* Floating WhatsApp Quick Connect Button */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{
          backgroundColor: '#0e0e14',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          color: '#fff',
          borderRadius: '14px'
        }}
      />
    </div>
  );
}

export default App;
