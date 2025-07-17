import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <Star className="h-1 w-1 text-purple-400 opacity-60" />
            </div>
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-600/20 to-purple-600/20 rounded-full blur-xl animate-float-slow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Delivering Tomorrow's Solutions Today</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Transformative
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Freelance tech experts delivering cutting-edge projects in{' '}
            <span className="text-purple-400 font-semibold">AI</span>,{' '}
            <span className="text-blue-400 font-semibold">Machine Learning</span>, and{' '}
            <span className="text-teal-400 font-semibold">Real-Time Systems</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">132+</div>
              <div className="text-sm text-gray-400">Client Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#contact" className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Contact Astra
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;