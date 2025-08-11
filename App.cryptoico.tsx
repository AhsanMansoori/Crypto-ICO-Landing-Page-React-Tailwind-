import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import Features from './src/components/Features';
import Tokenomics from './src/components/Tokenomics';
import Roadmap from './src/components/Roadmap';
import Team from './src/components/Team';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;