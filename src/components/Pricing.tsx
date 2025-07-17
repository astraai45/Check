import React from 'react';
import { GraduationCap, Smartphone, Globe, CheckCircle, FileText, Layout, ShieldCheck } from 'lucide-react';

const featureList = [
  [
    'Complete project development',
    'Comprehensive documentation',
    'Technical documentation',
    'Source code with comments',
    'Project presentation materials',
  ],
  [
    'Native iOS and Android apps',
    'Modern UI/UX design',
    'App maintenance',
    'Performance optimization',
    'App store deployment',
  ],
  [
    'Responsive design',
    'E-commerce solutions',
    'CMS integration',
    'SEO optimization',
    'Performance optimization',
  ],
];

const Pricing: React.FC = () => (
  <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 border-t border-slate-700">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
        Pricing & Services
      </h2>
      <div className="flex flex-row gap-8 mb-12 justify-center items-stretch mt-0">
        {/* Engineering College Projects */}
        <div className="flex-1 bg-slate-800/70 rounded-2xl p-8 border border-purple-500/40 shadow-xl flex flex-col min-w-[260px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40 hover:border-purple-400/80 group relative overflow-hidden min-h-[540px]">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-12 w-12 text-purple-400 group-hover:animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Engineering College Projects</h3>
          <ul className="flex-1 flex flex-col gap-3 mb-6">
            {featureList[0].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-200">
                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto text-center pt-4">
            <div className="text-3xl font-bold text-white mb-2">₹4,999+</div>
            <div className="text-sm text-gray-400">(Depends on complexity)</div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
        </div>
        {/* Mobile Applications */}
        <div className="flex-1 bg-slate-800/70 rounded-2xl p-8 border border-blue-500/40 shadow-xl flex flex-col min-w-[260px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-400/80 group relative overflow-hidden min-h-[540px]">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="h-12 w-12 text-blue-400 group-hover:animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Mobile Applications</h3>
          <ul className="flex-1 flex flex-col gap-3 mb-6">
            {featureList[1].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-200">
                <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto text-center pt-4">
            <div className="text-3xl font-bold text-white mb-2">₹19,999+</div>
            <div className="text-sm text-gray-400">(Depends on features)</div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        </div>
        {/* Web Development */}
        <div className="flex-1 bg-slate-800/70 rounded-2xl p-8 border border-green-500/40 shadow-xl flex flex-col min-w-[260px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-green-500/40 hover:border-green-400/80 group relative overflow-hidden min-h-[540px]">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-12 w-12 text-green-400 group-hover:animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Web Development</h3>
          <ul className="flex-1 flex flex-col gap-3 mb-6">
            {featureList[2].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-200">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto text-center pt-4">
            <div className="text-3xl font-bold text-white mb-2">₹14,999+</div>
            <div className="text-sm text-gray-400">(Depends on requirements)</div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-green-600/20 to-blue-600/20" />
        </div>
      </div>
      <div className="text-center text-gray-400 text-lg max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-white mb-8">Additional Services</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Documentation Card */}
          <div className="flex-1 flex flex-col items-center min-w-[180px] max-w-xs transition-transform duration-300 hover:scale-105 group cursor-pointer">
            <FileText className="h-10 w-10 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">Documentation</h4>
            <p className="text-gray-300 text-center">Comprehensive technical documentation for all projects</p>
          </div>
          {/* UI/UX Design Card */}
          <div className="flex-1 flex flex-col items-center min-w-[180px] max-w-xs transition-transform duration-300 hover:scale-105 group cursor-pointer">
            <Layout className="h-10 w-10 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
            <h4 className="text-xl font-semibold text-blue-300 mb-2">UI/UX Design</h4>
            <p className="text-gray-300 text-center">Modern and intuitive user interface design</p>
          </div>
          {/* Quality Assurance Card */}
          <div className="flex-1 flex flex-col items-center min-w-[180px] max-w-xs transition-transform duration-300 hover:scale-105 group cursor-pointer">
            <ShieldCheck className="h-10 w-10 text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300" />
            <h4 className="text-xl font-semibold text-green-300 mb-2">Quality Assurance</h4>
            <p className="text-gray-300 text-center">Rigorous testing and quality control</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing; 