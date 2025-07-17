import React, { useState } from 'react';
import { Lightbulb, Users, Award, Zap, Calendar, MapPin } from 'lucide-react';
import { TeamMember } from '../types/Project';

const About: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alex Chen',
      role: 'Lead AI Engineer',
      bio: 'Former Google AI researcher with 10+ years in machine learning and neural networks. Specializes in computer vision and NLP.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Machine Learning', 'Computer Vision', 'NLP']
    },
    {
      id: '2',
      name: 'Sarah Kim',
      role: 'Full-Stack Developer',
      bio: 'Expert in modern web technologies and cloud architecture. Led development teams at top tech companies.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['React', 'Node.js', 'AWS']
    },
    {
      id: '3',
      name: 'Marcus Johnson',
      role: 'DevOps Engineer',
      bio: 'Infrastructure and automation specialist. Ensures our solutions scale seamlessly and maintain high availability.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Docker', 'Kubernetes', 'CI/CD']
    },
    {
      id: '4',
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      bio: 'PhD in Statistics with expertise in predictive modeling and business intelligence. Transforms data into actionable insights.',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Python', 'R', 'Data Visualization']
    },
    {
      id: '5',
      name: 'David Park',
      role: 'UX/UI Designer',
      bio: 'Creative problem solver with 8 years in digital design. Creates intuitive interfaces that users love.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Figma', 'Design Systems', 'User Research']
    },
    {
      id: '6',
      name: 'Lisa Zhang',
      role: 'Project Manager',
      bio: 'Agile certified PM with track record of delivering complex projects on time and within budget.',
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Agile', 'Scrum', 'Risk Management']
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to democratize AI technology' },
    { year: '2021', title: 'First Major Client', description: 'Delivered game-changing ML solution for Fortune 500 company' },
    { year: '2022', title: '100+ Projects', description: 'Reached milestone of 100 successfully delivered projects' },
    { year: '2023', title: 'AI Innovation Award', description: 'Recognized for breakthrough in generative AI applications' },
    { year: '2024', title: 'Global Expansion', description: 'Extended operations to serve clients across 5 continents' }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions that transform industries'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service'
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Uncompromising quality in every line of code and every solution we deliver'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Fast, iterative development that adapts to your changing business needs'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/80 border-t border-slate-700">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Astra 360 Solutions is a leading provider of AI, machine learning, and digital transformation services. Our mission is to empower businesses and individuals with innovative, data-driven solutions that drive growth and efficiency.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Lightbulb className="h-6 w-6 text-purple-400" />
                <span className="text-gray-200">Cutting-edge AI & ML expertise</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-400" />
                <span className="text-gray-200">Collaborative, client-focused approach</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="text-gray-200">Award-winning solutions & proven results</span>
              </li>
              <li className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-teal-400" />
                <span className="text-gray-200">Fast, reliable project delivery</span>
              </li>
              <li className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-pink-400" />
                <span className="text-gray-200">Years of experience across industries</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-green-400" />
                <span className="text-gray-200">Global reach, local impact</span>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Astra 360 Solutions"
              className="rounded-2xl shadow-lg border border-slate-700"
            />
          </div>
        </div>
        {/* Removed Our Team section */}
      </div>
    </section>
  );
};

export default About;