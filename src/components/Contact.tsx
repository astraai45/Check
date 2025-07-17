import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, DollarSign } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    projectType: '',
    timeline: 1,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Real-Time Systems',
    'Machine Learning',
    'Generative AI',
    'Deep Learning',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Only allow digits for phone number
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: digitsOnly
      }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      timeline: parseInt(e.target.value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // WhatsApp integration
    const whatsappNumber = '919390971479';
    const whatsappMessage =
      `Hi! Excited to connect with you! 😀😀%0A%0A` +
      `Name: ${formData.name}%0A` +
      `College: ${formData.company}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Project Type: ${formData.projectType}%0A` +
      `Timeline: ${formData.timeline} month(s)%0A` +
      `Message: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    setIsSubmitting(false);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      projectType: '',
      timeline: 1,
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create a solution that exceeds your expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and College */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Raj Kumar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    College
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Your College"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10,15}"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder="9876543210"
                />
              </div>

              {/* Project Type only (remove Budget) */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Timeline: {formData.timeline} month{formData.timeline > 1 ? 's' : ''}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    name="timeline"
                    min="1"
                    max="12"
                    value={formData.timeline}
                    onChange={handleTimelineChange}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 month</span>
                    <span>12 months</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-white">astraai45@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <p className="text-white">+91 6301756758</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-white">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Astra?</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24hr</div>
                  <div className="text-sm text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">500+</div>
                  <div className="text-sm text-gray-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5⭐</div>
                  <div className="text-sm text-gray-300">Avg Rating</div>
                </div>
              </div>
            </div>

            {/* Available Hours */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
              <ul className="text-gray-300 text-base space-y-2">
                <li><span className="font-semibold text-white">Monday - Friday:</span> 9:00 AM - 8:00 PM</li>
                <li><span className="font-semibold text-white">Saturday:</span> 10:00 AM - 6:00 PM</li>
                <li><span className="font-semibold text-white">Sunday:</span> Emergency Support Only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;