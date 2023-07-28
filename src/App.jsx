import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const appStyle = {
  fontFamily: 'Myriad Pro, Arial',
};

const App = () => {
  return (
    <div className="app" style={appStyle}>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
