import React from 'react';
import { Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'AI & Machine Learning',
      'Web Development',
      'Mobile Development',
      'Data Analytics',
      'Cloud Solutions',
      'Consulting'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press',
      'Partners',
      'Blog'
    ],
    resources: [
      'Case Studies',
      'Whitepapers',
      'Documentation',
      'API Reference',
      'Support',
      'Community'
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Rocket className="h-8 w-8 text-purple-400" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Astra Digital
                </h3>
                <p className="text-xs text-gray-400">Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Delivering tomorrow's solutions today. We transform businesses through intelligent technology solutions that drive growth and innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">astraai45@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">+91 6301756758</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Astra Digital Solutions. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
              <span className="text-gray-500 hidden md:inline"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;