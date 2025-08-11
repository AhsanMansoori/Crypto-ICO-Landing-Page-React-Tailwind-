import React from 'react';
import { Zap, Shield, Network, Coins, Globe, Lock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Process thousands of transactions per second with minimal fees and instant confirmations.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Military-Grade Security',
      description: 'Advanced cryptographic protocols ensure your assets are protected at all times.'
    },
    {
      icon: <Network size={32} />,
      title: 'Decentralized Network',
      description: 'Powered by a global network of validators ensuring transparency and reliability.'
    },
    {
      icon: <Coins size={32} />,
      title: 'Low Transaction Costs',
      description: 'Enjoy minimal fees while maintaining high-speed transaction processing.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Accessibility',
      description: 'Access your funds from anywhere in the world, 24/7 without restrictions.'
    },
    {
      icon: <Lock size={32} />,
      title: 'Smart Contracts',
      description: 'Automated, trustless contracts that execute exactly as programmed.'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">
            Why Choose <span className="crypto-text-gradient">CryptoICO</span>
          </h2>
          <p className="body-text text-gray-300 text-lg max-w-2xl mx-auto">
            Our platform combines cutting-edge blockchain technology with user-friendly design 
            to deliver the ultimate DeFi experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="crypto-gradient p-4 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="card-title text-white mb-4">{feature.title}</h3>
              <p className="body-text text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 glass-card p-8 md:p-12 text-center">
          <h3 className="section-title text-white mb-6">Built for the Future</h3>
          <p className="body-text text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Our blockchain infrastructure is designed to scale with the growing demands of the 
            decentralized economy. Join thousands of users who trust our platform for their 
            digital asset needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn crypto-gradient text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300">
              Start Trading
            </button>
            <button className="btn glass-effect text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;