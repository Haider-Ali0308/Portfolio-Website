import React from 'react';
import { ExternalLink, Github, Heart, Brain, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fifty – Fitness & Diet Tracker',
      description: 'React.js & Node.js based app for tracking meals, calories, and workouts. Includes BMI calculator and fitness insights.',
      technologies: ['React.js', 'Node.js', 'JavaScript', 'CSS'],
      icon: Heart,
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Anime Recommendation System',
      description: 'Built with KNN algorithm to suggest anime by genre and ratings.',
      technologies: ['Machine Learning', 'KNN Algorithm', 'Python', 'Data Analysis'],
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Zoofari – Zoo Management Website',
      description: 'PHP/MySQL app for zoo info, ticketing, events, and admin dashboard.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Admin Dashboard'],
      icon: Zap,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {/* Project Icon */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon size={64} className="text-white opacity-80" />
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </button>
                      <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-200">
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;