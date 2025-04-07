import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-handwritten">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <FAQ />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;