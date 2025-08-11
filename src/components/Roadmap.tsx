import React from 'react';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      title: 'Foundation & Development',
      status: 'completed',
      items: [
        'Smart contract development',
        'Security audits completed',
        'Testnet launch',
        'Community building'
      ]
    },
    {
      quarter: 'Q2 2024',
      title: 'Token Launch & Exchange',
      status: 'completed',
      items: [
        'Token generation event',
        'DEX listings',
        'Liquidity pool creation',
        'Staking platform launch'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'Platform Expansion',
      status: 'in-progress',
      items: [
        'Mobile app release',
        'CEX listings',
        'Partnership announcements',
        'Governance implementation'
      ]
    },
    {
      quarter: 'Q4 2024',
      title: 'Ecosystem Growth',
      status: 'upcoming',
      items: [
        'Cross-chain integration',
        'NFT marketplace',
        'DeFi protocols',
        'Global expansion'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={24} className="text-green-400" />;
      case 'in-progress':
        return <Clock size={24} className="text-yellow-400" />;
      default:
        return <Circle size={24} className="text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400';
      case 'in-progress':
        return 'border-yellow-400';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">
            Project <span className="crypto-text-gradient">Roadmap</span>
          </h2>
          <p className="body-text text-gray-300 text-lg max-w-2xl mx-auto">
            Our strategic roadmap outlines key milestones and developments that will 
            drive the future of our platform and ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform md:-translate-x-0.5"></div>

          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 ${getStatusColor(item.status)} bg-gray-900 transform md:-translate-x-2 z-10`}></div>

              {/* Content Card */}
              <div className={`glass-card p-6 ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              } hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center space-x-3 mb-4">
                  {getStatusIcon(item.status)}
                  <div>
                    <h3 className="card-title text-white">{item.title}</h3>
                    <div className="crypto-text-gradient font-semibold">{item.quarter}</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-1.5 h-1.5 crypto-gradient rounded-full"></div>
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>

                {item.status === 'completed' && (
                  <div className="mt-4 inline-flex items-center space-x-2 text-green-400 text-sm font-semibold">
                    <CheckCircle size={16} />
                    <span>Completed</span>
                  </div>
                )}

                {item.status === 'in-progress' && (
                  <div className="mt-4 inline-flex items-center space-x-2 text-yellow-400 text-sm font-semibold">
                    <Clock size={16} />
                    <span>In Progress</span>
                  </div>
                )}

                {item.status === 'upcoming' && (
                  <div className="mt-4 inline-flex items-center space-x-2 text-purple-400 text-sm font-semibold">
                    <Rocket size={16} />
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="card-title text-white mb-4">Stay Updated</h3>
            <p className="body-text text-gray-300 mb-6">
              Follow our progress and be the first to know about major milestones 
              and exciting developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn crypto-gradient text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                Join Community
              </button>
              <button className="btn glass-effect text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                Subscribe Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;