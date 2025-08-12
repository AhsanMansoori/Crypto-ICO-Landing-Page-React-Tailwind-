import React, { useState } from 'react';
import { Menu, X, Coins } from '../icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="crypto-gradient p-2 rounded-lg">
              <Coins size={24} color="white" />
            </div>
            <span className="crypto-text-gradient text-xl font-bold">CryptoICO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn btn-primary crypto-gradient text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
              Buy Tokens
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <button className="btn btn-primary crypto-gradient text-white font-semibold px-6 py-2 rounded-lg mt-4">
                Buy Tokens
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;