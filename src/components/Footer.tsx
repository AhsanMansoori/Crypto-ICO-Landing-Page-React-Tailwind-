import React from 'react';
import { Coins, Twitter, Github, Linkedin, Mail, MessageCircle } from '../icons';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Tokenomics', href: '#tokenomics' },
      { name: 'Roadmap', href: '#roadmap' },
      { name: 'Whitepaper', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Github size={20} />, href: '#', name: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: '#', name: 'Discord' },
    { icon: <Mail size={20} />, href: '#', name: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-16 mt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="crypto-gradient p-2 rounded-lg">
                <Coins size={24} color="white" />
              </div>
              <span className="crypto-text-gradient text-xl font-bold">CryptoICO</span>
            </div>
            <p className="body-text text-gray-300 mb-6 max-w-sm">
              Building the future of decentralized finance with innovative blockchain 
              technology and community-driven governance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="glass-effect p-3 rounded-lg hover:crypto-gradient transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-white font-semibold mb-2">Stay in the Loop</h4>
              <p className="text-gray-300 text-sm">Get the latest updates and exclusive offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                className="input glass-effect text-white placeholder-gray-400 md:w-64"
                placeholder="Enter your email"
              />
              <button className="btn crypto-gradient text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CryptoICO. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with ❤️ for the crypto community</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 glass-card p-4">
          <p className="text-gray-400 text-xs text-center leading-relaxed">
            <strong>Disclaimer:</strong> Cryptocurrency investments carry significant risk. 
            Past performance does not guarantee future results. Please conduct your own research 
            and consult with financial advisors before making investment decisions. This website 
            and its content are for informational purposes only and do not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;