import React from 'react';
import { ArrowRight, Coins, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-animation absolute top-20 left-10 text-purple-500 opacity-20">
          <Coins size={60} />
        </div>
        <div className="floating-animation absolute top-40 right-20 text-blue-500 opacity-20">
          <Zap size={80} />
        </div>
        <div className="floating-animation absolute bottom-40 left-20 text-purple-400 opacity-20">
          <Shield size={70} />
        </div>
        <div className="floating-animation absolute bottom-20 right-10 text-blue-400 opacity-20">
          <Coins size={50} />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="hero-title text-white mb-6 animate-fade-in">
            The Future of{' '}
            <span className="crypto-text-gradient">Decentralized Finance</span>
          </h1>

          {/* Subheading */}
          <p className="body-text text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join the revolution with our innovative blockchain platform. Secure, fast, and transparent 
            transactions powered by cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn btn-primary crypto-gradient text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg">
              Buy Tokens Now
              <ArrowRight size={20} />
            </button>
            <button className="btn glass-effect text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold crypto-text-gradient mb-2">$50M+</div>
              <div className="text-gray-300">Total Raised</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold crypto-text-gradient mb-2">100K+</div>
              <div className="text-gray-300">Token Holders</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold crypto-text-gradient mb-2">25+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;