import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  isDarkMode: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Image Gallery */}
        <div className="relative h-96 bg-slate-800">
          <img
            src={project.gallery[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gallery Navigation */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-purple-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex items-center space-x-4">
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                  {project.industry}
                </span>
              </div>
            </div>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-3">Challenge</h3>
              <p className="text-gray-300">{project.challenge}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Solution</h3>
              <p className="text-gray-300">{project.solution}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full font-medium border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;