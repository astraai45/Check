import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Rocket, Share2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Rocket className="h-8 w-8 text-purple-400" />
              {/* Removed glowing rounded bg */}
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Astra 360
              </h1>
              <p className="text-xs text-gray-400 font-light">Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation - shifted to right */}
          <div className="flex-1 flex justify-end">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                item.name !== 'Contact' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-5 py-2 rounded-full bg-slate-800/60 backdrop-blur text-gray-200 font-medium transition-all duration-300 hover:scale-105 hover:shadow-purple-400/40 hover:bg-purple-600/60 hover:text-white shadow-sm border border-slate-700"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg border border-transparent transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-purple-400/40"
                  >
                    <span>Contact</span>
                    <Share2 className="ml-2 h-5 w-5" />
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Removed theme toggle button */}
            <button
              className="md:hidden p-2 rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;