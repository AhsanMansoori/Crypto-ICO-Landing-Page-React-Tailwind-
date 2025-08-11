import React, { useState } from 'react';
import { Mail, MessageCircle, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit handler
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      info: 'hello@cryptoico.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Live Chat',
      info: '24/7 Support',
      description: 'Get instant help from our team'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      info: 'San Francisco, CA',
      description: 'Visit our headquarters'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">
            Get In <span className="crypto-text-gradient">Touch</span>
          </h2>
          <p className="body-text text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about our ICO or want to learn more about our platform? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="card-title text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input glass-effect text-white placeholder-gray-400 w-full"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input glass-effect text-white placeholder-gray-400 w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="select glass-effect text-white w-full"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="partnership">Partnership</option>
                  <option value="technical">Technical Support</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="textarea glass-effect text-white placeholder-gray-400 w-full resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn crypto-gradient text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full justify-center"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="card-title text-white mb-6">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="crypto-gradient p-3 rounded-lg">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <div className="crypto-text-gradient font-medium mb-1">{item.info}</div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ Section */}
            <div className="glass-card p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-purple-300 font-medium mb-1">When is the token sale?</h5>
                  <p className="text-gray-400 text-sm">Our public sale is currently live and will run until we reach our hard cap.</p>
                </div>
                <div>
                  <h5 className="text-purple-300 font-medium mb-1">What's the minimum investment?</h5>
                  <p className="text-gray-400 text-sm">The minimum investment is $100 USD equivalent in ETH or USDT.</p>
                </div>
                <div>
                  <h5 className="text-purple-300 font-medium mb-1">When will tokens be distributed?</h5>
                  <p className="text-gray-400 text-sm">Token distribution will begin 30 days after the sale concludes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="glass-card p-8 text-center max-w-2xl mx-auto">
            <h3 className="card-title text-white mb-4">Stay Updated</h3>
            <p className="body-text text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, announcements, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                className="input glass-effect text-white placeholder-gray-400 flex-1"
                placeholder="Enter your email"
              />
              <button className="btn crypto-gradient text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;