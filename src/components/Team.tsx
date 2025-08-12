import React from 'react';
import { Linkedin, Twitter, Github } from '../icons';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=1',
      bio: 'Former Goldman Sachs executive with 15+ years in fintech and blockchain innovation.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=2',
      bio: 'Ex-Google engineer specializing in distributed systems and cryptocurrency protocols.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Marketing',
      image: 'https://i.pravatar.cc/300?img=3',
      bio: 'Growth marketing expert who scaled multiple crypto startups to unicorn status.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Watson',
      role: 'Lead Developer',
      image: 'https://i.pravatar.cc/300?img=4',
      bio: 'Smart contract specialist with expertise in Solidity and DeFi protocol development.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Cybersecurity expert with a track record of securing billion-dollar crypto platforms.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Community Manager',
      image: 'https://i.pravatar.cc/300?img=6',
      bio: 'Community building specialist who grew crypto communities from zero to millions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">
            Meet Our <span className="crypto-text-gradient">Team</span>
          </h2>
          <p className="body-text text-gray-300 text-lg max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in 
            blockchain technology, finance, and business development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden gradient-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Social Icons */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={member.social.linkedin}
                      className="glass-effect p-2 rounded-full hover:crypto-gradient transition-all duration-300"
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="glass-effect p-2 rounded-full hover:crypto-gradient transition-all duration-300"
                    >
                      <Twitter size={16} className="text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="glass-effect p-2 rounded-full hover:crypto-gradient transition-all duration-300"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="card-title text-white mb-2">{member.name}</h3>
                <div className="crypto-text-gradient font-semibold mb-4">{member.role}</div>
                <p className="body-text text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="section-title text-white mb-4">Advisory Board</h3>
            <p className="body-text text-gray-300 max-w-2xl mx-auto">
              Our advisory board consists of industry veterans and thought leaders 
              who guide our strategic vision and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Robert Smith', role: 'Blockchain Advisor', company: 'Former MIT Professor' },
              { name: 'Jennifer Lee', role: 'Financial Advisor', company: 'Ex-JP Morgan VP' },
              { name: 'Thomas Anderson', role: 'Tech Advisor', company: 'Former Tesla CTO' },
              { name: 'Maria Garcia', role: 'Legal Advisor', company: 'Crypto Law Expert' }
            ].map((advisor, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full crypto-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm">{advisor.name}</h4>
                <div className="crypto-text-gradient text-xs font-medium">{advisor.role}</div>
                <div className="text-gray-400 text-xs">{advisor.company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="card-title text-white mb-4">Join Our Team</h3>
            <p className="body-text text-gray-300 mb-6">
              We're always looking for talented individuals to join our mission of 
              revolutionizing decentralized finance.
            </p>
            <button className="btn crypto-gradient text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;