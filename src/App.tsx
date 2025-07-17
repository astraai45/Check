import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsShowcase from './components/ProjectsShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Pricing from './components/Pricing';
import { Project } from './types/Project';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-white transition-all duration-300">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <ProjectsShowcase onProjectClick={openProjectModal} />
        <About />
        <Pricing />
        <Contact />
        <Footer />
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeProjectModal} 
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;