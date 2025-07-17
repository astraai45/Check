export interface Project {
  id: string;
  title: string;
  descriptor: string;
  category: 'real-time' | 'machine-learning' | 'generative-ai' | 'deep-learning' | 'computer-vision' | 'fullstack-ai';
  industry: string;
  thumbnail: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  demoLink?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialties: string[];
}