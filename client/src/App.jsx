import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import FluidCursor from './components/FluidCursor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ParticlesBackground />
        <FluidCursor />

        <Header />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ToastContainer position="bottom-right" theme="colored" />
      </div>
    </ThemeProvider>
  );
}

export default App;
