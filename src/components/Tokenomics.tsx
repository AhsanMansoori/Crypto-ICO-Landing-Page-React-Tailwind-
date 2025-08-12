import React from 'react';
import { PieChart, TrendingUp, Users, Lock } from '../icons';

const Tokenomics: React.FC = () => {
  const tokenData = [
    { label: 'Public Sale', percentage: 40, color: '#6b2aed' },
    { label: 'Team & Advisors', percentage: 20, color: '#bc62e8' },
    { label: 'Development', percentage: 15, color: '#477dea' },
    { label: 'Marketing', percentage: 10, color: '#e87ce8' },
    { label: 'Reserve', percentage: 10, color: '#7c3aed' },
    { label: 'Partnerships', percentage: 5, color: '#a855f7' }
  ];

  const tokenStats = [
    {
      icon: <PieChart size={24} />,
      title: 'Total Supply',
      value: '1,000,000,000',
      suffix: 'CRYPTO'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Initial Price',
      value: '$0.05',
      suffix: 'USD'
    },
    {
      icon: <Users size={24} />,
      title: 'Soft Cap',
      value: '$5M',
      suffix: 'USD'
    },
    {
      icon: <Lock size={24} />,
      title: 'Hard Cap',
      value: '$50M',
      suffix: 'USD'
    }
  ];

  return (
    <section id="tokenomics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">
            <span className="crypto-text-gradient">Tokenomics</span>
          </h2>
          <p className="body-text text-gray-300 text-lg max-w-2xl mx-auto">
            Transparent and sustainable token distribution designed to ensure long-term 
            project success and community growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Token Distribution Chart */}
          <div className="glass-card p-8">
            <h3 className="card-title text-white mb-8 text-center">Token Distribution</h3>
            
            {/* Simplified Pie Chart Representation */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full crypto-gradient opacity-20"></div>
              <div className="absolute inset-4 rounded-full bg-gray-900/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold crypto-text-gradient">1B</div>
                  <div className="text-gray-300">Total Supply</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                  <span className="text-white font-semibold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Token Stats */}
          <div className="space-y-6">
            <h3 className="card-title text-white mb-8">Token Information</h3>
            
            {tokenStats.map((stat, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="crypto-gradient p-3 rounded-lg">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">{stat.title}</div>
                    <div className="text-white text-xl font-bold">
                      {stat.value} <span className="text-purple-400">{stat.suffix}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="glass-card p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 crypto-gradient rounded-full"></div>
                  <span>Deflationary mechanism with token burns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 crypto-gradient rounded-full"></div>
                  <span>Staking rewards up to 12% APY</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 crypto-gradient rounded-full"></div>
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 crypto-gradient rounded-full"></div>
                  <span>Liquidity mining opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;